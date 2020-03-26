// Code for home page and joke of the day

// imports
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../homepage.css";
import HomePageGrid from "./HomePageGrid";
import dad from "./images/dad-quote.png";
import { DataContext } from "../contexts/DataContext";

const HomePage = props => {
	// store joke of the day using hooks
	const [joke, setJoke] = useState("");
	const { searchJokesHandler } = useContext(DataContext);

	// use api to get joke of the day
	useEffect(() => {
		const getJoke = () => {
			axios
				.get("https://DadJokes.herokuapp.com/api/v1/jokesOfTheDay")

				.then(response => {
					// successful
					console.log("response data", response);

					setJoke(response.data.joke.joke);
				})

				.catch(error => {
					// unsuccessful
					console.error("The API is currently down.", error);
				});
		};

		getJoke();
	}, []);

	return (
		<div className="home-container">
			<div className="daily-joke-container">
				<img src={dad} className="dad-quote-img" />
				<h1 className="daily-joke">{joke}</h1>
			</div>

			<HomePageGrid search={searchJokesHandler} />
		</div>
	);
};

export default HomePage;
