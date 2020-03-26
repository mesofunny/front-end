import React, { useState } from "react";
import { connect } from "react-redux";
import {
	fetchData,
	addData,
	deleteData,
	editData,
} from "../utils/store/reducers";
import JokeList from "./JokeList";
import TopHalfPage from "./TopHalfPage";
import styled from "styled-components";
import AddJokeCircle from "../assets/add-img-circle.png";

const Title = styled.h1`
	padding: 96px 15px 0px 15px;
	margin: 0px;
	font-size: 1.8rem;
`;
const BigTitleDiv = styled.div`
	display: inline-flex;
	justify-content: space-between;
	background: #99ced2;
	width: 75%;
	margin: 0%, 13%, 0%, 13%;
	padding-bottom: 0px;
	margin-left: 11%;
`;
const Form = styled.form`
	display: flex;
	justify-content: center;
`;
const Input = styled.input`
	height: 30px;
	width: 200px;
`;
const AddDaveJokeBookButton = styled.button`
	display: flex;
	justify-content: center;
`;
const JokeCircle = styled.img`
	height: auto;
`;

function Jokes(props) {
	const [jokeState, setJokeState] = useState({
		title: "",
		joke: "",
		status1: "yes",
	});

	const changeHandler = event => {
		setJokeState({
			...jokeState,
			[event.target.name]: event.target.value,
		});
	};

	const addJoke = e => {
		e.preventDefault();
		props.addData(jokeState);
		setJokeState({
			title: "",
			joke: "",
			status: "",
		});
	};

	return (
		<div>
			<TopHalfPage />
			<h2>My Joke Book</h2>
			<BigTitleDiv>
				<Title>Title</Title>
				<Title>Preview</Title>
				<JokeCircle src={AddJokeCircle} />
				<Title>Actions</Title>
				<Title>Public</Title>
			</BigTitleDiv>
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

				<AddDaveJokeBookButton className="add-fun" onClick={addJoke}>
					Add your own fun!
				</AddDaveJokeBookButton>
			</Form>
			<JokeList />
		</div>
	);
}

const mapStateToProps = state => {
	console.log(state);
	return {
		error: state.error,
		isFetching: state.isFetching,
		jokes: state.jokes,
		user: state.user,
	};
};

export default connect(mapStateToProps, {
	fetchData,
	addData,
	deleteData,
	editData,
})(Jokes);
