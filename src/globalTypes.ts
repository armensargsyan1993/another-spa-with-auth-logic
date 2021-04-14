import { Action } from "redux"
import { ThunkAction } from "redux-thunk"
import { config } from "./redux/rootReducer"



export type RootState = ReturnType<typeof config>

export type ThunkType<T extends Action> = ThunkAction<
Promise<void> | void,
RootState,
unknown,
T>

type PropertiesTypes<T> = T extends {[key:string]: infer U} ? U : never
export type GetActionsTypes<T extends {[key:string]: (...args:any[])=>any}> = ReturnType<PropertiesTypes<T>> 