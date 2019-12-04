import { createStore,applyMiddleware} from 'redux';
import { Reducers} from './reducers';
import ReduxThunk from 'redux-thunk';

const store = createStore(Reducers, applyMiddleware(ReduxThunk));
export default store;