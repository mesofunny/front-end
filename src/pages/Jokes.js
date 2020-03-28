import React, { useState, useContext } from "react";
import { Form, Input, Button } from "semantic-ui-react";

import JokeCard from "../components/JokeCard";

import { JokeContext } from "../utils/store/state";

import AddJokeCircle from "../assets/add-img-circle.png";

import "./pages.scss";

function Jokes(props) {
	const {
		fetchData,
		addData,
		deleteData,
		editData,
		jokes,
		addJokeToProfile,
		users,
	} = useContext(JokeContext);
	const [jokeState, setJokeState] = useState({
		title: "",
		joke: "",
		status1: "yes",
	});
	const jokeToAdd = [];
	const changeHandler = event => {
		setJokeState({
			...jokeState,
			[event.target.name]: event.target.value,
		});
	};

	const addJoke = e => {
		e.preventDefault();
		addData(jokeState);
		setJokeState({
			title: "",
			joke: "",
			status: "",
		});
	};
	function addPublicJoke() {
		addJokeToProfile(jokeToAdd);
	}
	console.log("users. jokes", users);
	return (
		<div className="joke-page">
			<div className="title">
				<div>
					<h2>My Joke Book</h2>
					{(() => {
						if (jokes.jokes) {
							let r =
								jokes.jokes[
									Math.floor(
										Math.random() * jokes.jokes.length
									)
								];
							jokeToAdd.push(r);
							return (
								<div>
									<h4 className="joke">
										Title {r && r.title}
									</h4>
									<p className="joke">Joke: {r && r.joke}</p>
								</div>
							);
						} else {
							return (
								<h1 className="joke">Nothing yet, Loading</h1>
							);
						}
					})()}
				</div>
				<img
					src={AddJokeCircle}
					alt="add-to-list"
					onClick={addPublicJoke}
				/>
			</div>
			<div className="add-joke">
				<Form>
					<Input
						type="text"
						placeholder="Title"
						name="title"
						value={jokeState.title}
						onChange={changeHandler}
					/>
					<Input
						type="text"
						placeholder="ENTER JOKE HERE"
						name="joke"
						value={jokeState.joke}
						onChange={changeHandler}
					/>

					<Input
						type="text"
						placeholder="public(no) or private(yes)"
						name="status"
						value={jokeState.status}
						onChange={changeHandler}
					/>

					<Button className="add-fun" onClick={addJoke}>
						Add your own fun!
					</Button>
				</Form>
			</div>
			<div>
				{/* {(() => {
					if (users.users.dadjokes.length > 0) {
						users.users.dadjokes.map(data => {
							return (
								<div key={data.key}>
									<JokeCard />
									<Button onClick={() => deleteData(data.id)}>
										Delete
									</Button>
								</div>
							);
						});
					} else {
						return <h2>No Jokes Yet</h2>;
					}
				})()} */}
			</div>
		</div>
	);
}

export default Jokes;
