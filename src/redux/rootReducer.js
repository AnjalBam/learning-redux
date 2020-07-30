import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./ice-cream/iceCreamReducer";
import breadReducer from "./breads/breadReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    breads: breadReducer,
})

export default rootReducer;