import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { fetchData, addData, deleteData, editData } from '../store/actions';
import JokeList from './JokeList';
import TopHalfPage from "./TopHalfPage"
import Footer from "./Footer";
import styled from "styled-components"

const Title = styled.h4 `
  display:flex;
  justify-content: space-between;
  size: 1vw;
`
const TitleDiv = styled.div`
  display: flex;
`

const BigTitleDiv = styled.div `
  background: #99CED2;
`

function Jokes (props) {
  const [jokeState, setJokeState] = useState({
    title: "",
    joke: "",
    status: ''
  });

  // useEffect(() => {
  //   setJokeState(props.update);
  // }, [props.update]);

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

  const submitHandler = event => {
    event.preventDefault();
    if (!props.isUpdating) {
      props.setJokeList([...props.myJoke, { ...jokeState }]);
    } else if (props.isUpdating) {
      //spreadOp
      let updatedList = props.myJoke.filter(joke => joke.id !== jokeState.id);
      let updatedListTwo = [...updatedList, jokeState];
      props.setJokeList(updatedListTwo);
    }

    setJokeState({ name: "", description: "" });
  };
  
    console.log()
  return (

    <div>
    <TopHalfPage/>
    <BigTitleDiv>
      <TitleDiv>
      <Title>Title</Title>
      </TitleDiv>
      <div>
      <h4>Preview</h4>
      </div>
      <div>
      <h4>Actions</h4>
      </div>
      <div>
      <h4>Public</h4>
      </div>
      </BigTitleDiv>
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
        <button className="add-fun" onClick={addJoke}>
          {props.isUpdating ? "Update your Joke" : "Add your own fun!"}
        </button>

      </form>
      <JokeList />
      <Footer/>
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

