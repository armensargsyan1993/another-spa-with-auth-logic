import { requestAPI } from "../../api/requestMethod"
import { GetActionsTypes, ThunkType } from "../../globalTypes";
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

export type AuthMeActionTypes = GetActionsTypes<typeof authMeActions>

export const authMeThunk = ():ThunkType<AuthMeActionTypes> => (dispatch) => {
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
    email: string;
    name: string;
    role: string;
    
}

type ErrorPayload = {
    success:boolean,
    error:string
}

