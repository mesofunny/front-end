import React from 'react'
import PublicJokeCard from './PublicJokeCard'

const PublicJokesContainer = (props) => {
    return ( 
        <div>
            <div className="public-joke-feed">
                {/* map over public jokes array and render cards */}
                {props.jokes.map((jokeObject) => {

                    // if the id is an even number, add blue card class else add white 
                    return (
                        jokeObject.id % 2 === 0 ? <PublicJokeCard props={jokeObject} color={"blue-public-card"}/> : <PublicJokeCard props={jokeObject} color={"white-public-card"}/>
                    )
                })}
                
           </div>
        </div>
     );
}
 
export default PublicJokesContainer;