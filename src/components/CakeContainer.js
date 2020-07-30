import React from "react";
import {buyCake} from "../redux/cakes/cakeAction";
import {connect} from "react-redux";

const CakeContainer = (props) => {
    return (
        <div>
            <h1>No. of cakes:{props.noOfCakes}</h1>
            <button onClick={() => props.buyCake()}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        noOfCakes: state.cake.noOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => {
            dispatch(buyCake());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);