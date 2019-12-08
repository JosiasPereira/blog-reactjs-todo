import { compose, createStore,applyMiddleware} from 'redux';
import { Reducers} from './reducers';
import ReduxThunk from 'redux-thunk';
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore' 
import firebase from '../Firebase';

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
}



const store = createStore(Reducers, applyMiddleware(ReduxThunk));

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
}
export {rrfProps};
export default store;