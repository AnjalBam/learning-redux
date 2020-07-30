import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {buyIceCream} from "../redux/ice-cream/iceCreamAction";

const HooksIceCreamContainer = props => {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>No. Of IceCreams - {numOfIceCreams}</h2>
            <button onClick={() => dispatch(buyIceCream())}>buy IceCream</button>
        </div>
    )
}
export default HooksIceCreamContainer;