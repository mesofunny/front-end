import React, {useState, useEffect} from "react";
import { jokeCardStyle } from './StyledWidgets.js'
import { connect } from 'react-redux'
import { fetchData, addData, deleteData, editData } from '../store/actions'
import { Divider, Header, Icon, Table } from 'semantic-ui-react'
import { Modal, Form, Button } from 'semantic-ui-react'


function JokeCard (props) {
 const [jokeState, setJokeState] = useState({
    title: "",
    joke: "",
    status: ''
  });

  const changeHandler = event => {
    setJokeState({
      ...jokeState,
      [event.target.name]: event.target.value
    });
  };

  const editJoke = e => {
    e.preventDefault()
    props.editData(props.joke.id, jokeState)
    setJokeState({
      title: '',
      joke: '',
      status: ''
    })
  }

  console.log(props.jokes.id)

  return (
    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={3}>{props.joke.title}</Table.Cell>
          <Table.Cell>{props.joke.joke}</Table.Cell>
          <Table.Cell><input type="text" placeholder="public or private" name="status" value={jokeState.status} onChange={changeHandler}/></Table.Cell>
          <Table.Cell><Modal trigger={<Button>Edit</Button>}></Modal></Table.Cell>
            <Form>
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

                <Button onClick={editJoke}>
                  Update Joke
                </Button>
            </Form> 
        </Table.Row>
      </Table.Body>
    </Table>
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
)(JokeCard)
