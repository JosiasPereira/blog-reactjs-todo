import * as actions from './actionsType';
import {toast} from 'react-toastify';
import firebase from './../../Firebase';


export const addTodo =(data)=>{
    
    return async (dispatch,getState)  =>{
        
        dispatch({ type: actions.TODO_ADD_START });
        try {
            const userId = getState().firebase.auth.uid;

            const todoNew={
                id : new Date().valueOf(),
                todo : data.todo
            }
            const res = await firebase.firestore()
                .collection('todos')
                .doc(userId)
                .get();
            if (!res.data()){
                const todo = await firebase.firestore()
                    .collection('todos')
                    .doc(userId)
                    .set({
                        todos: [todoNew]
                    });
            }else{
                const todo = await firebase.firestore()
                    .collection('todos')
                    .doc(userId)
                    .set({
                        todos: [...res.data().todos,todoNew]
                    }); 
            }
                        
                
            dispatch({ type: actions.TODO_ADD_SUCCESS });
            toast.success('Todo salvo!')
        } catch (error) {
            dispatch({ type: actions.TODO_ADD_FAIL, payload: error.message });
            toast.error(error.message);
        }        
        return true;
    };
}


export const listTodo =()=>{
    
    return async (dispatch,getState)  =>{
        
        dispatch({ type: actions.TODO_LIST_START });
        try {
            const userId = getState().firebase.auth.uid;

            const res = await firebase.firestore()
                .collection('todos')
                .doc(userId) 
                .get();                                            
            
            if (res.data()){
                dispatch({ type: actions.TODO_LIST_SUCCESS, payload: res.data().todos.reverse() });
                return true;
            }else{
                dispatch({ type: actions.TODO_LIST_SUCCESS, payload: [] });
                return []
            }        
                            
            
        } catch (error) {
            dispatch({ type: actions.TODO_LIST_FAIL, payload: error.message });
            toast.error(error.message);
        }        
        return true;
    };
}



export const deleteTodo =(id)=>{
    
    return async (dispatch,getState)  =>{
        
        dispatch({ type: actions.TODO_DELETE_START });
        try {
            const userId = getState().firebase.auth.uid;

            const res = await firebase.firestore()
                .collection('todos')
                .doc(userId) 
                .get(); 
            
            const previousTodos = res.data().todos;
            const newTodos = previousTodos.filter(todo => todo.id !== id);
            await firebase.firestore()
                .collection('todos')
                .doc(userId)
                .update({
                    todos: newTodos,
                });
            
            dispatch({ type: actions.TODO_DELETE_SUCCESS, payload: newTodos.reverse() });       
            toast.success('Todo deletado!');              
            
        } catch (error) {
            dispatch({ type: actions.TODO_DELETE_FAIL, payload: error.message });
            toast.error(error.message);
        }        
        return true;
    };
}


export const updateTodo =(data)=>{
    
    return async (dispatch,getState)  =>{
        
        dispatch({ type: actions.TODO_UPDATE_START });
        try {
            const userId = getState().firebase.auth.uid;

            const res = await firebase.firestore()
                .collection('todos')
                .doc(userId) 
                .get(); 
            const todos = res.data().todos;           
            const index = todos.findIndex(todo => todo.id === data.id);
            todos[index].todo = data.todo;
            await firebase.firestore()
                .collection('todos')
                .doc(userId)
                .update({
                    todos,
                });
            
            dispatch({ type: actions.TODO_UPDATE_SUCCESS, payload: todos.reverse() });       
            toast.success('Todo deletado!');              
            
        } catch (error) {
            dispatch({ type: actions.TODO_UPDATE_FAIL, payload: error.message });
            toast.error(error.message);
        }        
        return true;
    };
}
