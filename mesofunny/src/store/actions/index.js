import axios from 'axios'
import { axiosWithAuth } from '../../utils/axiosWithAuth'


export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'


export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START})
    axiosWithAuth()
        .get(`/api/v1/users/jokes`)
        .then(response => {
            console.log(response.data)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data.jokes})
        })
        .catch(err => {
            console.log(err.response)
            dispatch({ type: LOGIN_FAILURE, payload: err})}
            )
    }

export const ADD_DATA_START = 'ADD_DATA_START'
export const ADD_DATA_SUCCESS = 'ADD_DATA_SUCCESS'
export const ADD_DATA_FAILURE = 'ADD_DATA_FAILURE'


export const addData = (newJoke) => dispatch => {
    dispatch({ type: ADD_DATA_START})
    axiosWithAuth()
        .post(`/api/v1/users/jokes`, newJoke)
        .then(response => {
            console.log(response)
            dispatch({ type: ADD_DATA_SUCCESS, payload: response.data.jokes})
        })
        .catch(err => {
            console.log(err.response)
            dispatch({ type: LOGIN_FAILURE, payload: err})
        })
    }

export const DELETE_DATA_START = 'DELETE_DATA_START'
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS'
export const DELETE_DATA_FAILURE = 'DELETE_DATA_FAILURE'


export const deleteData = (id) => dispatch => {
    dispatch({ type: DELETE_DATA_START})
    axiosWithAuth()
        .delete(`/api/v1/users/jokes/${id}`)
        .then(response => {
            console.log(response)
            dispatch({ type: DELETE_DATA_SUCCESS, payload: response.data.joke})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: LOGIN_FAILURE, payload: err})
        })
    }

export const EDIT_DATA_START = 'EDIT_DATA_START'
export const EDIT_DATA_SUCCESS = 'EDIT_DATA_SUCCESS'
export const EDIT_DATA_FAILURE = 'EDIT_DATA_FAILURE'


export const editData = (id, editJoke) => dispatch => {
    dispatch({ type: EDIT_DATA_START})
    axiosWithAuth()
        .put(`/api/v1/users/jokes/${id}`, editJoke)
        .then(response => {
            console.log(response)
            dispatch({ type: EDIT_DATA_SUCCESS, payload: response.data.jokes})
        })
        .catch(err => {
            console.log(err.response)
            dispatch({ type: LOGIN_FAILURE, payload: err})})
    }

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'


export const userLogin = (email, password) => dispatch => {
    console.log(email, password)
    dispatch({ type: LOGIN_START })
    return axiosWithAuth()
        .post(`/api/v1/users/login`, {
            email: email,
            password: password
        })
        .then(response => {
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
            dispatch({ type: LOGIN_SUCCESS, payload: response.data })
            return true
        })
        .catch(res => {
            console.log(res)
            dispatch({ type: LOGIN_FAILURE, payload: res})
        })
    }

export const REGISTRATION_START = 'REGISTRATION_START';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';

export const register = newUser => dispatch => {
  dispatch({ type: REGISTRATION_START });
  axiosWithAuth()
    .post(`/api/v1/users/register`, newUser)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.token)
      dispatch({ type: REGISTRATION_SUCCESS, payload: res.data });
      return true;
    })
    .catch(err => {
      console.log(err.response)
      dispatch({ type: REGISTRATION_FAILURE, payload: err.response })
    });
};