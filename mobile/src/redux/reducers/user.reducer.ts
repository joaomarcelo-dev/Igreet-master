import { UserReducer } from "../../Types/UserReducer.tyṕe";
import { SET_USER_DATA } from "../actions/user.actions";

const INITIAL_STATE: UserReducer = {
  user: {
    name: '',
  },
  token: '',
}

const userReducer = (state = INITIAL_STATE, action: { type: string, payload: any }) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, user: action.payload.user, token: action.payload.token }
    default:
      return state
  }
}

export default userReducer;
