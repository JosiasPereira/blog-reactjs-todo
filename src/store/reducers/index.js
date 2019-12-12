import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import auth  from './authReducer';
import todo  from './todoReducer';



export const Reducers = combineReducers({
    auth : auth,
    todo : todo,
    firebase: firebaseReducer,
    firestore: firestoreReducer,

});
