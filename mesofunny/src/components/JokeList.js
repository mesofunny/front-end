import React from "react";
import JokeCard from "./JokeCard";
import { jokeContainer } from './StyledWidgets.js';
import {JokeListHeading} from './StyledWidgets';
import {jokeTemplate} from './StyledWidgets'

export default function JokeList(props) {
  return (
    <div style={jokeContainer} >
      <h2 style={JokeListHeading}>My Joke</h2>
     <ul style={jokeTemplate}> 
        {props.myJoke.map(joke => (
          <JokeCard 
          joke={joke}
          setUpdate={props.setUpdate}
          setIsUpdating={props.setIsUpdating}
          />
      ))}
      </ul>
    </div>
  );
}
