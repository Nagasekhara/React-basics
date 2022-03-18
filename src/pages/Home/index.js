import React, { useState } from 'react';

const Home = () => {
	const [blogs,setBlogs] = useState([
{name:"one",id:1},{name:"two",id:2},{name:"three",id:3}
	]);
return (
	<div>
		{blogs.map((blog)=> (
			<div className='blog-preview' key={blog.id}>
				<h1>{blog.name}</h1>
			</div>
		))}
	</div>
);
};

export default Home;
