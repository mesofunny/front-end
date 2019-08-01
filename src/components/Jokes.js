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
const Input = styled.input`
  height: 30px;
  width: 200px;
  
  `

const AddDaveJokeBookButton = styled.button`
  display: flex;
  justify-content: center;
`
function Jokes (props) {
  const [jokeState, setJokeState] = useState({
    title: "",
    joke: "",
    status1: 'yes'
  });

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
        <Input 
          type="text"
          placeholder="Title"
          name="title"
          value={jokeState.title}
          onChange={changeHandler}
        />
        <Input 
          type="text"
          placeholder="ENTER JOKE HERE"
          name="joke"
          value={jokeState.joke}
          onChange={changeHandler}
        />
        
        <Input 
          type="text"
          placeholder="public(no) or private(yes)"
          name="status"
          value={jokeState.status}
          onChange={changeHandler}
        />
        
        <AddDaveJokeBookButton className="add-fun" onClick={addJoke}>
          Add your own fun!
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

