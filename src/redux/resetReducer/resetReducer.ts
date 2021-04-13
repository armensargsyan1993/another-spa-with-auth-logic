//updateReducer
import { ResetPayload } from "./resetActions"
import { Reset, RESET__END, RESET__ERROR, RESET__PROCESS, RESET__RESET, RESET__START } from "./types"

const initialState = {
    start:false,
    process:false,
    end:false,
    error:'',
    success:false,
}

export const resetReducer = (state:InitialState = initialState,action:Action):InitialState => {
    switch(action.type){
        case RESET__START:
            return {
                ...state,
                start:true,
                end:false,
            }
        case RESET__PROCESS:
            return {
                ...state,
                process:true,
            }
        case RESET__END:
            return {
                ...state,
                start:false,
                process:false,
                end:true,
                ...action.payload
            }
        case RESET__ERROR:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                ...action.payload
            }
        case RESET__RESET:
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
    type: Reset
    payload:ResetPayload
}