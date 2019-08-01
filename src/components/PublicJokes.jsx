import React, { useState, useEffect } from "react";
import axios from "axios"; 
import Footer from "./Footer";
import PublicJokeCard from "./PublicJokeCard";
import HomePage from "./HomePage";

// use public jokes api to get information for PublicJokeCard 
function PublicJokes () {

    // stores an array of joke objects 
    const [publicJokesArray, setArray] = useState("")

    useEffect(() => {
        const getFeed= () => {
            axios 
                .get("https://mesofunny.herokuapp.com/api/v1/jokes")

                .then(response => {
                    // successful

                    // console.log("jokes array", response.data.jokes)
                    setArray(response.data.jokes)
                })

                .catch(error => {
                    // unsuccessful 
                    console.log("Where are my jokes?", error)
                });
        }

        getFeed();
    
    },[]);

    return (
        <div className="public-joke-container">
            <HomePage />

            <div className="public-joke-feed">
                {/* map over public jokes array and render cards */}
                {Array.from(publicJokesArray).map((jokeObject) => {

                    // if the id is an even number, add blue card class else add white 
                    return (
                        jokeObject.id % 2 === 0 ? <PublicJokeCard props={jokeObject} color={"blue-public-card"}/> : <PublicJokeCard props={jokeObject} color={"white-public-card"}/>
                    )
                })}
           </div>

            <Footer />
        </div>
    );

}

export default PublicJokes