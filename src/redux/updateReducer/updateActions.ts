import { IUpdatePayload } from './../../components/UpdateForm/UpdateForm';
import { requestAPI } from "../../api/requestMethod"
import { GetActionsTypes, ThunkType } from "../../globalTypes"
import { logoutThunk } from "../logoutReducer/logoutActions"
import { UpdaterTypes } from "./types"


export const updateActions = {
    start:() => {
        return {type:UpdaterTypes.START} as const
    },
    process:() => {
        return {type:UpdaterTypes.PROCESS} as const
    },
    end:(payload:EndPayload) => {
        return {type:UpdaterTypes.END,payload} as const
    },
    error:(payload:ErrorPayload) => {
        return {type:UpdaterTypes.ERROR,payload} as const
    },
    reset:() => {
        return {type:UpdaterTypes.RESET} as const
    }
}
export type UpdateActionsTypes = GetActionsTypes<typeof updateActions>

export const updateThunk = (payload:IUpdatePayload):ThunkType<UpdateActionsTypes> => (dispatch) => {
    dispatch(updateActions.start())
    dispatch(updateActions.process())
    requestAPI.updatePassword(payload)
    .then(data => {
        //need another way
        dispatch(logoutThunk())
        //need another way
        dispatch(updateActions.end(data))
    })
    .catch(e => {
        dispatch(updateActions.error(e.response.data))
    })
}

type EndPayload = {
    success:boolean,
}

type ErrorPayload = {
    success:boolean,
    error:string
}