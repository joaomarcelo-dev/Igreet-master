import { combineReducers } from "redux";
import appReducer from "./app.reducer";

const rootReducers = combineReducers({
  app: appReducer,
});

export default rootReducers;