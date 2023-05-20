import axiosConfig from '../axiosConfig'

export const apiLogin = (payload)=> new Promise(async(resolve, reject)=>{
    try{
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/auth/login',
            data: payload
        })
        resolve(response)
    }catch (error){
        reject(error)
    }
})

export const apiRegister = (payload)=> new Promise(async(resolve, reject)=>{
    try{
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/auth/register',
            data: payload
        })
        resolve(response)
    }catch (error){
        reject(error)
    }
})

//update account infor 
export const apiUpdateAccInfor = (payload)=> new Promise(async(resolve, reject)=>{
    try{
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/auth/register',
            data: payload
        })
        resolve(response)
    }catch (error){
        reject(error)
    }
})


export const apiOrderInfor = (payload)=> new Promise(async(resolve, reject)=>{
    try{
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/client/orderInfor',
            data: payload
        })
        resolve(response)
    }catch (error){
        reject(error)
    }
})

export const apiCartInfor = (payload)=> new Promise(async(resolve, reject)=>{
    try{
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/client/cartInfor',
            data: payload
        })
        resolve(response)
    }catch (error){
        reject(error)
    }
})