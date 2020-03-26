import React from "react";
import oopsImage from "./images/image.png";
import HomePage from "./HomePage";

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
