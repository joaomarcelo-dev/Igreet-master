import { AppReducerType } from "../../Types/AppReducer.type";
import { SET_REQUEST_STATUS } from "../actions/app.actions";

const INITIAL_STATE: AppReducerType  = {
  loading: false,
  requestStatus: {
    visible: false,
    success: true
  },
}

const appReducer = (state = INITIAL_STATE, action: { type: string, payload: any }) => {
  switch(action.type) {
    case SET_REQUEST_STATUS:
      return { ...state, requestStatus: { success: action.payload }}
    default:
      return state;
  }
}

export default appReducer;