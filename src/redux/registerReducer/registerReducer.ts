import { LogoutActionsTypes } from './registerActions';
import { RegisterTypes } from './types';

const initialState = {
    start:false,
    process:false,
    end:false,
    error:'',
    success:false
}

export const registerReducer = (state:InitialState = initialState,action:LogoutActionsTypes):InitialState => {
    switch(action.type){
        case RegisterTypes.START:
            return {
                ...state,
                start:true,
                end:false,
            }
        case RegisterTypes.PROCESS:
            return {
                ...state,
                process:true,
            }
        case RegisterTypes.END:
            return {
                ...state,
                start:false,
                process:false,
                end:true,
                ...action.payload
            }
        case RegisterTypes.ERROR:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                ...action.payload
            }
        case RegisterTypes.RESET:
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