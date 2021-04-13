
import { AUTH__ME__END, AUTH__ME__ERROR, AUTH__ME__PROCESS, AUTH__ME__START, AUTH__ME__RESET, AuthMe } from "./types"
import { requestAPI } from "../../api/requestMethod"
import { RootState, ThunkType } from "../.."
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';


export const authMeStart = ():Start => {
    return {type:AUTH__ME__START}
}

export const authMeProcess = ():Process => {
    return {type:AUTH__ME__PROCESS}
}

export const authMeEnd = (payload:EndPayload):End => {
    return {type:AUTH__ME__END,payload}
}

export const authMeError = (payload:ErrorPayload):Error => {
    return {type:AUTH__ME__ERROR,payload}
}

export const authMeReset = ():Reset => {
    return {type:AUTH__ME__RESET}
}

type XXX =  Start | Process | End | Error | Reset

export const authMeThunk = ():ThunkType<XXX> => (dispatch) => {
    dispatch(authMeStart())
    dispatch(authMeProcess())
    requestAPI.authMe()
    .then(data => {
        dispatch(authMeEnd(data as EndPayload))
    })
    .catch(e => {
        dispatch(authMeError(e.response.data))
    })
}

type Start = {
    type: AuthMe
}

type Process = {
    type: AuthMe
}

type EndPayload = {
    success: boolean;
    email: '';
    name: '';
    role: '';
    
}

type End = {
    type: AuthMe
    payload:EndPayload
    
}

type ErrorPayload = {
    success:boolean,
    error:string
}

type Error = {
    type: AuthMe
    payload:ErrorPayload
}

type Reset = {
    type: AuthMe
}

export type AuthPayload = ErrorPayload | EndPayload

