// creates the square boxes that link to a given page using semantic-ui styling 

// imports 
import React from 'react';
import { Grid, Image, Input, Menu } from "semantic-ui-react";

import book from "./images/joke-book.png"; 
import feed from "./images/public-feed.png"; 
import favorites from "./images/favorites.png"; 
import friends from "./images/friends.png"; 
import profile from "./images/profile.png"; 
// import inbox from "./images/inbox.png"; 

const HomePageGrid = () => {
    return (
        <div className="home-grid-container">

            <Menu.Item>
                <Input icon='search' placeholder='Search joke...' />
            </Menu.Item>

            <Grid className="home-grid">
                <Grid.Column>
                    <Image src={book} className="home-grid-img"/>
                </Grid.Column>

                <Grid.Column>
                    <Image src={feed} className="home-grid-img"/>
                </Grid.Column>

                <Grid.Column>
                    <Image src={favorites} className="home-grid-img"/>
                </Grid.Column>

                <Grid.Column>
                    <Image src={friends} className="home-grid-img"/>   
                </Grid.Column>

                {/* <Grid.Column className="inbox">
                    <Image src={inbox} />
                </Grid.Column> */}

                <Grid.Column>
                    <Image src={profile} className="home-grid-img"/>
                </Grid.Column>
            </Grid>

        </div>
    );   
};

export default HomePageGrid; 