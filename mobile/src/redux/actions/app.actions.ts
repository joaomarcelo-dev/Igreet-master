import { RequestStatusType } from "../../Types/AppReducer.type";

export const SET_REQUEST_STATUS = 'SET_REQUEST_STATUS';

const setRequestStatus = (payload: RequestStatusType) => ({
  type: SET_REQUEST_STATUS,
  payload,
});


const appActions = {
  setRequestStatus,
}

export default appActions;
