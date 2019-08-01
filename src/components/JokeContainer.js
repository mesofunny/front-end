import React, {useState} from 'react';
// import Test from './components/Test';
// import { jokeContainer } from "./components/StyledWidgets";
import Jokes from "./components/Jokes.js";
import JokeList from "./components/JokeList.js";

const JokeContainer = () =>  {
    const [myJoke, setJokeList] = useState([]);
    const [update, setUpdate] = useState({});
    const [isUpdating, setIsUpdating] = useState(false);

    return(
        <div>
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
        }/>  */}

      </div>
      )
    }
    export default JokeContainer;