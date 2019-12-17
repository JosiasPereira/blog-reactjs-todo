import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './store';
import {rrfProps } from './store';
import { Provider } from 'react-redux';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'
import { BrowserRouter, Router } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
import Loading from './components/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from './history'


function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <Loading/>;
    return children
  }

toast.configure({
    autoClose:4000
});
ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <Router history={history}>
                <AuthIsLoaded>  
                    
                    <App/>
                    
                    
                </AuthIsLoaded>
            </Router>
        </ReactReduxFirebaseProvider>
        
        
    </Provider>
    , 
    document.getElementById('root'));



