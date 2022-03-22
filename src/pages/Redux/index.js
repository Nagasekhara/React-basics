import React, { Component, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { actions } from "./counter";
import { connect } from "react-redux";

class Redux extends Component {
    // const count = useSelector((state) => state.counter.value);
    // const dispatch = useDispatch();
	render()
	{
		return (
			<div>
			<button onClick={this.props.incrementAdd}>increase</button>
			<h1>{this.props.age}</h1>
			<button onClick={this.props.decrementSub} >decrease</button>
			</div>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		age:state.age
	}
};
const mapDispachToProps = (dispach) => {
	return {
		incrementAdd: () => dispach({type:'ADD',val:1}),
		decrementSub: () => dispach({type:'SUB',val:1})
	}
};

export default connect(mapStateToProps,mapDispachToProps) (Redux);

