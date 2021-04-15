import { IResetPayload } from './../components/ResetForm/ResetForm';
import { ILoginPayload } from './../components/LoginForm/LoginForm';
import { IRegisterPayload } from './../components/RegisterForm/RegisterForm';
import axios from "axios"
import { getAllBootCampsData } from "./fakeApiData"
import { IUpdatePayload } from '../components/UpdateForm/UpdateForm';

// const API__NAME = '?'
// const VERSION = '?'
// const AUTH__PATH = '?'

// const baseUrl = `?.com/${API__NAME}/${VERSION}/`

// const GET__ALL__BOOT__CAMPS__URL = '?'
// const REGISTER__URL = `${AUTH__PATH}/?`
// const LOGIN__URL = `${AUTH__PATH}/?`
// const LOGOUT__URL = `${AUTH__PATH}/?`
// const AUTH__ME__URL = `${AUTH__PATH}/?`
// const UPDATE__PASSWORD__URL = `${AUTH__PATH}/?`

// const FORGOT__PASSWORD__URL = `${AUTH__PATH}/?`

// const axiosInstance = axios.create({
//     baseURL:baseUrl,
//     headers:{
//         'Content-Type': 'application/json'
//     }
// })

const baseUrl2 = `https://jsonplaceholder.typicode.com/posts/`


type DataType = typeof getAllBootCampsData
export type BootCampsData = typeof getAllBootCampsData.data

const getAllBootCamps = () => {
    return axios.get<DataType>(baseUrl2)
    .then(res => {
        return Promise.resolve(getAllBootCampsData)
        // return res.data

    })
    .catch(e => {
        return Promise.reject({
            success:false,
            error:'not found'
        })
        // return Promise.reject(e.response.data)
    })
}

const register = (payload:IRegisterPayload) => {
    return axios.get(baseUrl2)
    .then(res => {
        localStorage.setItem('token','fake_Token')
        return Promise.resolve({success:true})
    }).catch(e => {
        return Promise.reject({
            success:false,
            error:'cannot register'
        })
    })
}

const login = (payload:ILoginPayload) => {
    return axios.get(baseUrl2).then(res => {
        localStorage.setItem('token','fake_Token')
        return Promise.resolve({success:true})
        // return res.data.success
    }).catch(e => {
        // return Promise.reject(e.response.data)
        return Promise.reject({
            success:false,
            error:'don\'t rightful login or email'
        })
    })
}

const logout = () => {
    return axios.get(baseUrl2)
    .then(res => {
        localStorage.setItem('token','')
        return Promise.resolve({success:true})
        // return res.data
    })
    .catch(e => {
        // return Promise.reject(e.response.data)
        return Promise.reject({
            success:false,
            error:'something go wrong '
        })
    })
}

const authMe = () => {
    if(!localStorage.getItem('token')){
        console.warn(`object`)
        return Promise.reject({
            error: "Not authorized to access this route",
            success: false
        })
    }
    return axios.get(baseUrl2)
    .then(res => {
        //return res.data
        return Promise.resolve({
            success:true,
            email:'fake@mail.ru',
            name:'fake',
            role:'fake'
        })
    }).catch(e => {
        // return Promise.reject(e.response.data)
        return Promise.reject({
            error: "Not authorized to access this route",
            success: false
        })
    })
}



const updatePassword = (payload:IUpdatePayload) => {
    return axios.get(baseUrl2)
    .then(res => {
        return Promise.resolve({success:true})
    })
    .catch(e => {
        // return Promise.reject(e.response.data)
        return Promise.reject({
            success:false,
            error:'update don\'t completed'
        })
    })
}

const resetPassword = (payload:IResetPayload) => {
    return axios.get(baseUrl2)
    .then(res => {
        return Promise.resolve({success:true})
    })
    .catch(e => {
        // return Promise.reject(e.response.data)
        return Promise.reject({
            success:false,
            error:'update don\'t completed'
        })
    })
}

export const requestAPI = {
    getAllBootCamps,
    register,
    login,
    logout,
    authMe,
    updatePassword,
    resetPassword
}



