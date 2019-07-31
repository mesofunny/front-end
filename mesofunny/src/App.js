import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Jokes from "./components/Jokes";
import JokeList from "./components/JokeList";
import LoginRegister from './components/LoginRegister'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import PrivateRoute from './components/PrivateRoute'
import Test from './components/Test'

function App() {
  const [myJoke, setJokeList] = useState([]);
  const [update, setUpdate] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

  return (
    <>
      <Router>
      <Route path="/" component={NavBar}/>
      <Route exact path="/" component={HomePage} />
      <Route path="/user" component={LoginRegister} />
      
      {/* <privateRoute 
        path="/jokes"
        render={props => <Jokes {...props} 
          myJoke={myJoke}
          setJokeList={setJokeList}
          update={update}
          isUpdating={isUpdating} />
      }
      />
      
      <PrivateRoute 
        path="/jokes"
        render={props => <JokeList {...props} 
          myJoke={myJoke}
          setUpdate={setUpdate}
          setIsUpdating={setIsUpdating} />
      }
      /> */}

      <PrivateRoute path="/test" component={Test} />
      </Router>
    </>
  );
}

export default App;
