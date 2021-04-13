import { GetActionsTypes } from '../../index';
import { ThunkType } from "../.."
import { requestAPI } from "../../api/requestMethod"
import { BootCampsTypes } from './types';



export const bootCampsActions = {
    start:() => {
        return {type:BootCampsTypes.START} as const
    },
    process:() => {
        return {type:BootCampsTypes.PROCESS} as const
    },
    end:(payload:EndPayload) => {
        return {type:BootCampsTypes.END,payload} as const
    },
    error:(payload:ErrorPayload) => {
        return {type:BootCampsTypes.ERROR,payload} as const
    },
    reset:() => {
        return {type:BootCampsTypes.RESET} as const
    }
}

export type BootCampsActionTypes = GetActionsTypes<typeof bootCampsActions>


export const bootCampsThunk = ():ThunkType<BootCampsActionTypes> => (dispatch) => {
    dispatch(bootCampsActions.start)
    dispatch(bootCampsActions.process)
    requestAPI.getAllBootCamps()
    .then(data => {
        dispatch(bootCampsActions.end(data))
    })
    .catch(e => {
        dispatch(bootCampsActions.error(e.response.data))
    })
}

type EndPayload = {
    success:boolean,
    data:[],
    pagination:{}
}

type ErrorPayload = {
    success:boolean,
    error:string
}