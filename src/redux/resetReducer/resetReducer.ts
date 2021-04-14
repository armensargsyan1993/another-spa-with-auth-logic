//updateReducer

import { ResetActionsTypes } from "./resetActions"
import { ResetTypes } from "./types"


const initialState = {
    start:false,
    process:false,
    end:false,
    error:'',
    success:false,
}

export const resetReducer = (state:InitialState = initialState,action:ResetActionsTypes):InitialState => {
    switch(action.type){
        case ResetTypes.START:
            return {
                ...state,
                start:true,
                end:false,
            }
        case ResetTypes.PROCESS:
            return {
                ...state,
                process:true,
            }
        case ResetTypes.END:
            return {
                ...state,
                start:false,
                process:false,
                end:true,
                ...action.payload
            }
        case ResetTypes.ERROR:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                ...action.payload
            }
        case ResetTypes.RESET:
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