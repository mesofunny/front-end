import React, { useState, useEffect, useContext } from "react";
import axios from "axios"; 
import Footer from "./Footer";
import PublicJokeCard from "./PublicJokeCard";
import HomePage from "./HomePage";
import { DataContext } from '../contexts/DataContext'

// use public jokes api to get information for PublicJokeCard 
function PublicJokes () {

    // stores an array of joke objects 
    const [publicJokesArray, setArray] = useState("")
    const { data, filteredData } = useContext(DataContext)

    // useEffect(() => {
    //     const getFeed= () => {
    //         axios 
    //             .get("https://mesofunny.herokuapp.com/api/v1/jokes")

<<<<<<< HEAD
    //             .then(response => {
    //                 console.log(response.data.jokes)
    //                 setArray(response.data.jokes)
    //             })

    //             .catch(error => {
    //             console.log("Where are my jokes?", error)
    //             });
    //     }
=======
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
>>>>>>> 4a6bbdc9bffda52a7bdca69d20d3a0957664682b

    //     getFeed();
    
    // },[]);

    return (
        <div className="public-joke-container">
            <HomePage />
<<<<<<< HEAD
            {data.map((jokeObject) => {
               return (
                   jokeObject.id % 2 === 0 ? <PublicJokeCard props={jokeObject} color={"blue-public-card"}/> : <PublicJokeCard props={jokeObject} color={"blue-public-white"}/>
                   )
            })}
            {/* <PublicJokesContainer filteredJokes={filteredData.length > 0 
                ? filteredData : data }
                /> */}
=======

            <div className="public-joke-feed">
                {/* map over public jokes array and render cards */}
                {Array.from(publicJokesArray).map((jokeObject) => {

                    // if the id is an even number, add blue card class else add white 
                    return (
                        jokeObject.id % 2 === 0 ? <PublicJokeCard props={jokeObject} color={"blue-public-card"}/> : <PublicJokeCard props={jokeObject} color={"white-public-card"}/>
                    )
                })}
           </div>

>>>>>>> 4a6bbdc9bffda52a7bdca69d20d3a0957664682b
            <Footer />
        </div>
    );

}

export default PublicJokes