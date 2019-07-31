import React  from "react";
import { Route } from 'react-router-dom';
import "./App.css";
import MenuBar from './components/MenuBar.js'
import Profile from './components/Profile'
import PublicFeed from './components/PublicFeed'
import Favorites from './components/Favorites'
import Friends from './components/Friends'
import Inbox from './components/Inbox'
import NewJokes from './components/NewJokes'

import JokeContainer from './components/JokeContainer'

import LoginRegister from './components/LoginRegister';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

function App() {

  return (

    <div>
      <MenuBar />
      <JokeContainer />

      <Route exact path ='/' component={HomePage} />
      <Route exact path="/" component={NavBar}/>
      <Route path="/user" component={LoginRegister} />
      <Route  path='/profile' component={Profile} />
      <Route  path='/public-feed' component={PublicFeed} />
      <Route  path='/favorites' component={Favorites} />
      <Route  path='/friends' component={Friends} />
      <Route  path='/inbox' component={Inbox} />
      <Route  path='/new-jokes' component={NewJokes} />


        {/* <Route path="/test" component={Test} /> */}
     </div>
  ) 
}

export default App;
