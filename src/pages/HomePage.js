// Code for home page and joke of the day

// imports
import React, { useState, useEffect, useContext } from "react";
import HomePageGrid from "../components/HomePageGrid";

import { DataContext } from "../utils/DataContext";
import dad from "../assets/dad-quote.png";

import "../homepage.css";

const HomePage = props => {
	const { getJoke, searchJokesHandler, jokes } = useContext(DataContext);

	// use api to get joke of the day
	useEffect(() => {
		getJoke();
	}, []);

	return (
		<div className="home-container">
			<div className="daily-joke-container">
				<img src={dad} className="dad-quote-img" />
				<h1 className="daily-joke">{jokes}</h1>
			</div>

			<HomePageGrid search={searchJokesHandler} />
		</div>
	);
};

export default HomePage;
