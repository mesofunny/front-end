import React, { useContext, useEffect } from "react";
import { Route } from "react-router-dom";

// import main page components
import LoginRegister from "./components/LoginRegister";
import HomePage from "./pages/HomePage";
import MenuBar from "./pages/MenuBar.js";
import PublicJokes from "./components/PublicJokes";
import Profile from "./components/Profile";
import Jokes from "./components/Jokes";
import Footer from "./pages/Footer";
import NeedUpdate from "./components/NeedUpdate";

// initial global state to app
import { JokeContext } from "./utils/store/state";

import "./pages/pages.scss";

function App() {
	const { getJoke } = useContext(JokeContext);
	useEffect(() => {
		getJoke();
	}, []);
	return (
		<div className="App">
			<MenuBar />
			<Route exact path="/" component={HomePage} />
			<Route path="/user" component={LoginRegister} />
			<Route path="/profile" component={Profile} />
			<Route path="/public-feed" component={PublicJokes} />
			<Route path="/jokes" component={Jokes} />
			<Route path="/favorites" component={NeedUpdate} />
			<Route path="/friends" component={NeedUpdate} />
			<Footer />
		</div>
	);
}

export default App;
