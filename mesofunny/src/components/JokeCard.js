import React from "react";
import { jokeCardStyle } from './StyledWidgets.js'


export default function JokeCard(props) {
  console.log(props.setIsUpdating);
  const clicker = () => {
    props.setUpdate(props.joke);
    props.setIsUpdating(true);
  };

  return (
    <li style={jokeCardStyle}>
      <p>
        <strong>Title: {props.joke.name}</strong>
      </p>
      <p>
        <strong>Description: </strong> {props.joke.description}
      </p>
      <button onClick={clicker}>Update</button>
    </li>
  );
}
