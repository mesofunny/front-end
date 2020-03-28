import React, { createContext, useReducer, useEffect } from "react";
import {
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	ADD_DATA_START,
	ADD_DATA_SUCCESS,
	DELETE_DATA_START,
	DELETE_DATA_SUCCESS,
	EDIT_DATA_START,
	EDIT_DATA_SUCCESS,
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
import { reducer } from "./reducer";

import { axiosWithAuth, call } from "../axiosWithAuth";

import { loadState, saveState } from "../localStorage";

export const JokeContext = createContext();

export const JokeState = props => {
	const initialState = {
		error: "",
		isFetching: false,
		jokes: [],
		isLoading: false,
		isLoggedIn: false,
		users: {
			firstname: "carlos",
			lastname: "hernandez",
			email: "example@test.com",
			dadjokes: [],
		},
	};
	const localState = loadState("joke");

	const [state, dispatch] = useReducer(reducer, localState || initialState);

	useEffect(() => {
		saveState("joke", state);
	}, [state]);

	const fetchData = () => {
		dispatch({ type: FETCH_DATA_START });
		axiosWithAuth()
			.get(`/v1/users/jokes`)
			.then(response => {
				console.log(response.data);
				dispatch({
					type: FETCH_DATA_SUCCESS,
					payload: response.data.jokes,
				});
			})
			.catch(err => {
				console.log(err.response);
				dispatch({ type: LOGIN_FAILURE, payload: err });
			});
	};

	const addData = newJoke => {
		dispatch({ type: ADD_DATA_START });
		axiosWithAuth()
			.post(`/v1/users/jokes`, newJoke)
			.then(response => {
				console.log(response);
				dispatch({
					type: ADD_DATA_SUCCESS,
					payload: response.data.jokes,
				});
			})
			.catch(err => {
				console.log(err.response);
				dispatch({ type: LOGIN_FAILURE, payload: err });
			});
	};

	const deleteData = id => {
		dispatch({ type: DELETE_DATA_START });
		axiosWithAuth()
			.delete(`/v1/users/jokes/${id}`)
			.then(response => {
				console.log(response);
				dispatch({
					type: DELETE_DATA_SUCCESS,
					payload: response.data.joke,
				});
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: LOGIN_FAILURE, payload: err });
			});
	};

	const editData = (id, editJoke) => {
		dispatch({ type: EDIT_DATA_START });
		axiosWithAuth()
			.put(`/v1/users/jokes/${id}`, editJoke)
			.then(response => {
				console.log(response);
				dispatch({
					type: EDIT_DATA_SUCCESS,
					payload: response.data.jokes,
				});
			})
			.catch(err => {
				console.log(err.response);
				dispatch({ type: LOGIN_FAILURE, payload: err });
			});
	};

	const userLogin = (email, password) => {
		console.log(email, password);
		dispatch({ type: LOGIN_START });
		return axiosWithAuth()
			.post(`/v1/users/login`, {
				email: email,
				password: password,
			})
			.then(response => {
				localStorage.setItem("token", response.data.token);
				console.log(response.data);
				dispatch({ type: LOGIN_SUCCESS, payload: response.data });
				return true;
			})
			.catch(res => {
				console.log(res);
				dispatch({ type: LOGIN_FAILURE, payload: res });
			});
	};

	const register = newUser => {
		dispatch({ type: REGISTRATION_START });
		axiosWithAuth()
			.post(`/v1/users/register`, newUser)
			.then(res => {
				console.log(res);
				localStorage.setItem("token", res.data.token);
				dispatch({ type: REGISTRATION_SUCCESS, payload: res.data });
				return true;
			})
			.catch(err => {
				console.log(err.response);
				dispatch({ type: REGISTRATION_FAILURE, payload: err.response });
			});
	};

	// get joke

	const getJoke = () => {
		dispatch({ type: GET_JOKE });
		call()
			.get(`/v1/jokes`)
			.then(res => {
				dispatch({ type: GET_JOKE_SUCESS, payload: res.data });
			})
			.catch(err => {
				dispatch({ type: GET_JOKE_ERROR, payload: err.response });
			});
	};
	const addJokeToProfile = e => {
		console.log(e);
	};

	return (
		<JokeContext.Provider
			value={{
				error: state.error,
				isFetching: state.isFetching,
				jokes: state.jokes,
				isLoading: state.isLoading,
				isLoggedIn: state.isLoggedIn,
				user: state.user,
				fetchData,
				addData,
				deleteData,
				editData,
				userLogin,
				register,
				getJoke,
				addJokeToProfile,
			}}
		>
			{props.children}
		</JokeContext.Provider>
	);
};
