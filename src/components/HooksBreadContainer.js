import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {buyBread} from "../redux/breads/breadActions";


const HooksBreadContainer = props => {
    const numOfBreads = useSelector(state => state.breads.noOfBreads)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Breads: {numOfBreads}</h2>
            <button onClick={() => dispatch(buyBread())}>Buy Bread</button>
        </div>
    )
}

export default HooksBreadContainer;