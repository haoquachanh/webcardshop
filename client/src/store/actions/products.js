import actionTypes from './actionTypes'
import * as apis from '../../services/product'


export const getProducts = () => async (dispatch) => {
    try {
        const response = await apis.apiGetProducts()
        // console.log(response)
        if (response?.data.err===0) {
            dispatch({
                type: actionTypes.GET_PRODUCTS,
                products: response.data.access_token
            })
        }else {
            dispatch(
                {
                    type: actionTypes.GET_PRODUCTS,
                    msg: response.data.msg
                }
            )
        }


    } catch (error) {
        dispatch(
            {
                type: actionTypes.GET_PRODUCTS,
                products: null
            }
        )
    }
}

