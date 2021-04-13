import { ThunkType } from "../.."
import { requestAPI } from "../../api/requestMethod"
import { BOOTCAMPS__END, BOOTCAMPS__ERROR, BOOTCAMPS__PROCESS, BOOTCAMPS__RESET, BOOTCAMPS__START, BootCamps } from "./types"

export const bootcumpsStart = ():Start => {
    return {type:BOOTCAMPS__START}
}

export const bootcumpsProcess = ():Process => {
    return {type:BOOTCAMPS__PROCESS}
}

export const bootcumpsEnd = (payload:EndPayload):End => {
    return {type:BOOTCAMPS__END,payload}
}

export const bootcumpsError = (payload:ErrorPayload):Error => {
    return {type:BOOTCAMPS__ERROR,payload}
}

export const bootcumpsReset = ():Reset => {
    return {type:BOOTCAMPS__RESET}
}

export const bootcampsThunk = ():ThunkType<ActionTypes> => (dispatch) => {
    dispatch(bootcumpsStart())
    dispatch(bootcumpsProcess())
    requestAPI.getAllBootCamps()
    .then(data => {
        dispatch(bootcumpsEnd(data))
    })
    .catch(e => {
        dispatch(bootcumpsError(e.response.data))
    })
}

type ActionTypes = Start | Process | End | Reset | Error

type Start = {
    type: BootCamps
}

type Process = {
    type: BootCamps
}

type EndPayload = {
    success:boolean,
    data:[],
    pagination:{}
}

type End = {
    type: BootCamps
    payload:EndPayload
    
}

type ErrorPayload = {
    success:boolean,
    error:string
}

type Error = {
    type: BootCamps
    payload:ErrorPayload
}

type Reset = {
    type: BootCamps
}

export type BootCampsPayload = ErrorPayload | EndPayload