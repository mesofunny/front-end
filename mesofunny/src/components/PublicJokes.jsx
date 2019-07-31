import React, { useState, useEffect } from "react";
import axios from "axios"; 
import Footer from "./Footer";

function PublicJokes () {

    const [getPublicJoke, setPublicJoke] = useState("")
    const [getPublicTitle, setPublicTitle] = useState("")

useEffect(() => {
    const getFeed= () => {
        axios 
            .get("https://mesofunny.herokuapp.com/api/v1/jokes")

            .then(response => {
                setPublicTitle(response.data.jokes.title)
                setPublicJoke(response.data.jokes.joke)
            })

            .catch(error => {
            console.log("Where are my jokes?", error)
            });
    }

    getFeed();
    
    },[]);

    return (
        <div className="public-joke-feed">
            <h2>
                {getPublicTitle}
            </h2>
            
            <h2>
            {getPublicJoke}
            </h2>
            <Footer/>
        </div>
    );

}

export default PublicJokes