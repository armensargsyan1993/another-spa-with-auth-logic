import { UpdateActionsTypes } from './updateActions';
//updateReducer
import { UpdaterTypes } from "./types"

const initialState = {
    start:false,
    process:false,
    end:false,
    error:'',
    success:false,
}

export const updateReducer = (state:InitialState = initialState,action:UpdateActionsTypes):InitialState => {
    switch(action.type){
        case UpdaterTypes.START:
            return {
                ...state,
                start:true,
                end:false,
            }
        case UpdaterTypes.PROCESS:
            return {
                ...state,
                process:true,
            }
        case UpdaterTypes.END:
            return {
                ...state,
                start:false,
                process:false,
                end:true,
                ...action.payload
            }
        case UpdaterTypes.ERROR:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                ...action.payload
            }
        case UpdaterTypes.RESET:
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