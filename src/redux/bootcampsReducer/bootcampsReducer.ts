import { BootCampsPayload } from './bootcampsActions';
//updateReducer
import { BootCamps, BOOTCAMPS__END, BOOTCAMPS__ERROR, BOOTCAMPS__PROCESS, BOOTCAMPS__RESET, BOOTCAMPS__START } from "./types"

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

export const bootcampsReducer = (state:InitialState = initialState,action:Action):InitialState => {
    switch(action.type){
        case BOOTCAMPS__START:
            return {
                ...state,
                start:true,
                end:false,
            }
        case BOOTCAMPS__PROCESS:
            return {
                ...state,
                process:true,
            }
        case BOOTCAMPS__END:
            return {
                ...state,
                start:false,
                process:false,
                end:true,
                ...action.payload
            }
        case BOOTCAMPS__ERROR:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                ...action.payload
            }
        case BOOTCAMPS__RESET:
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
    type: BootCamps
    payload:BootCampsPayload
}

