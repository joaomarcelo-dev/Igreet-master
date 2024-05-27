import { combineReducers } from 'redux';
import appReducer from './app.reducer';
import userReducer from './user.reducer';

const rootReducers = combineReducers({
  app: appReducer,
  user: userReducer,
});

export default rootReducers;
