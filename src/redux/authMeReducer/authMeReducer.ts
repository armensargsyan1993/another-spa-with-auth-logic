
import { AuthMeActionTypes } from "./authMeActions"
import { AuthMeTypes } from "./types"

const initialState = {
    start:false,
    process:false,
    end:false,
    error:"",
    success:false,
    email: "",
    name: "",
    role: "",
}



export const authMeReducer = (state:InitialState = initialState,action:AuthMeActionTypes):InitialState => {
    switch(action.type){
        case AuthMeTypes.START:
            return {
                ...state,
                start:true,
                end:false,
            }
        case AuthMeTypes.PROCESS:
            return {
                ...state,
                process:true,
            }
        case AuthMeTypes.END:
            return {
                ...state,
                start:false,
                process:false,
                end:true,
                error:'',
                ...action.payload
            }
        case AuthMeTypes.ERROR:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                email: "",
                name: "",
                role: "",
                ...action.payload
            }
        case AuthMeTypes.RESET:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                error:'',
                success:false,
                email: "",
                name: "",
                role: "",
            }
        default:
            return state
    }
}

type InitialState = typeof initialState
