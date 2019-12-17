import * as actions from './actionsType';
import firebase from './../../Firebase';
import history from '../../history';
import {toast} from 'react-toastify';

export const signUp =(data)=>{
    
    return async (dispatch)  =>{
        dispatch({ type: actions.AUTH_START });
        try {
            const response = await firebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password);

            console.log(response);
            await firebase.firestore()
                .collection('users')
                .doc(response.user.uid)
                .set({
                    name  : data.name,
                    email : data.email                    
                });

            dispatch({ type: actions.AUTH_SUCCESS });
        } catch (error) {
            dispatch({ type: actions.AUTH_FAIL, payload: error.message });
            toast.error(error.message);
        }
        dispatch({ type: actions.AUTH_END });
        
    };
}

export const editProfile =(data)=>{
    
    return async (dispatch,getState)  =>{
        
        dispatch({ type: actions.AUTH_START });
        try {

            const user = await firebase
            .auth().currentUser;
            await firebase.updateProfile({
                name  : data.name,
                email : data.email
            });

            if (user.email != data.email){
                await user.updateEmail(data.email)
            };

            if (data.password.length > 0){
                await user.updatePassword(data.password)
            };
                
            dispatch({ type: actions.AUTH_SUCCESS });
        } catch (error) {
            dispatch({ type: actions.AUTH_FAIL, payload: error.message });
            toast.error(error.message);
        }
        dispatch({ type: actions.AUTH_END });
        
    };
}


export const signOut =()=>{
    
    return async (dispatch)  =>{
        dispatch({ type: actions.AUTH_START });
        try {
            const response = await firebase
            .auth()
            .signOut();

            dispatch({ type: actions.AUTH_SUCCESS });
            history.push('/login');
        } catch (error) {
            dispatch({ type: actions.AUTH_FAIL, payload: error.message });
            toast.error(error.message);
        }
        dispatch({ type: actions.AUTH_END });
        
    };
}
export const login =(data)=>{
    
    return async (dispatch)  =>{
        dispatch({ type: actions.AUTH_START });
        try {
            const response = await firebase
            .auth()
            .signInWithEmailAndPassword(data.email, data.password);

            dispatch({ type: actions.AUTH_SUCCESS });
                  
            if (response.user.uid)
                history.push('/todos')
        } catch (error) {
            dispatch({ type: actions.AUTH_FAIL, payload: error.message });
            toast.error(error.message);
        }
        dispatch({ type: actions.AUTH_END });
        
        
    };
}