import React, {useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginRegister from './components/Login/LoginRegister'
import HomePage from './components/HomePage/HomePage'
import MenuBar from './components/NavFooter/MenuBar'
import { testingBackground } from './styles/StyledWidgets'
import PublicJokes from "./components/PublicJokes/PublicJokes";
import Profile from "./components/HomePage/Profile"; 
import Jokes from "./components/PrivateJokes/Jokes";
import { DataContext } from './contexts/DataContext'
import axios from 'axios'


function App(props) {
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
        <DataContext.Provider value={{searchJokesHandler, data, filteredData}}>
        <Router>
            <Route path="/" component={MenuBar} />
            <Route exact path ='/' component={HomePage} />
            <Route path="/user" component={LoginRegister} />
            <Route path='/profile' component={Profile} />
            <Route path='/public-feed' component={PublicJokes} />
            <Route path="/jokes" component={Jokes} />
          </Router>
          </DataContext.Provider>
        </>
      </div>
  );
}

export default App;
