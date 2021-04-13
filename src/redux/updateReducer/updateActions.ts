import { ThunkType } from "../.."
import { requestAPI } from "../../api/requestMethod"
import { logoutThunk } from "../logoutReducer/logoutActions"
import { Update, UPDATE__END, UPDATE__ERROR, UPDATE__PROCESS, UPDATE__RESET, UPDATE__START } from "./types"

export const updateStart = ():Start => {
    return {type:UPDATE__START}
}

export const updateProcess = ():Process => {
    return {type:UPDATE__PROCESS}
}

export const updateEnd = (payload:EndPayload):End => {
    return {type:UPDATE__END,payload}
}

export const updateError = (payload:ErrorPayload):Error => {
    return {type:UPDATE__ERROR,payload}
}

export const updateReset = ():Reset => {
    return {type:UPDATE__RESET}
}

export const updateThunk = (payload:UpdateThunkPayload):ThunkType => (dispatch) => {
    dispatch(updateStart())
    dispatch(updateProcess())
    requestAPI.updatePassword(payload)
    .then(data => {
        //need another way
        dispatch(logoutThunk())
        //need another way
        dispatch(updateEnd(data))
    })
    .catch(e => {
        dispatch(updateError(e.response.data))
    })
}

type Start = {
    type: Update
}

type Process = {
    type: Update
}

type EndPayload = {
    success:boolean,
    data:[],
    pagination:{}
}

type End = {
    type: Update
    payload:EndPayload
    
}

type ErrorPayload = {
    success:boolean,
    error:string
}

type Error = {
    type: Update
    payload:ErrorPayload
}

type Reset = {
    type: Update
}

type UpdateThunkPayload = {

}

export type UpdatePayload = ErrorPayload | EndPayload