import { ThunkType } from "../.."
import { requestAPI } from "../../api/requestMethod"
import { loginReset } from "../loginReducer/loginActions"
import { Reset, RESET__END, RESET__ERROR, RESET__PROCESS, RESET__RESET, RESET__START } from "./types"

export const resetStart = ():Start => {
    return {type:RESET__START}
}

export const resetProcess = ():Process => {
    return {type:RESET__PROCESS}
}

export const resetEnd = (payload:EndPayload):End => {
    return {type:RESET__END,payload}
}

export const resetError = (payload:ErrorPayload):Error => {
    return {type:RESET__ERROR,payload}
}

export const resetReset = ():ResetT => {
    return {type:RESET__RESET}
}


export const resetThunk = (payload:ResetThunkPayload):ThunkType => (dispatch) => {

    dispatch(resetStart())
    dispatch(resetProcess())
    requestAPI.resetPassword(payload)
    .then(data => {
        //need another way
        dispatch(loginReset())
        //need another way
        dispatch(resetEnd(data))
    })
    .catch(e => {
        dispatch(resetError(e.response.data))
        alert(e.response?.data?.error);
    })
}

type Start = {
    type: Reset
}

type Process = {
    type: Reset
}

type EndPayload = {
    success:boolean,
    data:[],
    pagination:{}
}

type End = {
    type: Reset
    payload:EndPayload
    
}

type ErrorPayload = {
    success:boolean,
    error:string
}

type Error = {
    type: Reset
    payload:ErrorPayload
}

type ResetT = {
    type: Reset
}

type ResetThunkPayload = {

}

export type ResetPayload = ErrorPayload | EndPayload