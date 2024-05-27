export type AppReducerType = {
  loading: boolean;
  requestStatus: RequestStatusType,
}

export type RequestStatusType = {
  visible: boolean,
  success: boolean,
}