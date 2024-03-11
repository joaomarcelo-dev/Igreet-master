export const SET_TOKEN = 'SET_TOKEN';

const setToken = (token: string) => {
  return {
    type: SET_TOKEN,
    payload: token
  }
}

const appActions = {
  setToken,
}

export default appActions;
