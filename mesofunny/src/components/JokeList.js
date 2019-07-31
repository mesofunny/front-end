import React from "react";
import JokeCard from "./JokeCard";
import { jokeContainer } from './StyledWidgets.js';
import {JokeListHeading} from './StyledWidgets';
import {jokeTemplate} from './StyledWidgets'

export default function JokeList(props) {
 return (

<>
<h2 style={JokeListHeading}>My Joke</h2>

    <div style={jokeContainer} >
     <div style={jokeTemplate}> 
        {props.myJoke.map(joke => (
          <JokeCard 
          joke={joke}
          setUpdate={props.setUpdate}
          setIsUpdating={props.setIsUpdating}
          />
      ))}
      </div>
    </div>
   </>
  );
}
