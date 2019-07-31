import React from "react";
import { jokeCardStyle } from './StyledWidgets.js'


export default function JokeCard(props) {
  console.log(props.setIsUpdating);
  const clicker = () => {
    props.setUpdate(props.joke);
    props.setIsUpdating(true);
  };

  return (
    <div style={jokeCardStyle}>
      <p>
        <strong>Title: {props.joke.title}</strong>
      </p>
      <p>
        <strong>Description: </strong> {props.joke.joke}
      </p>
      <button onClick={clicker}>Update</button>
    </div>
  );
}
