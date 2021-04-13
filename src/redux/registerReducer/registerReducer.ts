import { RegisterPayload } from './registerActions';
import { Register, REGISTER__END, REGISTER__ERROR, REGISTER__PROCESS, REGISTER__RESET, REGISTER__START } from "./types"

const initialState = {
    start:false,
    process:false,
    end:false,
    error:'',
    success:false
}

export const registerReducer = (state:InitialState = initialState,action:Action):InitialState => {
    switch(action.type){
        case REGISTER__START:
            return {
                ...state,
                start:true,
                end:false,
            }
        case REGISTER__PROCESS:
            return {
                ...state,
                process:true,
            }
        case REGISTER__END:
            return {
                ...state,
                start:false,
                process:false,
                end:true,
                ...action.payload
            }
        case REGISTER__ERROR:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                ...action.payload
            }
        case REGISTER__RESET:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                error:'',
                success:false
            }
        default:
            return state
    }
}

type InitialState = typeof initialState

type Action = {
    type: Register
    payload:RegisterPayload
}