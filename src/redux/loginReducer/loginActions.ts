import { LogoutActionsTypes } from './../logoutReducer/logoutActions';
import { GetActionsTypes } from './../../index';
import { ThunkType } from "../.."
import { requestAPI } from "../../api/requestMethod"
import { authMeThunk } from "../authMeReducer/authMeActions"
import { logoutActions } from "../logoutReducer/logoutActions"
import { updateReset } from "../updateReducer/updateActions"
import { LoginTypes } from "./types"




export const loginActions = {
    start:() => {
        return {type:LoginTypes.START} as const
    },
    process:() => {
        return {type:LoginTypes.PROCESS} as const
    },
    end:(payload:EndPayload) => {
        return {type:LoginTypes.END,payload} as const
    },
    error:(payload:ErrorPayload) => {
        return {type:LoginTypes.ERROR,payload} as const
    },
    reset:() => {
        return {type:LoginTypes.RESET} as const
    },
    isComplete:() => {
        return {type:LoginTypes.IS__COMPLETE} as const
    }
}

export type LoginActionsTypes = GetActionsTypes<typeof loginActions>

export const loginThunk = (payload:LoginThunkPayload):ThunkType<LoginActionsTypes | LogoutActionsTypes> => (dispatch) => {
    dispatch(loginActions.start())
    dispatch(loginActions.process())
    requestAPI.login(payload)
    .then(data => {
        dispatch(logoutActions.reset())
        dispatch(updateReset())
        dispatch(loginActions.end(data.success))
        dispatch(authMeThunk())
    })
    .catch(e => {
        dispatch(loginActions.error(e.response.data))
    })
}


type EndPayload = {
    success:boolean,
}


type ErrorPayload = {
    success:boolean,
    error:string
}

export type LoginThunkPayload = {
    success:boolean
}