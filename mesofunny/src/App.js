import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Jokes from "./components/Jokes";
import JokeList from "./components/JokeList";
import LoginRegister from './components/LoginRegister'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
// import PrivateRoute from './components/PrivateRoute'
import Test from './components/Test'
import {testingBackground} from './components/StyledWidgets'



function App() {
  const [myJoke, setJokeList] = useState([]);
  const [update, setUpdate] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

  return (
      <div style={testingBackground}>
    <>
      <Router>
      <Route path="/" component={NavBar}/>
      <Route exact path="/" component={HomePage} />
      <Route path="/user" component={LoginRegister} />
        
      <Route 
        path="/jokes"
        render={props => <Jokes {...props} 
          myJoke={myJoke}
          setJokeList={setJokeList}
          update={update}
          isUpdating={isUpdating} />
      }
      />

      <Route 
        path="/jokes"
        render={props => <JokeList {...props} 
          myJoke={myJoke}
          setUpdate={setUpdate}
          setIsUpdating={setIsUpdating} />
      }
      />
           {/* <Route 
        path="/jokes"
        render={props => <Jokes {...props} 
          myJoke={myJoke}
          setJokeList={setJokeList}
          update={update}
          isUpdating={isUpdating} />
      }
      /> */}
<<<<<<< HEAD
      {/* <Route path="/test" component={Test} /> */}
=======

      <PrivateRoute path="/test" component={Test} />
>>>>>>> e94f57bce0b89bc3948e8541107cdc989fd7128d
      </Router>
    </>
      </div>
  );
}

export default App;
