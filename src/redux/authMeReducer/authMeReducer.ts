import { AuthPayload } from "./authMeActions"
import { AUTH__ME__END, AUTH__ME__ERROR, AUTH__ME__PROCESS, AUTH__ME__START, AUTH__ME__RESET,AuthMe } from "./types"

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



export const authMeReducer = (state:InitialState = initialState,action:Action):InitialState => {
    switch(action.type){
        case AUTH__ME__START:
            return {
                ...state,
                start:true,
                end:false,
            }
        case AUTH__ME__PROCESS:
            return {
                ...state,
                process:true,
            }
        case AUTH__ME__END:
            return {
                ...state,
                start:false,
                process:false,
                end:true,
                ...action.payload
            }
        case AUTH__ME__ERROR:
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
        case AUTH__ME__RESET:
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



type Action = {
    type: AuthMe
    payload:AuthPayload
}