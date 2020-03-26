import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import LoginRegister from "./components/LoginRegister";
import HomePage from "./pages/HomePage";
import MenuBar from "./pages/MenuBar.js";
import PublicJokes from "./components/PublicJokes";
import Profile from "./components/Profile";
import Jokes from "./components/Jokes";
import Footer from "./pages/Footer";
import NeedUpdate from "./components/NeedUpdate";

import { DataContext } from "./utils/DataContext";

import "./pages/pages.scss";

function App() {
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		const getFeed = () => {
			axios
				.get("https://DadJokes.herokuapp.com/api/v1/jokes")

				.then(response => {
					console.log(response.data.jokes);
					setData(response.data.jokes);
				})

				.catch(error => {
					console.log("Where are my jokes?", error);
				});
		};

		getFeed();
	}, []);

	const searchJokesHandler = e => {
		const jokes = data.filter(joke => {
			if (joke.title.includes(e.target.value)) {
				return joke;
			}
		});
		setFilteredData(jokes);
	};

	return (
		<div className="App">
			<DataContext.Provider
				value={{ searchJokesHandler, data, filteredData }}
			>
				<MenuBar />
				<Route exact path="/" component={HomePage} />
				<Route path="/user" component={LoginRegister} />
				<Route path="/profile" component={Profile} />
				<Route path="/public-feed" component={PublicJokes} />
				<Route path="/jokes" component={Jokes} />
				<Route path="/favorites" component={NeedUpdate} />
				<Route path="/friends" component={NeedUpdate} />
				<Footer />
			</DataContext.Provider>
		</div>
	);
}

export default App;
