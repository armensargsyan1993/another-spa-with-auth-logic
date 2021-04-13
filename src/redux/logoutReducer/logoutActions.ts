import { ThunkType } from "../.."
import { requestAPI } from "../../api/requestMethod"
import { globalStateResetInRootReducerThunk } from "../rootReducer"
import { Logout, LOGOUT__END, LOGOUT__ERROR, LOGOUT__PROCESS, LOGOUT__RESET, LOGOUT__START } from "./types"

export const logoutStart = ():Start => {
    return {type:LOGOUT__START}
}

export const logoutProcess = ():Process => {
    return {type:LOGOUT__PROCESS}
}

export const logoutEnd = (payload:EndPayload):End => {
    return {type:LOGOUT__END,payload}
}

export const logoutError = (payload:ErrorPayload):Error => {
    return {type:LOGOUT__ERROR,payload}
}

export const logoutReset = ():Reset => {
    return {type:LOGOUT__RESET}
}


export const logoutThunk = ():ThunkType => (dispatch) => {
    dispatch(logoutStart())
    dispatch(logoutProcess())
    requestAPI.logout()
    .then(data => {
        // //need another way
        // dispatch(loginReset())
        // //need another way
        dispatch(globalStateResetInRootReducerThunk())
        dispatch(logoutEnd(data.success))
    })
    .catch(e => {
        dispatch(logoutError(e.response.data))
    })
}


type Start = {
    type: Logout
}

type Process = {
    type: Logout
}

type EndPayload = {
    success:boolean,
    data:[],
    pagination:{}
}

type End = {
    type: Logout
    payload:EndPayload
    
}

type ErrorPayload = {
    success:boolean,
    error:string
}

type Error = {
    type: Logout
    payload:ErrorPayload
}

type Reset = {
    type: Logout
}

export type LogoutPayload = ErrorPayload | EndPayload