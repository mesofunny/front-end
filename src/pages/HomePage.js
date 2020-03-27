// Code for home page and joke of the day

// imports
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { JokeContext, JokeState } from "../utils/store/state";

// image imports
import dad from "../assets/dad-quote.png";
import book from "../assets/joke-book.png";
import feed from "../assets/public-feed.png";
import favorites from "../assets/favorites.png";
import friends from "../assets/friends.png";
import profile from "../assets/profile.png";

import "./pages.scss";

const HomePage = () => {
	const token = localStorage.getItem("token");
	const { jokes } = useContext(JokeContext);

	const [search, setSearch] = useState("");

	const searchJokesHandler = e => {
		const letter = jokes.filter(j => {
			if (jokes.title.includes(e.target.value)) return j;
		});
		setSearch(letter);
	};

	return (
		<div className="home">
			<div className="daily-joke">
				<img src={dad} className="dad-quote-img" alt="daily-joke" />
				{(() => {
					if (jokes.jokes) {
						let r =
							jokes.jokes[
								Math.floor(Math.random() * jokes.jokes.length)
							];
						return <p className="joke">{r && r.joke}</p>;
					} else {
						return (
							<h1 className="joke">Nothing yet, stay tunned</h1>
						);
					}
				})()}
			</div>
			<div className="content">
				<div className="bar">
					<input
						type="text"
						placeholder="Search Joke"
						onKeyDown={searchJokesHandler}
					/>
				</div>
				<div className="options">
					{!token ? (
						<Link to="/user">
							<img src={book} alt="link-to-user" />
						</Link>
					) : (
						<Link to="/jokes">
							<img alt="link-to-jokes" src={book} />
						</Link>
					)}
					<Link to="/public-feed">
						<img alt="link-to-feed" src={feed} />
					</Link>
					<Link to="/favorites">
						<img alt="link-to-favorites" src={favorites} />
					</Link>
					<Link to="/friends">
						<img alt="link-to-friends" src={friends} />
					</Link>
					<Link to="/profile">
						<img alt="link-to-profile" src={profile} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
