// creates the square boxes that link to a given page using semantic-ui styling 

// imports 
import React from 'react';
import { Grid } from "semantic-ui-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const HomePageGrid = () => {
    return (
        <div className="home-grid">
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        <FontAwesomeIcon icon={faCoffee} className="home-icons"/>
                    </Grid.Column>
                    <Grid.Column>
                        <FontAwesomeIcon icon={faCoffee} className="home-icons"/>
                    </Grid.Column>
                    <Grid.Column>
                        <FontAwesomeIcon icon={faCoffee} className="home-icons"/>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <FontAwesomeIcon icon={faCoffee} className="home-icons"/>
                    </Grid.Column>
                    <Grid.Column>
                        <FontAwesomeIcon icon={faCoffee} className="home-icons"/>
                    </Grid.Column>
                    <Grid.Column>
                        <FontAwesomeIcon icon={faCoffee} className="home-icons"/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );   
};

export default HomePageGrid; 