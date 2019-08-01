import React, { useState, useEffect}  from "react";
import JokeCard from "./JokeCard";
import { jokeContainer } from './StyledWidgets.js';
import {JokeListHeading} from './StyledWidgets';
import {jokeTemplate} from './StyledWidgets'
import Jokes from './Jokes'

import { connect } from 'react-redux'
import { fetchData, addData, deleteData, editData } from '../store/actions'

function JokeList (props) {

  useEffect(() => {
        props.fetchData()
    }, [])

    console.log(props.jokes)

  return (
<>
<h2 style={JokeListHeading}>My Joke</h2>

    <div style={jokeContainer} >
     <div style={jokeTemplate}> 
        {props.jokes.map(joke => (
          <div>
          <JokeCard 
          joke={joke}
          />
          <button onClick={() => props.deleteData(joke.id)}>Delete</button>
          </div>
      ))}
      </div>
    </div>
   </>
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
)(JokeList)