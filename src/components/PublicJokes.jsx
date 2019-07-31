import React, { useState, useEffect } from "react";
import axios from "axios"; 
import Footer from "./Footer";
import PublicJokeCard from "./PublicJokeCard";

function PublicJokes () {

    const [publicJokesArray, setArray] = useState("")

    useEffect(() => {
        const getFeed= () => {
            axios 
                .get("https://mesofunny.herokuapp.com/api/v1/jokes")

                .then(response => {
                    console.log(response.data.jokes)
                    setArray(response.data.jokes)
                })

                .catch(error => {
                console.log("Where are my jokes?", error)
                });
        }

        getFeed();
    
    },[]);

    console.log(publicJokesArray)

    return (
        <div className="public-joke-feed">
            {Array.from(publicJokesArray).map((jokeObject) => {
               return (
                   jokeObject.id % 2 === 0 ? <PublicJokeCard props={jokeObject} color={"blue-public-card"}/> : <PublicJokeCard props={jokeObject} color={"blue-public-white"}/>
                   )
            })}
            <Footer/>
        </div>
    );

}

export default PublicJokes