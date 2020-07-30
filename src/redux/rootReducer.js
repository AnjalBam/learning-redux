import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./ice-cream/iceCreamReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer;