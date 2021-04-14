import { requestAPI } from "../../api/requestMethod"
import { GetActionsTypes, ThunkType } from "../../globalTypes"
import { loginActions, LoginActionsTypes } from "../loginReducer/loginActions"
import { ResetTypes } from "./types"


export const resetActions = {
    start:() => {
        return {type:ResetTypes.START} as const
    },
    process:() => {
        return {type:ResetTypes.PROCESS} as const
    },
    end:(payload:EndPayload) => {
        return {type:ResetTypes.END,payload} as const
    },
    error:(payload:ErrorPayload) => {
        return {type:ResetTypes.ERROR,payload} as const
    },
    reset:() => {
        return {type:ResetTypes.RESET} as const
    }
}
export type ResetActionsTypes = GetActionsTypes<typeof resetActions>



export const resetThunk = (payload:ResetThunkPayload):ThunkType<ResetActionsTypes | LoginActionsTypes> => (dispatch) => {

    dispatch(resetActions.start())
    dispatch(resetActions.process())
    requestAPI.resetPassword(payload)
    .then(data => {
        //need another way
        dispatch(loginActions.reset())
        //need another way
        dispatch(resetActions.end(data))
    })
    .catch(e => {
        dispatch(resetActions.error(e.response.data))
        alert(e.response?.data?.error);
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

type ResetThunkPayload = {

}