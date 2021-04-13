import { GetActionsTypes } from './../../index';
import { ThunkType } from "../.."
import { requestAPI } from "../../api/requestMethod"
import { globalStateResetInRootReducerThunk } from "../rootReducer"
import { LogoutTypes } from "./types"



export const logoutActions = {
    start:() => {
        return {type:LogoutTypes.START} as const
    },
    process:() => {
        return {type:LogoutTypes.PROCESS} as const
    },
    end:(payload:EndPayload) => {
        return {type:LogoutTypes.END,payload} as const
    },
    error:(payload:ErrorPayload) => {
        return {type:LogoutTypes.ERROR,payload} as const
    },
    reset:() => {
        return {type:LogoutTypes.RESET} as const
    }
}
export type LogoutActionsTypes = GetActionsTypes<typeof logoutActions>


export const logoutThunk = ():ThunkType<LogoutActionsTypes> => (dispatch) => {
    dispatch(logoutActions.start())
    dispatch(logoutActions.process())
    requestAPI.logout()
    .then(data => {
        dispatch(globalStateResetInRootReducerThunk())
        dispatch(logoutActions.end(data.success))
    })
    .catch(e => {
        dispatch(logoutActions.error(e.response.data))
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
