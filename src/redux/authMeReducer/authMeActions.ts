import { GetActionsTypes } from './../../index';

import { requestAPI } from "../../api/requestMethod"
import { ThunkType } from "../.."
import { AuthMeTypes } from './types';


export const authMeActions = {
    start:() => {
        return {type:AuthMeTypes.START} as const
    },
    process:() => {
        return {type:AuthMeTypes.PROCESS} as const
    },
    end:(payload:EndPayload) => {
        return {type:AuthMeTypes.END,payload} as const
    },
    error:(payload:ErrorPayload) => {
        return {type:AuthMeTypes.ERROR,payload} as const
    },
    reset:() => {
        return {type:AuthMeTypes.RESET} as const
    }
}

export type ActionTypes = GetActionsTypes<typeof authMeActions>

export const authMeThunk = ():ThunkType<ActionTypes> => (dispatch) => {
    dispatch(authMeActions.start())
    dispatch(authMeActions.process())
    requestAPI.authMe()
    .then(data => {
        dispatch(authMeActions.end(data))
    })
    .catch(e => {
        dispatch(authMeActions.error(e.response.data))
    })
}


type EndPayload = {
    success: boolean;
    email: '';
    name: '';
    role: '';
    
}

type ErrorPayload = {
    success:boolean,
    error:string
}

