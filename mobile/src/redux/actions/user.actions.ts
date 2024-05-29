import { UserReducer } from "../../Types/UserReducer.tyṕe";

export const SET_USER_DATA = "SET_USER_DATA";
export const LOG_OUT = 'LOG_OUT';

type SetUserType = {
  user: {
    name: string,
  },
  token: string,
}

const setUser = (payload: SetUserType) => ({
  type: SET_USER_DATA,
  payload,
});

const logOut = () => ({
  type: LOG_OUT,
  payload: {
     user: {
      name: ''
    },
    token: '',  
  } as UserReducer
});

const userActions = {
  setUser,
  logOut,
};

export default userActions;
