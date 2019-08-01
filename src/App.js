import React, { useState } from "react";
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


function App() {

  return (
      <div style={testingBackground}>
        <>
          <Router>
            <Route path="/" component={NavBar}/>
            <Route exact path="/" component={HomePage} />
            <Route path="/user" component={LoginRegister} />
            <Route path="/public" component={PublicJokes} />
            <PrivateRoute path="/jokes" component={Jokes} />
          </Router>
        </>
      </div>
  );
}

export default App;
