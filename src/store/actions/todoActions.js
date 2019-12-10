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
