import React, { useState } from "react";


import "./App.css";
import Jokes from "./components/Jokes.js";
import JokeList from "./components/JokeList.js";
import Profile from './components/Profile'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginRegister from './components/LoginRegister'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Test from './components/Test'

function App() {
  const [myJoke, setJokeList] = useState([]);
  const [update, setUpdate] = useState({});
  const [isUpdating, setIsUpdating] = useState(false); 

  return (

    <div>
      <h2>MeSoFunny</h2>
      <Jokes
        myJoke={myJoke}
        setJokeList={setJokeList}
        update={update}
        isUpdating={isUpdating}
      />
      <JokeList 
        myJoke={myJoke}
        setUpdate={setUpdate}
        setIsUpdating={setIsUpdating}
      />
      <Profile />
      <Router>
      <Route path="/" component={NavBar}/>
      <Route exact path="/" component={HomePage} />
      <Route path="/user" component={LoginRegister} />
        
        {/* <PrivateRoute 
          path="/jokes"
          render={props => <Jokes {...props} 
            myJoke={myJoke}
            setJokeList={setJokeList}
            update={update}
            isUpdating={isUpdating} />
        }
        /> */}
        
        {/* <PrivateRoute 
          path="/jokes"
          render={props => <JokeList {...props} 
            myJoke={myJoke}
            setUpdate={setUpdate}
            setIsUpdating={setIsUpdating} />
        }
        /> */}

        <Route path="/test" component={Test} />
        </Router>


    </div>
  )

}

export default App;
