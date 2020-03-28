import React from "react";
import oopsImage from "../assets/image.png";

const NeedUpdate = () => {
	return (
		<div>
			<h2>Oops</h2>
			<img
				src={oopsImage}
				className="oops-image"
				alt="page-under-maintance"
			/>
		</div>
	);
};

export default NeedUpdate;
