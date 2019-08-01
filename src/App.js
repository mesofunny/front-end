import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Jokes from "./components/Jokes";
import JokeList from "./components/JokeList.js";
import LoginRegister from './components/LoginRegister'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import PrivateRoute from './components/PrivateRoute'
import Test from './components/Test'
import {testingBackground} from './components/StyledWidgets'
import PublicJokes from './components/PublicJokes'
import { DataContext } from './contexts/DataContext'
import axios from 'axios'


function App() {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    const getFeed= () => {
            axios 
                .get("https://mesofunny.herokuapp.com/api/v1/jokes")

                .then(response => {
                    console.log(response.data.jokes)
                    setData(response.data.jokes)
                })

                .catch(error => {
                console.log("Where are my jokes?", error)
                });
        }

        getFeed();
  }, [])

const searchJokesHandler = e => {
  const jokes = data.filter(joke => {
    if (joke.title.includes(e.target.value)) {
      return joke
    }
  })
  setFilteredData(jokes)
}

  console.log('data', filteredData)
  return (
      <div style={testingBackground}>
    <>
    <DataContext.Provider value={{searchJokesHandler, data, setFilteredData}}>
      <Router>
      <Route path="/" component={NavBar}/>
      <Route exact path="/" component={HomePage} />
      <Route path="/user" component={LoginRegister} />
      <Route path="/public" component={PublicJokes} />
      <PrivateRoute path="/jokes" component={Jokes} />

      </Router>
      </DataContext.Provider>
    </>
      </div>
  );
}

export default App;
