import React, { useState, useEffect } from "react";
import axios from "axios"; 
import Footer from "./Footer";

function PublicJokes () {

    const [getPublicJoke, setPublicJoke] = useState("")

useEffect(() => {
    const getFeed = () => {
        axios 
            .get("https://mesofunny.herokuapp.com/api/v1/jokes")

            .then(response => {
                setPublicJoke(response.data.jokes.joke)
            })
            
            .catch(error => {
            console.log("Where are my jokes?", error)
            })
    }
    PublicJokes(), []
)
}
}

export default PublicJokes()