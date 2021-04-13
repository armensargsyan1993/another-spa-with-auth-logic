import { ThunkType } from "../.."
import { requestAPI } from "../../api/requestMethod"
import { authMeThunk } from "../authMeReducer/authMeActions"
import { logoutReset } from "../logoutReducer/logoutActions"
import { updateReset } from "../updateReducer/updateActions"
import { LOGIN__END, LOGIN__ERROR, LOGIN__PROCESS, LOGIN__RESET, LOGIN__START, ROUTE__COMPLETE, Login } from "./types"

export const loginStart = ():Start => {
    return {type:LOGIN__START}
}

export const loginProcess = ():Process => {
    return {type:LOGIN__PROCESS}
}

export const loginEnd = (payload:EndPayload):End => {
    return {type:LOGIN__END,payload}
}

export const loginError = (payload:ErrorPayload):Error => {
    return {type:LOGIN__ERROR,payload}
}

export const routeComplete = ():RouteComplete => {
    return {type:ROUTE__COMPLETE}
}

export const loginReset = ():Reset => {
    return {type:LOGIN__RESET}
}

export const loginThunk = (payload:LoginThunkPayload):ThunkType<ActionTypes> => (dispatch) => {
    dispatch(loginStart())
    dispatch(loginProcess())
    requestAPI.login(payload)
    .then(data => {
        console.warn(data)
        dispatch(logoutReset())
        dispatch(updateReset())
        dispatch(loginEnd({success:data.success}))
        dispatch(authMeThunk())
    })
    .catch(e => {
        dispatch(loginError(e.response.data))
    })
}

type ActionTypes = Start | Process | End | Reset | Error

type Start = {
    type: Login
}

type Process = {
    type: Login
}

type EndPayload = {
    success:boolean,
}

type End = {
    type: Login
    payload:EndPayload
    
}

type ErrorPayload = {
    success:boolean,
    error:string
}

type Error = {
    type: Login
    payload:ErrorPayload
}

type Reset = {
    type: Login
}

type RouteComplete = {
    type:Login
}

export type LoginThunkPayload = {
    success:boolean
}

export type LoginPayload = ErrorPayload | EndPayload