import { ILoginPayload } from './../../components/LoginForm/LoginForm';
import { LogoutActionsTypes } from './../logoutReducer/logoutActions';
import { requestAPI } from "../../api/requestMethod"
import { authMeThunk } from "../authMeReducer/authMeActions"
import { logoutActions } from "../logoutReducer/logoutActions"
import { LoginTypes } from "./types"
import { GetActionsTypes, ThunkType } from '../../globalTypes';
import { updateActions, UpdateActionsTypes } from '../updateReducer/updateActions';




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

export const loginThunk = (payload:ILoginPayload):ThunkType<LoginActionsTypes | LogoutActionsTypes | UpdateActionsTypes> => (dispatch) => {
    dispatch(loginActions.start())
    dispatch(loginActions.process())
    requestAPI.login(payload)
    .then(data => {
        dispatch(logoutActions.reset())
        dispatch(updateActions.reset())
        dispatch(loginActions.end(data))
        dispatch(authMeThunk())
    })
    .catch(e => {
        dispatch(loginActions.error(e))
    })
}


type EndPayload = {
    success:boolean,
}


type ErrorPayload = {
    success:boolean,
    error:string
}