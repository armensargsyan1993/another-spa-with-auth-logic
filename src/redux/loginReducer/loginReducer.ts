import { LoginPayload } from './loginActions';
import { LOGIN__END, LOGIN__ERROR, LOGIN__PROCESS, LOGIN__RESET, LOGIN__START, ROUTE__COMPLETE, Login } from "./types"

const initialState = {
    start:false,
    process:false,
    end:false,
    error:'',
    isRouteComplete:false,
    success:false,
}

export const loginReducer = (state:InitialState = initialState,action:Action):InitialState => {
    switch(action.type){
        case LOGIN__START:
            return {
                ...state,
                start:true,
                end:false,
            }
        case LOGIN__PROCESS:
            return {
                ...state,
                process:true,
            }
        case LOGIN__END:
            return {
                ...state,
                start:false,
                process:false,
                end:true,
                isRouteComplete:true,
                ...action.payload
            }
        case LOGIN__ERROR:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                isRouteComplete:false,
                ...action.payload
            }
        case ROUTE__COMPLETE:
            return {
                ...state,
                isRouteComplete:false

            }
        case LOGIN__RESET:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                error:'',
                isRouteComplete:false,
                success:false,
            }
        default:
            return state
    }
}

type InitialState = typeof initialState

type Action = {
    type: Login
    payload:LoginPayload
}
