import React, { useContext } from "react";
import { JokeContext } from "../utils/store/state";

import "../pages/pages.scss";

const PublicJokes = () => {
	const { jokes } = useContext(JokeContext);
	return (
		<div className="public-feed">
			<h2>Public Feed</h2>
			{jokes.jokes &&
				jokes.jokes.map(data => {
					/// if the id is an even number, add blue card class else add white
					if (data.id % 2 === 1) {
						return (
							<div key={data.key} className="public-card-blue">
								<h3>{data.title}</h3>
								<p>{data.joke}</p>
								<p>{data.user_id}</p>
							</div>
						);
					} else {
						return (
							<div key={data.key} className="public-card-white">
								<h3>{data.title}</h3>
								<p>{data.joke}</p>
								<p>{data.user_id}</p>
							</div>
						);
					}
				})}
		</div>
	);
};

export default PublicJokes;
