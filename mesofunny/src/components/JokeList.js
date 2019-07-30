import React from "react";
import JokeCard from "./JokeCard";
import { jokeContainer } from './StyledWidgets.js';

export default function JokeList(props) {
  return (
    <div style={jokeContainer} >
      {props.myJoke.map(joke => (
        <JokeCard 
          joke={joke}
          setUpdate={props.setUpdate}
          setIsUpdating={props.setIsUpdating}
        />
      ))}
    </div>
  );
}
