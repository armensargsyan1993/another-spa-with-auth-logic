import { ThunkType } from "../.."
import { requestAPI } from "../../api/requestMethod"
import { Register, REGISTER__END, REGISTER__ERROR, REGISTER__PROCESS, REGISTER__RESET, REGISTER__START } from "./types"

export const registerStart = ():Start => {
    return {type:REGISTER__START}
}

export const registerProcess = ():Process => {
    return {type:REGISTER__PROCESS}
}

export const registerEnd = (payload:EndPayload):End => {
    return {type:REGISTER__END,payload}
}

export const registerError = (payload:ErrorPayload):Error => {
    return {type:REGISTER__ERROR,payload}
}

export const registerReset = ():Reset => {
    return {type:REGISTER__RESET}
}

export const registerThunk = (payload:RegisterThunkPayload):ThunkType => async(dispatch) => {
    dispatch(registerStart())
    dispatch(registerProcess())
    requestAPI.register(payload)
    .then(data => {
        // dispatch(setEmail({[payload.name]:payload.email}))
        dispatch(registerEnd(data.success))
    })
    .catch(e => {
        dispatch(registerError(e.response.data))
    })
}


type Start = {
    type: Register
}

type Process = {
    type: Register
}

type EndPayload = {
    success:boolean,
    data:[],
    pagination:{}
}

type End = {
    type: Register
    payload:EndPayload
    
}

type ErrorPayload = {
    success:boolean,
    error:string
}

type Error = {
    type: Register
    payload:ErrorPayload
}

type Reset = {
    type: Register
}

type RegisterThunkPayload = {

}

export type RegisterPayload = ErrorPayload | EndPayload