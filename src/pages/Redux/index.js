import React, { Component, useState } from "react";
import { connect } from "react-redux";

class Redux extends Component {
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

