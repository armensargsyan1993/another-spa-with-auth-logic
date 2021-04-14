import { updateActions } from './updateReducer/updateActions';
import { combineReducers } from "redux";
import { GetActionsTypes, ThunkType } from "../globalTypes";
import { authMeActions } from "./authMeReducer/authMeActions";
import { authMeReducer } from "./authMeReducer/authMeReducer";
import { bootCampsReducer } from "./bootCampsReducer/bootCampsReducer";
import { loginActions } from "./loginReducer/loginActions";
import { loginReducer } from "./loginReducer/loginReducer";
import { logoutReducer } from "./logoutReducer/logoutReducer";
import { registerActions } from './registerReducer/registerActions';
import { registerReducer } from "./registerReducer/registerReducer";
import { resetReducer } from "./resetReducer/resetReducer";
import { updateReducer } from "./updateReducer/updateReducer";

export const config = combineReducers({
    bootCamps:bootCampsReducer,
    register:registerReducer,
    login:loginReducer,
    logout:logoutReducer,
    authMe:authMeReducer,
    update:updateReducer,
    reset:resetReducer,
})
export const GLOBAL__TYPE__RESET = 'ROOT__REDUCER/GLOBAL__TYPE__RESET'


const globalStateResetInRootReducerActions = {
    reset:() => {
        return {type:GLOBAL__TYPE__RESET}
    }
}
const initialState = {}

export const rootReducer = (state:any,action:any):InitialState => {

    if(action.type === GLOBAL__TYPE__RESET){
        //TODO reset state logic?(state == null(delete serialization state)) or use Thunk?
        return state
    }
    return config(state,action)
}

type globalStateResetInRootReducerTypes = GetActionsTypes<typeof globalStateResetInRootReducerActions>

export const globalStateResetInRootReducerThunk = ():ThunkType<globalStateResetInRootReducerTypes > => (dispatch) => {
    dispatch(authMeActions.reset())
    dispatch(loginActions.reset())
    dispatch(registerActions.reset())
    dispatch(updateActions.reset())
    localStorage.setItem('token','')
    dispatch(globalStateResetInRootReducerActions.reset())
}

type InitialState = typeof initialState