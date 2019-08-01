import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { fetchData, addData, deleteData, editData } from '../store/actions';
import JokeList from './JokeList';
import TopHalfPage from "./TopHalfPage"
import Footer from "./Footer";
import styled from "styled-components"
import {JokeListHeading} from './StyledWidgets';

const Title = styled.h4 `
    padding: 15px 15px 0px 15px;
`
const BigTitleDiv = styled.div `
  display: inline-flex;
  justify-content: space-between;
  background: #99CED2;
  width: 75%;
  margin: 0%, 13%, 0%, 13%;
  padding-bottom: 0px;
  margin-left: 11%;
`
const Form = styled.form`
  display: flex;
  justify-content: center;
`
const AddDaveJokeBookButton = styled.button`
  display: flex;
  justify-content: center;
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
    <h2 style={JokeListHeading}>Dave's Joke Book</h2>
    <BigTitleDiv>
      <Title>Title</Title>
      <Title>Preview</Title>
      <Title>Actions</Title>
      <Title>Public</Title>
      </BigTitleDiv>
      <Form>
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
        <AddDaveJokeBookButton className="add-fun" onClick={addJoke}>
          {props.isUpdating ? "Update your Joke" : "Add your own fun!"}
        </AddDaveJokeBookButton>

      </Form>
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

