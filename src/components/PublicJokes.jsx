import React, { useContext } from "react";
import PublicJokesContainer from "./PublicJokesContainer";
import HomePage from "../pages/HomePage";
import { DataContext } from "../utils/DataContext";

// use public jokes api to get information for PublicJokeCard
function PublicJokes() {
	const { data, filteredData } = useContext(DataContext);

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
