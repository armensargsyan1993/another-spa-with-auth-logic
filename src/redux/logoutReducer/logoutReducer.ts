import { LogoutActionsTypes } from "./logoutActions"
import { LogoutTypes } from "./types"

const initialState = {
    start:false,
    process:false,
    end:false,
    error:'',
    success:false,
}

export const logoutReducer = (state:InitialState = initialState,action:LogoutActionsTypes):InitialState => {
    switch(action.type){
        case LogoutTypes.START:
            return {
                ...state,
                start:true,
                end:false,
            }
        case LogoutTypes.PROCESS:
            return {
                ...state,
                process:true,
            }
        case LogoutTypes.END:
            return {
                ...state,
                start:false,
                process:false,
                end:true,
                ...action.payload
            }
        case LogoutTypes.ERROR:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                ...action.payload
            }
        case LogoutTypes.RESET:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                error:'',
                success:false,
            }
        default:
            return state
    }
}

type InitialState = typeof initialState
