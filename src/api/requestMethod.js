import axios from "axios"

const API__NAME = 'api'
const VERSION = 'v1'
const AUTH__PATH = 'auth'

const baseUrl = `http://devcamp-api-node.herokuapp.com/${API__NAME}/${VERSION}/`

const GET__ALL__BOOT__CAMPS__URL = 'bootcamps'
const REGISTER__URL = `${AUTH__PATH}/register`
const LOGIN__URL = `${AUTH__PATH}/login`
const LOGOUT__URL = `${AUTH__PATH}/logout`
const AUTH__ME__URL = `${AUTH__PATH}/me`
const UPDATE__PASSWORD__URL = `${AUTH__PATH}/updatepassword`

//thats incorrect api have reset and forgot but this page do forgot functionality but have reset name
const FORGOT__PASSWORD__URL = `${AUTH__PATH}/forgotpassword`

const axiosInstance = axios.create({
    baseURL:baseUrl,
    headers:{
        'Content-Type': 'application/json'
    }
})

const getAllBootCamps = () => {
    return axiosInstance.get(GET__ALL__BOOT__CAMPS__URL).then(res => res.data)
}

const register = (payload) => {
    return axiosInstance.post(REGISTER__URL,{
        ...payload
    }).then(res => {
        localStorage.setItem('token',res.data.token)
        return res.data
    })
}

const login = (payload) => {
    return axiosInstance.post(LOGIN__URL,{
        ...payload
    }).then(res => {
        localStorage.setItem('token',res.data.token)
        return res.data
    })
}

const logout = () => {
    return axiosInstance.get(LOGOUT__URL,{
        headers:{
            'Authorization':`Bearer  ${localStorage.getItem('token')}`
        }
    }).then(res => {
        localStorage.setItem('token','')
        return res.data
    })
}

const authMe = () => {
    return axiosInstance.get(AUTH__ME__URL,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => {
        const {success,data:{email,name,role}} = res.data
        return ({
            success,
            email,
            name,
            role
        })
    })
}



const updatePassword = (payload) => {
    //why don't work??????
    // return axiosInstance.put(UPDATE__PASSWORD__URL,{
    //     headers:{
    //         'Content-Type': 'application/json',
    //         'Authorization':`Bearer ${localStorage.getItem('token')}`
    //     },
    //...payload
    // }).then(res => res.data)
    return axios({
        method: 'put',
        url: `${baseUrl}${UPDATE__PASSWORD__URL}`,
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('token')}`
        },
        data: {
            ...payload
        }
      }).then(res => {
          return res.data.success
      })
}

const resetPassword = (payload) => {
    console.warn(payload);
    return axiosInstance.post(FORGOT__PASSWORD__URL,{
        headers:{
            'Content-Type': 'application/json'
        },
        ...payload
    }).then(res => res.data)
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


























//my alternate

// const token = localStorage.getItem('token')
// const config = async (endPoint,isToken,headers,body) => {
//     const tokenObj = isToken ? {Authorization:token} : {}
//     const data = await fetch(`${baseUrl}${endPoint}`, {
//         headers: JSON.stringify({ ...tokenObj, ...headers, 'Content-Type': 'application/json' }),
//         body,
//     })
//     return await data.json()
//   }


// export const getRequestMethod = ({endPoint = '',token = false,headers = {}}) => {
//     return config(endPoint,token,headers)
// }

// export const putRequestMethod = ({endPoint = '',token = false,headers ={},body = {}}) => {
//     return config(endPoint,token,headers,body)
// }

// export const postRequestMethod = ({endPoint = '',token = false,headers={},body = {}}) => {
//     return config(endPoint,token,headers,body)
// }

