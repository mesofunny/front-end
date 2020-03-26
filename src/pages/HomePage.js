// Code for home page and joke of the day

// imports
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../utils/DataContext";

// image imports
import dad from "../assets/dad-quote.png";
import book from "../assets/joke-book.png";
import feed from "../assets/public-feed.png";
import favorites from "../assets/favorites.png";
import friends from "../assets/friends.png";
import profile from "../assets/profile.png";

import "./pages.scss";

const HomePage = props => {
	const { searchJokesHandler, jokes } = useContext(DataContext);

	const token = localStorage.getItem("token");
	return (
		<div className="home">
			<div className="daily-joke">
				<img src={dad} className="dad-quote-img" />
				<h1 className="joke">{jokes && jokes}</h1>
			</div>

			{/* <HomePageGrid search={searchJokesHandler} /> */}
			<div className="content">
				<div className="bar">
					<input
						type="text"
						placeholder="Search Joke"
						onKeyDown={searchJokesHandler}
					/>
				</div>
				<div className="options">
					{/* 
					Create the square boxes that link to a given page

					If the user has a token send him to user else jokes 
					
					*/}
					{!token ? (
						<Link to="/user">
							<img src={book} />
						</Link>
					) : (
						<Link to="/jokes">
							<img src={book} />
						</Link>
					)}
					<Link to="public-feed">
						<img src={feed} />
					</Link>
					<Link to="/favorites">
						<img src={favorites} />
					</Link>
					<Link to="friends">
						<img src={friends} />
					</Link>
					<Link to="/profile">
						<img src={profile} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
