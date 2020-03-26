import React from "react";
import oopsImage from "../assets/image.png";
import HomePage from "../pages/HomePage";

const NeedUpdate = () => {
	return (
		<>
			<HomePage />
			<div>
				<h2>Oops</h2>
				<img src={oopsImage} className="oops-image" />
			</div>
		</>
	);
};

export default NeedUpdate;
