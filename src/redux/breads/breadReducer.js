import {BUY_BREAD} from "./breadActionTypes";

const initialState = {
    noOfBreads: 16
}

const breadReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_BREAD:
            return {
                ...state,
                noOfBreads: state.noOfBreads - 1
            }
        default:
            return state
    }
}

export default breadReducer;