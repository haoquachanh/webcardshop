import actionTypes from "../actions/actionTypes";

const initState={
    products:[],
    msg:''
}

const productsReducer = (state = initState, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.GET_PRODUCTS:
            return{
                ...state,
                products:action.products || [],
                msg: action.msg || ''
            }
        default:
            return state;
    }

}

export default productsReducer