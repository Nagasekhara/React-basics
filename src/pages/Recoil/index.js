import React, { useState } from "react";
import { useRecoilState } from "recoil";
import counterAtom from "./counter";

const About = () => {
	const [count, setCount] = useRecoilState(counterAtom);

	return (
	  <div>
		<div>
		  <button onClick={() => setCount(count + 1)}>Increment</button>
		  <span>{count}</span>
		  <button onClick={() => setCount(count - 1)}>Decrement</button>
		</div>
	  </div>
	);
// const [count,setCount] = useState(0);
// return (
// 	<div>
// 	<h1>{count}</h1>
// 	<button onClick={()=>setCount(count+1)}>increase</button>
// 	<button onClick={()=>setCount(count-1)} >decrease</button>
// 	</div>
// );
};

export default About;
