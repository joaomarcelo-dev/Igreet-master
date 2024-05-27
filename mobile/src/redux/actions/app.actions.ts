import { RequestStatusType } from "../../Types/AppReducer.type";

export const SET_REQUEST_STATUS = 'SET_REQUEST_STATUS';
export const SET_LOADING = 'SET_LOADING'

const setRequestStatus = (payload: RequestStatusType) => ({
  type: SET_REQUEST_STATUS,
  payload,
});

const setLoading = (payload: boolean) => ({
  type: SET_LOADING,
  payload,
})

const appActions = {
  setRequestStatus,
  setLoading,
}

export default appActions;
