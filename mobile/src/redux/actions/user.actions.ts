export const SET_USER_DATA = "SET_USER_DATA";

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

const userActions = {
  setUser,
};

export default userActions;
