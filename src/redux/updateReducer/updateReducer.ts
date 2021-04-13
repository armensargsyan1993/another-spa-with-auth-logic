import { UpdatePayload } from './updateActions';
//updateReducer
import { Update, UPDATE__END, UPDATE__ERROR, UPDATE__PROCESS, UPDATE__RESET, UPDATE__START } from "./types"

const initialState = {
    start:false,
    process:false,
    end:false,
    error:'',
    success:false,
}

export const updateReducer = (state:InitialState = initialState,action:Action):InitialState => {
    switch(action.type){
        case UPDATE__START:
            return {
                ...state,
                start:true,
                end:false,
            }
        case UPDATE__PROCESS:
            return {
                ...state,
                process:true,
            }
        case UPDATE__END:
            return {
                ...state,
                start:false,
                process:false,
                end:true,
                ...action.payload
            }
        case UPDATE__ERROR:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                ...action.payload
            }
        case UPDATE__RESET:
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
    type: Update
    payload:UpdatePayload
}