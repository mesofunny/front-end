import React, { useEffect } from "react";
import JokeCard from "./JokeCard";
import { connect } from "react-redux";
import {
	fetchData,
	addData,
	deleteData,
	editData,
} from "../utils/store/reducers";
import { Button } from "semantic-ui-react";

function JokeList(props) {
	useEffect(() => {
		props.fetchData();
	}, []);

	console.log(props.jokes);

	return (
		<>
			{props.jokes.map(joke => (
				<div>
					<JokeCard joke={joke} />
					<Button onClick={() => props.deleteData(joke.id)}>
						Delete
					</Button>
				</div>
			))}
		</>
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
})(JokeList);
