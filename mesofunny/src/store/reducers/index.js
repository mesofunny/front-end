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
} from '../actions'


const initialState = {
    error: '',
    isFetching: false,
    jokes: [],
    isLoading: false,
    isLoggedIn: false,
    user: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                error: '',
                isFetching: true,
                jokes: []
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                jokes: action.payload
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
                jokes: []
            }
        case ADD_DATA_START:
            return {
                ...state,
                error: '',
                isFetching: true,
                jokes: []
            }
        case ADD_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                jokes: action.payload
            }
        case ADD_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
                jokes: []
            }
        case DELETE_DATA_START:
            return {
                ...state,
                error: '',
                isFetching: true,
                jokes: []
            }
        case DELETE_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                jokes: action.payload
            }
        case DELETE_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
                jokes: []
            }
        case EDIT_DATA_START:
            return {
                ...state,
                error: '',
                isFetching: true,
                jokes: []
            }
        case EDIT_DATA_SUCCESS:
            
            return {
                ...state,
                error: '',
                isFetching: false,
                jokes: action.payload
            }
        case EDIT_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
                jokes: []
            }
        case LOGIN_START:
            return {
                ...state,
                error: '',
                isLoggedIn: false,
                jokes: [],
                user: ''
            }
        case LOGIN_SUCCESS:
            
            return {
                ...state,
                error: '',
                isLoggedIn: true,
                user: action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoggedIn: false,
                jokes: [],
                user: ''
            }
        case REGISTRATION_START:
            return {
                ...state,
                error: '',
                isLoggedIn: false,
                jokes: []
            }
        case REGISTRATION_SUCCESS:
            
            return {
                ...state,
                error: '',
                isLoggedIn: true,
                jokes: action.payload
            }
        case REGISTRATION_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoggedIn: false,
                jokes: []
            }
        default: 
            return state

    } 

}