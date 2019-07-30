import React, { useState } from "react";


import "./App.css";
import Jokes from "./components/Jokes.js";
import JokeList from "./components/JokeList.js";
import Profile from './components/Profile'


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

    </div>

  );
}

export default App;
