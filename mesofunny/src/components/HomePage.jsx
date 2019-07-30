// Code for home page and joke of the day 

// imports 
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios"; 
import HomePageGrid from "./HomePageGrid";
import '../homepage.css';



const HomePage = () => {

    // store joke of the day using hooks 
    const [joke, setJoke] = useState("")
    
    // use api to get joke of the day 
    useEffect(() => {
    
        const getJoke = () => {
            axios
            .get("https://mesofunny.herokuapp.com/api/v1/jokesOfTheDay")

            .then(response => {
                // successful 
                console.log(response); 

                setJoke(response.data.joke.joke);
            })

            .catch(error => {
                // unsuccessful
                console.error("The API is currently down.", error);
            });
        }
      
        getJoke();

    }, []);
    
    return (
      <div className="home-container">
            <div className="daily-joke-container">
                <h1 className="daily-joke">{joke}</h1>
            </div>

            <HomePageGrid />
      </div>
    );
  }

  
export default HomePage;