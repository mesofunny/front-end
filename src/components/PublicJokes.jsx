import React, { useContext } from "react";
import Footer from "./Footer";
import PublicJokesContainer from "./PublicJokesContainer";
import HomePage from "./HomePage";
import { DataContext } from '../contexts/DataContext'


// use public jokes api to get information for PublicJokeCard 
function PublicJokes () {

    const { data, filteredData } = useContext(DataContext)

    return (
        <div className="public-joke-container">
            <HomePage />

            <div className="public-joke-feed">
                <PublicJokesContainer jokes={filteredData.length > 0 
                ? filteredData : data } />
            </div>

            <Footer />
        </div>
    );

}

export default PublicJokes