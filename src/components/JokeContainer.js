import React, {useState} from 'react';
import Jokes from "./components/Jokes.js";
import JokeList from "./components/JokeList.js";
import styled from "styled-components";

const FlipDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

const JokeContainer = () =>  {
    const [myJoke, setJokeList] = useState([]);
    const [update, setUpdate] = useState({});
    const [isUpdating, setIsUpdating] = useState(false);

    return(
        <FlipDiv>
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
      </FlipDiv>
      )
    }
    export default JokeContainer;