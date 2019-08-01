import React, { useState, useEffect, useContext } from "react";
import axios from "axios"; 
import Footer from "./Footer";
import PublicJokeCard from "./PublicJokeCard";
import HomePage from "./HomePage";
import { DataContext } from '../contexts/DataContext'

function PublicJokes () {

    const [publicJokesArray, setArray] = useState("")
    const { data, filteredData } = useContext(DataContext)

    // useEffect(() => {
    //     const getFeed= () => {
    //         axios 
    //             .get("https://mesofunny.herokuapp.com/api/v1/jokes")

    //             .then(response => {
    //                 console.log(response.data.jokes)
    //                 setArray(response.data.jokes)
    //             })

    //             .catch(error => {
    //             console.log("Where are my jokes?", error)
    //             });
    //     }

    //     getFeed();
    
    // },[]);

    console.log(publicJokesArray)

    return (
        <div className="public-joke-feed">
            <HomePage />
            {data.map((jokeObject) => {
               return (
                   jokeObject.id % 2 === 0 ? <PublicJokeCard props={jokeObject} color={"blue-public-card"}/> : <PublicJokeCard props={jokeObject} color={"blue-public-white"}/>
                   )
            })}
            {/* <PublicJokesContainer filteredJokes={filteredData.length > 0 
                ? filteredData : data }
                /> */}
            <Footer />
        </div>
    );

}

export default PublicJokes