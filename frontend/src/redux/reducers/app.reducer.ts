import { AppReducerType } from "../../types/Reducers.type";

const initialState: AppReducerType = {
  token: '',
}

const appReducer = (state = initialState, action: { payload: string | object, type: string }) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.payload }
    default:
      return state;
  }
}

export default appReducer;
