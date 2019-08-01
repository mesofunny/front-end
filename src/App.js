<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React from "react";
>>>>>>> 4a6bbdc9bffda52a7bdca69d20d3a0957664682b
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginRegister from './components/LoginRegister'
import HomePage from './components/HomePage'
<<<<<<< HEAD
import PrivateRoute from './components/PrivateRoute'
import Test from './components/Test'
import {testingBackground} from './components/StyledWidgets'
import PublicJokes from './components/PublicJokes'
import { DataContext } from './contexts/DataContext'
import axios from 'axios'
=======
import MenuBar from './components/MenuBar.js'
import { testingBackground } from './components/StyledWidgets'
import PublicJokes from "./components/PublicJokes";
import Profile from "./components/Profile"; 

>>>>>>> 4a6bbdc9bffda52a7bdca69d20d3a0957664682b


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
<<<<<<< HEAD
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
=======
        <>
        <Router>
          <MenuBar />
            <Route exact path ='/' component={HomePage} />
            <Route path="/user" component={LoginRegister} />
            <Route path='/profile' component={Profile} />
            <Route path='/public-feed' component={PublicJokes} />
          </Router>
        </>
>>>>>>> 4a6bbdc9bffda52a7bdca69d20d3a0957664682b
      </div>
  );
}

export default App;
