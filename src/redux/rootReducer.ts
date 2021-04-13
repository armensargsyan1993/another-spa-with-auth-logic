import { combineReducers } from "redux";
import { ThunkType } from "..";
import { authMeReset } from "./authMeReducer/authMeActions";
import { authMeReducer } from "./authMeReducer/authMeReducer";
import { bootcampsReducer } from './bootcampsReducer/bootcampsReducer';
import { loginReset } from "./loginReducer/loginActions";
import { loginReducer } from "./loginReducer/loginReducer";
import { logoutReducer } from "./logoutReducer/logoutReducer";
import { registerReset } from "./registerReducer/registerActions";
import { registerReducer } from "./registerReducer/registerReducer";
import { resetReducer } from "./resetReducer/resetReducer";
import { updateReset } from "./updateReducer/updateActions";
import { updateReducer } from "./updateReducer/updateReducer";

const config = combineReducers({
    bootcamps:bootcampsReducer,
    register:registerReducer,
    login:loginReducer,
    logout:logoutReducer,
    authMe:authMeReducer,
    update:updateReducer,
    reset:resetReducer,
})
const GLOBAL__TYPE__RESET = 'ROOT__REDUCER/GLOBAL__TYPE__RESET'



const globalStateResetInRootReducer = ():Reset => {
    return {type:GLOBAL__TYPE__RESET}
}

const initialState = {}


export const rootReducer = (state:any,action:any):InitialState => {

    if(action.type === GLOBAL__TYPE__RESET){
        return state
    }
    return config(state,action)
}



export const globalStateResetInRootReducerThunk = ():ThunkType => (dispatch) => {
    dispatch(authMeReset())
    dispatch(loginReset())
    dispatch(registerReset())
    dispatch(updateReset())
    localStorage.setItem('token','')
    dispatch(globalStateResetInRootReducer())
}

type Reset = {
    type:GlobalReset
}

type GlobalReset = typeof GLOBAL__TYPE__RESET

type InitialState = typeof initialState