import React, { useState, useEffect}  from "react";
import JokeCard from "./JokeCard";
import { jokeContainer } from './StyledWidgets.js';
import {JokeListHeading} from './StyledWidgets';
import {jokeTemplate} from './StyledWidgets'

import { connect } from 'react-redux'
import { fetchData, addData, deleteData, editData } from '../store/actions'

function JokeList (props) {
  const [myJoke, setJokeList] = useState([]);
  const [update, setUpdate] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
        props.fetchData()
    }, [])

    console.log(props.jokes)

  return (
<>
<h2 style={JokeListHeading}>My Joke</h2>

    <div style={jokeContainer} >
      {/* <h2 style={JokeListHeading}>My Joke</h2> */}
     <div style={jokeTemplate}> 
        {props.jokes.map(joke => (
          <JokeCard 
          joke={joke}
          setUpdate={setUpdate}
          setIsUpdating={setIsUpdating}
          myJoke={myJoke}
          />
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