import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./counter";
const Redux = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
return (
	<div>
	<button onClick={()=>dispatch(actions.increment())}>increase</button>
    <h1>{count}</h1>
	<button onClick={()=>dispatch(actions.decrement())} >decrease</button>
	</div>
);
};

export default Redux;

