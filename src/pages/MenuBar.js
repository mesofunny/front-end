import React from "react";
import { Link } from "react-router-dom";

import menubaremoji from "../assets/menubaremoji.PNG";
// adding scss
import "./pages.scss";

const Header = () => {
	return (
		<div className="heading">
			<img src={menubaremoji} alt="menuBarEmoji" />
			<h1>Dad Jokes</h1>
		</div>
	);
};

const MenuBar = props => {
	const token = localStorage.getItem("token");
	const logout = () => {
		localStorage.removeItem("token");
		props.history.push("/");
	};
	if (token) {
		return (
			<div className="menu">
				{Header()}
				<Link to="/">Home</Link>
				<Link to="/contact">Contact Us</Link>
				<Link to="/profile">Profile</Link>
				<Link to="/" onClick={logout}>
					Log Out
				</Link>
			</div>
		);
	} else {
		return (
			<div className="menu">
				{Header()}
				<div className="links">
					<Link to="/">Home</Link>
					<Link to="/user">Login</Link>
					<Link to="/public-feed">Public Feed</Link>
				</div>
			</div>
		);
	}
};
export default MenuBar;
