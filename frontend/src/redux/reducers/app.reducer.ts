import { AppReducerType } from "../../types/Reducers.type";
import { SET_APPOINTMENTS, SET_TOKEN } from "../actions/app.actions";

const initialState: AppReducerType = {
  token: '',
  appointments: []
}

const appReducer = (state = initialState, action: { payload: string | object, type: string }) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload }

    case SET_APPOINTMENTS:
      return { ...state, appointments: action.payload }
    default:
      return state;
  }
}

export default appReducer;
