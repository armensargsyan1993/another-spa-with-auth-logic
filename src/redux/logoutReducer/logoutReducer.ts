import { LogoutPayload } from "./logoutActions"
import { Logout, LOGOUT__END, LOGOUT__ERROR, LOGOUT__PROCESS, LOGOUT__RESET, LOGOUT__START } from "./types"

const initialState = {
    start:false,
    process:false,
    end:false,
    error:'',
    success:false,
}

export const logoutReducer = (state:InitialState = initialState,action:Action):InitialState => {
    switch(action.type){
        case LOGOUT__START:
            return {
                ...state,
                start:true,
                end:false,
            }
        case LOGOUT__PROCESS:
            return {
                ...state,
                process:true,
            }
        case LOGOUT__END:
            return {
                ...state,
                start:false,
                process:false,
                end:true,
                ...action.payload
            }
        case LOGOUT__ERROR:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                ...action.payload
            }
        case LOGOUT__RESET:
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

type Action = {
    type: Logout
    payload:LogoutPayload
}