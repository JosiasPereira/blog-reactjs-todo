import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import auth  from './authReducer';



export const Reducers = combineReducers({
    auth : auth,
    firebase: firebaseReducer,
    firestore: firestoreReducer,

});
