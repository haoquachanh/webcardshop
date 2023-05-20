import actionTypes from "../actions/actionTypes";

const initState = {
    isLoggedIn: false,
    token: null,
    msg:'',
    update:false
}

const authReducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.REGISTER_SUCCESS:
            return{
                ...state,
                isLoggedIn: true,
                token: action.data,
                msg:''
            }
        case actionTypes.REGISTER_FAIL:
            return{
                ...state,
                isLoggedIn: false,
                msg: action.data,
                token: null
            }

        case actionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                isLoggedIn: true,
                token: action.data,
                msg:''
            }
        case actionTypes.LOGIN_FAIL:
            return{
                ...state,
                isLoggedIn: false,
                msg: "Tài khoản hoặc mật khẩu không chính xác",
                token: null,
                update: !state.update
                // msg: action.data,
            }
        case actionTypes.LOGOUT:
            return{
                ...state,
                isLoggedIn: false,
                msg:"",
                token: null
            }

        case actionTypes.UPDATE_INFOR:
            return{
                ...state,
                isLoggedIn: true,
                token: action.data,
                msg:''
            }

        case actionTypes.SET_ORDER_SUCCESS:
            return{
                ...state,
                token: action.data,
                msg:''
            }
        case actionTypes.SET_ORDER_FAIL:
            return{
                ...state,
                msg: action.data,
                token: null,
            }

        case actionTypes.SET_CART_SUCCESS:
            return{
                ...state,
                token: action.data,
                msg:''
            }
        case actionTypes.SET_CART_FAIL:
            return{
                ...state,
                msg: action.data,
                token: null,
            }
        default:
            return state;
    }

}

export default authReducer