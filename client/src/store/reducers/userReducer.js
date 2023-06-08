import actionTypes from "../actions/actionTypes";

const initState = {
    currentData: {},
    token: null,
    msg:""
}

const userReducer = (state = initState, action) => {
    // console.log(action)
    switch (action.type) {
        case actionTypes.GET_CURRENT:
            return {
                ...state,
                currentData: action.currentData || {},
                // msg: action.msg
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                currentData: {}
            }

        // case actionTypes.UPDATE_INFOR:
        //     return{
        //         ...state,
        //         token: action.data,
        //         msg:'',
        //     }
        default:
            return state;
    }
}

export default userReducer