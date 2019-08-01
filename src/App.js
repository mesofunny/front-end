import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginRegister from './components/LoginRegister'
import HomePage from './components/HomePage'
import MenuBar from './components/MenuBar.js'
import { testingBackground } from './components/StyledWidgets'
import PublicJokes from "./components/PublicJokes";
import Profile from "./components/Profile"; 
import Jokes from "./components/Jokes"



function App() {

  return (
      <div style={testingBackground}>
        <>
        <Router>
          <MenuBar />
            <Route exact path ='/' component={HomePage} />
            <Route path="/user" component={LoginRegister} />
            <Route path='/profile' component={Profile} />
            <Route path='/public-feed' component={PublicJokes} />
            <Route path='/jokes' component={Jokes}/>
          </Router>
        </>
      </div>
  );
}

export default App;
