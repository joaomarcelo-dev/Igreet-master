import { AppReducerType } from "./AppReducer.type"
import { UserReducer } from "./UserReducer.tyṕe"

export type RootReducerType = {
  app: AppReducerType,
  user: UserReducer,
}