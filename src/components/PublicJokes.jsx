import React, { useContext } from "react";
import Footer from "./Footer";
import PublicJokesContainer from "./PublicJokesContainer";
import HomePage from "./HomePage";
import { DataContext } from '../contexts/DataContext';
import {JokeListHeading} from './StyledWidgets';


// use public jokes api to get information for PublicJokeCard 
function PublicJokes () {

    const { data, filteredData } = useContext(DataContext)

    return (
        <div className="public-joke-container">
            <HomePage />

            <div className="public-joke-feed">
                <h2 style={JokeListHeading}>Public Feed</h2>
                <PublicJokesContainer jokes={filteredData.length > 0 
                ? filteredData : data } />
            </div>

            <Footer />
        </div>
    );

}

export default PublicJokes