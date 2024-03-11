import { legacy_createStore  as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './reducers';

const store = createStore(rootReducers, { }, composeWithDevTools(applyMiddleware()));

export default store;