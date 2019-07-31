import React, {useState, useEffect} from "react";
import { jokeCardStyle } from './StyledWidgets.js'
import { connect } from 'react-redux'
import { fetchData, addData, deleteData, editData } from '../store/actions'

import { Modal, Form, Button } from 'semantic-ui-react'


function JokeCard (props) {
 const [jokeState, setJokeState] = useState({
    title: "",
    joke: "",
    status: ''
  });

  const changeHandler = event => {
    setJokeState({
      ...jokeState,
      [event.target.name]: event.target.value
    });
  };

  const editJoke = e => {
    e.preventDefault()
    props.editData(props.joke.id, jokeState)
    setJokeState({
      title: '',
      joke: '',
      status: ''
    })
  }

  console.log(props.jokes.id)

  return (
    <div style={jokeCardStyle}>
      <p>
        <strong>Title: {props.joke.title}</strong>
      </p>
      <p>
        <strong>Description: </strong> {props.joke.joke}
      </p>
      <Modal trigger={<button>Edit</button>}>
          <form  >
        <input 
          type="text"
          placeholder="Title"
          name="title"
          value={jokeState.title}
          onChange={changeHandler}
        />
        <input 
          type="text"
          placeholder="ENTER JOKE HERE"
          name="joke"
          value={jokeState.joke}
          onChange={changeHandler}
        />
        <input 
          type="text"
          placeholder="public or private"
          name="status"
          value={jokeState.status}
          onChange={changeHandler}
        />
        <button onClick={editJoke}>
          Update Joke
        </button>

      </form>
        
      </Modal>
      
    </div>
  );
}

const mapStateToProps = state => {
    console.log(state)
    return {
        error: state.error,
        isFetching: state.isFetching,
        jokes: state.jokes,
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    { fetchData, addData, deleteData, editData }
)(JokeCard)
