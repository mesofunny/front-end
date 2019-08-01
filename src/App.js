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
import MenuBar from './components/MenuBar.js'
import Profile from './components/Profile'
import PublicFeed from './components/PublicFeed'
import Favorites from './components/Favorites'
import Friends from './components/Friends'
import Inbox from './components/Inbox'
import NewJokes from './components/NewJokes'



function App() {

  return (
      <div >
    <>
    <Router>

    <MenuBar />

      <Route exact path ='/' component={HomePage} />
      <Route path="/" component={NavBar}/>
      <Route path="/user" component={LoginRegister} />
      <Route  path='/profile' component={Profile} />
      <Route  path='/public-feed' component={PublicFeed} />
      <Route  path='/favorites' component={Favorites} />
      <Route  path='/friends' component={Friends} />
      <Route  path='/inbox' component={Inbox} />
      <Route  path='/new-jokes' component={NewJokes} />



      
      <PrivateRoute path="/test" component={Test} />
      </Router>
    </>
      </div>
  );
}

export default App;
