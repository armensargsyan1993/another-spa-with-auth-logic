import { IRegisterPayload } from './../../components/RegisterForm/RegisterForm';
import { requestAPI } from "../../api/requestMethod"
import { GetActionsTypes, ThunkType } from "../../globalTypes"
import { RegisterTypes } from "./types"





export const registerActions = {
    start:() => {
        return {type:RegisterTypes.START} as const
    },
    process:() => {
        return {type:RegisterTypes.PROCESS} as const
    },
    end:(payload:EndPayload) => {
        return {type:RegisterTypes.END,payload} as const
    },
    error:(payload:ErrorPayload) => {
        return {type:RegisterTypes.ERROR,payload} as const
    },
    reset:() => {
        return {type:RegisterTypes.RESET} as const
    }
}
export type RegisterActionsTypes = GetActionsTypes<typeof registerActions>

export const registerThunk = (payload:IRegisterPayload):ThunkType<RegisterActionsTypes> => async(dispatch) => {
    dispatch(registerActions.start())
    dispatch(registerActions.process())
    requestAPI.register(payload)
    .then(data => {
        dispatch(registerActions.end({success:data.success}))
    })
    .catch(e => {
        dispatch(registerActions.error(e.response.data))
    })
}

type EndPayload = {
    success:boolean,
}

type ErrorPayload = {
    success:boolean,
    error:string
}