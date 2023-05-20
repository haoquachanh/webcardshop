// import { register } from '../../../../server/src/services/authService'
import { apiLogin, apiOrderInfor, apiRegister ,apiCartInfor, apiUpdateAccInfor} from '../../services/auth'
import actionTypes from './actionTypes'

export const register=(payload)=>async(dispatch)=>{

    try {
        const response = await apiRegister(payload)
        // console.log(response)
        if (response?.data.err===0) {
            dispatch({
                type: actionTypes.REGISTER_SUCCESS,
                data: response.data.access_token
            })
        }else {
            dispatch(
                {
                    type: actionTypes.REGISTER_FAIL,
                    data: response.data.msg
                }
            )
        }


    } catch (error) {
        dispatch(
            {
                type: actionTypes.REGISTER_FAIL,
                data: null
            }
        )
    }

}

export const login=(payload)=>async(dispatch)=>{

    try {
        const response = await apiLogin(payload)

        if (response?.data.err===0) {
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                data: response.data.access_token
            })
        }else {
            dispatch(
                {
                    type: actionTypes.LOGIN_FAIL,
                    data: response.data.msg
                }
            )
        }
        // return response

    } catch (error) {
        dispatch(
            {
                type: actionTypes.LOGIN_FAIL,
                data: null
            }
        )
    }


}


export const updateAccInfor=(payload)=>async(dispatch)=>{

    try {
        const response = await apiUpdateAccInfor(payload)
        // console.log(response.data)
        if (response?.data.err===0) {
            dispatch({
                type: actionTypes.UPDATE_INFOR,
                data: response.data.access_token
            })

        }else {
            dispatch(
                {
                    type: actionTypes.UPDATE_INFOR,
                    data: response.data.msg
                }
            )
        }
        // return response

    } catch (error) {
        dispatch(
            {
                type: actionTypes.UPDATE_INFOR,
                data: null
            }
        )
    }


}


export const logout=()=>({
    type: actionTypes.LOGOUT
})

export const set_order=(payload)=>async(dispatch)=>{

    try {
        const response = await apiOrderInfor(payload)

        if (response?.data.err===0) {
            dispatch({
                type: actionTypes.SET_ORDER_SUCCESS,
                data: response.data.token
            })
        }else {
            dispatch(
                {
                    type: actionTypes.SET_ORDER_FAIL,
                    data: response.data.msg
                }
            )
        }


    } catch (error) {
        dispatch(
            {
                type: actionTypes.SET_ORDER_FAIL,
                data: null
            }
        )
    }

}

export const set_cart=(payload)=>async(dispatch)=>{

    try {
        const response = await apiCartInfor(payload)

        if (response?.data.err===0) {
            dispatch({
                type: actionTypes.SET_ORDER_SUCCESS,
                data: response.data.token
            })
        }else {
            dispatch(
                {
                    type: actionTypes.SET_ORDER_FAIL,
                    data: response.data.msg
                }
            )
        }


    } catch (error) {
        dispatch(
            {
                type: actionTypes.SET_ORDER_FAIL,
                data: null
            }
        )
    }

}