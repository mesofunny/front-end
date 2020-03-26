import React, { useContext } from "react";
import PublicJokesContainer from "./PublicJokesContainer";
import HomePage from "../pages/HomePage";
import { JokeContext } from "../utils/store/state";

// use public jokes api to get information for PublicJokeCard
function PublicJokes() {
	const { data, filteredData } = useContext(JokeContext);

	return (
		<div className="public-joke-container">
			<HomePage />

			<div className="public-joke-feed">
				<h2>Public Feed</h2>
				<PublicJokesContainer
					jokes={filteredData.length > 0 ? filteredData : data}
				/>
			</div>
		</div>
	);
}

export default PublicJokes;
