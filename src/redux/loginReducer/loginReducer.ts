import { LoginTypes } from "./types"

const initialState = {
    start:false,
    process:false,
    end:false,
    error:'',
    isRouteComplete:false,
    success:false,
}

export const loginReducer = (state:InitialState = initialState,action:):InitialState => {
    switch(action.type){
        case LoginTypes.START:
            return {
                ...state,
                start:true,
                end:false,
            }
        case LoginTypes.PROCESS:
            return {
                ...state,
                process:true,
            }
        case LoginTypes.END:
            return {
                ...state,
                start:false,
                process:false,
                end:true,
                isRouteComplete:true,
                ...action.payload
            }
        case LoginTypes.ERROR:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                isRouteComplete:false,
                ...action.payload
            }
        case LoginTypes.IS__COMPLETE:
            return {
                ...state,
                isRouteComplete:false

            }
        case LoginTypes.RESET:
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