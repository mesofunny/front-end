import {
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILURE,
	ADD_DATA_START,
	ADD_DATA_SUCCESS,
	ADD_DATA_FAILURE,
	DELETE_DATA_START,
	DELETE_DATA_SUCCESS,
	DELETE_DATA_FAILURE,
	EDIT_DATA_START,
	EDIT_DATA_SUCCESS,
	EDIT_DATA_FAILURE,
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	REGISTRATION_START,
	REGISTRATION_SUCCESS,
	REGISTRATION_FAILURE,
	GET_JOKE,
	GET_JOKE_ERROR,
	GET_JOKE_SUCESS,
} from "./types";

const initialState = {
	error: "",
	isFetching: false,
	jokes: ["joke of the day"],
	isLoading: false,
	isLoggedIn: false,
	user: "",
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA_START:
			return {
				...state,
				error: "",
				isFetching: true,
				jokes: [],
			};
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				error: "",
				isFetching: false,
				jokes: action.payload,
			};
		case FETCH_DATA_FAILURE:
			return {
				...state,
				error: action.payload,
				isFetching: false,
			};
		case ADD_DATA_START:
			return {
				...state,
				error: "",
				isFetching: true,
				jokes: [],
			};
		case ADD_DATA_SUCCESS:
			return {
				...state,
				error: "",
				isFetching: false,
				jokes: action.payload,
			};
		case ADD_DATA_FAILURE:
			return {
				...state,
				error: action.payload,
				isFetching: false,
				jokes: [],
			};
		case DELETE_DATA_START:
			return {
				...state,
				error: "",
				isFetching: true,
				jokes: [],
			};
		case DELETE_DATA_SUCCESS:
			return {
				...state,
				error: "",
				isFetching: false,
				jokes: action.payload,
			};
		case DELETE_DATA_FAILURE:
			return {
				...state,
				error: action.payload,
				isFetching: false,
				jokes: [],
			};
		case EDIT_DATA_START:
			return {
				...state,
				error: "",
				isFetching: true,
			};
		case EDIT_DATA_SUCCESS:
			const newJokeData = state.jokes.filter(
				joke => joke.id !== action.payload.id
			);
			return {
				...state,
				error: "",
				isFetching: false,
				jokes: [...newJokeData, action.payload],
			};
		case EDIT_DATA_FAILURE:
			return {
				...state,
				error: action.payload,
				isFetching: false,
			};
		case LOGIN_START:
			return {
				...state,
				error: "",
				isLoggedIn: false,
				jokes: [],
				user: "",
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				error: "",
				isLoggedIn: true,
				user: action.payload,
			};
		case LOGIN_FAILURE:
			return {
				...state,
				error: action.payload,
				isLoggedIn: false,
				user: "",
			};
		case REGISTRATION_START:
			return {
				...state,
				error: "",
				isLoggedIn: false,
				jokes: [],
			};
		case REGISTRATION_SUCCESS:
			return {
				...state,
				error: "",
				isLoggedIn: true,
				jokes: action.payload,
			};
		case REGISTRATION_FAILURE:
			return {
				...state,
				error: action.payload,
				isLoggedIn: false,
			};
		case GET_JOKE:
			return {
				...state,
				error: "",
				isFetching: true,
				jokes: [],
			};
		case GET_JOKE_SUCESS:
			return {
				...state,
				error: "",
				isFetching: false,
				jokes: action.payload,
			};
		case GET_JOKE_ERROR:
			return {
				...state,
				...state,
				error: action.payload,
				isFetching: false,
			};
		default:
			return state;
	}
};
