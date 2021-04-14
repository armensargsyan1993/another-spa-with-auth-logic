import { BootCampsActionTypes } from "./bootCampsActions"
import { BootCampsTypes } from "./types"

const initialState = {
    count:1,
    start:false,
    process:false,
    end:false,
    error:"",
    success:false,
    data:[],
    pagination:{}
}

export const bootCampsReducer = (state:InitialState = initialState,action:BootCampsActionTypes):InitialState => {
    switch(action.type){
        case BootCampsTypes.START:
            return {
                ...state,
                start:true,
                end:false,
            }
        case BootCampsTypes.PROCESS:
            return {
                ...state,
                process:true,
            }
        case BootCampsTypes.END:
            return {
                ...state,
                start:false,
                process:false,
                end:true,
                ...action.payload
            }
        case BootCampsTypes.ERROR:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                ...action.payload
            }
        case BootCampsTypes.RESET:
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
