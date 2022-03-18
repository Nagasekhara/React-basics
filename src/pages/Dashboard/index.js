import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Login from "../Login";

const Dashboard = () => {

  const [count,setCount] = useState(0);
  const images = [
    { url: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg" },
    { url: "https://newcastlebeach.org/images/sample-image-url-7.jpg" },
    { url: "images/3.jpg" },
    { url: "images/4.jpg" },
    { url: "images/5.jpg" },
    { url: "images/6.jpg" },
    { url: "images/7.jpg" },
  ];
  
return (
	<div>
 <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
	</div>
);
};

export default Dashboard;