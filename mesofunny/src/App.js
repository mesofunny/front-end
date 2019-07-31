import React, { useState } from "react";
import { Route } from 'react-router-dom';
import  MenuBar from './components/MenuBar.js'
import Profile from './components/Profile'
import PublicFeed from './components/PublicFeed'
import Favorites from './components/Favorites'
import Friends from './components/Friends'
import Inbox from './components/Inbox'
import NewJokes from './components/NewJokes'

import "./App.css";
import Jokes from "./components/Jokes.js";
import JokeList from "./components/JokeList.js";
import LoginRegister from './components/LoginRegister';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Test from './components/Test';

function App() {
  const [myJoke, setJokeList] = useState([]);
  const [update, setUpdate] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

  return (

    <div>
      <MenuBar />
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
      <Route exact path ='/' component={HomePage} />
      <Route exact path="/" component={HomePage} /> }
      <Route path="/" component={NavBar}/>
      <Route path="/user" component={LoginRegister} />
      <Route  path='/profile' component={Profile} />
      <Route  path='/public-feed' component={PublicFeed} />
      <Route  path='/favorites' component={Favorites} />
      <Route  path='/friends' component={Friends} />
      <Route  path='/inbox' component={Inbox} />
      <Route  path='/new-jokes' component={NewJokes} />

        
        {/* {<PrivateRoute 
          path="/jokes"
          render={props => <Jokes {...props} 
            myJoke={myJoke}
            setJokeList={setJokeList}
            update={update}
            isUpdating={isUpdating} />
        }
        /> }
        
        <PrivateRoute 
          path="/jokes"
          render={props => <JokeList {...props} 
            myJoke={myJoke}
            setUpdate={setUpdate}
            setIsUpdating={setIsUpdating} />
        } */}
        

        <Route path="/test" component={Test} />



  

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
     </div>
  ) 
}

export default App;
