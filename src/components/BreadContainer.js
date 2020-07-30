import React from "react";
import {connect} from "react-redux";
import {buyBread} from "../redux/breads/breadActions";


const BreadContainer = props => {
    return (
        <div>
            <h1>No. of Breads - {props.numOfBreads}</h1>
            <button onClick={props.buyBread}>Buy Bread</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfBreads: state.breads.noOfBreads
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyBread: () => dispatch(buyBread())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreadContainer);