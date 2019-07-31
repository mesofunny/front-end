import React, { useState, useEffect } from "react";
import JokeList from './JokeList'

//Id Generator
let idGenerator = () => {
  let id = 0;
  return function countUp() {
    return id++;
  };
};

const giveId = idGenerator();

export default function Jokes(props) {
  const [jokeState, setJokeState] = useState({
    name: "",
    description: ""
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

  const submitHandler = event => {
    event.preventDefault();
    if (!props.isUpdating) {
      props.setJokeList([...props.myJoke, { ...jokeState, id: giveId() }]);
    } else if (props.isUpdating) {
      //spreadOp
      let updatedList = props.myJoke.filter(joke => joke.id !== jokeState.id);
      let updatedListTwo = [...updatedList, jokeState];
      props.setJokeList(updatedListTwo);
    }

    setJokeState({ name: "", description: "" });
  };



  return (
    <div>
      <form className="joke-form" onSubmit={submitHandler}>
        <input 
          type="text"
          placeholder="Title"
          name="name"
          value={jokeState.name}
          onChange={changeHandler}
        />
        <input 
          type="text"
          placeholder="ENTER JOKE HERE"
          name="description"
          value={jokeState.description}
          onChange={changeHandler}
        />
        <button >
          {props.isUpdating ? "Update your Joke" : "Add your own fun!"}
        </button>

      </form>
    </div>
  );
}
