import React from "react";
import JokeCard from "./JokeCard";
import { jokeContainer } from './StyledWidgets.js';
import {JokeListHeading} from './StyledWidgets';
export default function JokeList(props) {
  return (
    <div style={jokeContainer} >
      <h2 style={JokeListHeading}>Hello</h2>
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
