import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { fetchData, addData, deleteData, editData } from '../store/actions'



function Jokes (props) {
  const [jokeState, setJokeState] = useState({
    title: "",
    joke: "",
    status: ''
  });

  useEffect(() => {
    setJokeState(props.update);
  }, [props.update]);

  const changeHandler = event => {
    setJokeState({
      ...jokeState,
      [event.target.name]: event.target.value
    });
  };

  const addJoke = (e) => {
        e.preventDefault()
        props.addData(jokeState)
        setJokeState({
            title: '',
            joke: '',
            status: ''
        })
    }

  // const submitHandler = event => {
  //   event.preventDefault();
  //   if (!props.isUpdating) {
  //     props.setJokeList([...props.myJoke, { ...jokeState }]);
  //   } else if (props.isUpdating) {
  //     //spreadOp
  //     let updatedList = props.myJoke.filter(joke => joke.id !== jokeState.id);
  //     let updatedListTwo = [...updatedList, jokeState];
  //     props.setJokeList(updatedListTwo);
  //   }

  //   setJokeState({ name: "", description: "" });
  // };


    console.log()
  return (
    <div>
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
        <button onClick={addJoke}>
          {props.isUpdating ? "Update your Joke" : "Add your own fun!"}
        </button>

      </form>
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
)(Jokes)

