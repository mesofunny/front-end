// creates the square boxes that link to a given page using semantic-ui styling 

// imports 
import React from 'react';
import { Grid, Image, Input, Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom'

// image imports 
import book from "./images/joke-book.png"; 
import feed from "./images/public-feed.png"; 
import favorites from "./images/favorites.png"; 
import friends from "./images/friends.png"; 
import profile from "./images/profile.png"; 
// import inbox from "./images/inbox.png"; 

const HomePageGrid = (props) => {
    return (
        <div className="home-grid-container">

            <Menu.Item>
                <Input icon='search' placeholder='Search joke...' onKeyDown={props.search}/>
            </Menu.Item>

            <Grid className="home-grid">

                
                <Grid.Column>
                    <Link to="/jokes"><Image src={book} className="home-grid-img"/></Link>
                </Grid.Column>
             

                <Grid.Column>
                    <Link to="/public-feed"><Image src={feed} className="home-grid-img"/></Link>
                </Grid.Column>

                <Grid.Column>
                    <Link to="/"><Image src={favorites} className="home-grid-img"/></Link>
                </Grid.Column>

                <Grid.Column>
                    <Link to="/"><Image src={friends} className="home-grid-img"/></Link>
                </Grid.Column>

                {/* <Grid.Column className="inbox">
                    <Image src={inbox} />
                </Grid.Column> */}

                <Grid.Column>
                    <Link to="/profile"><Image src={profile} className="home-grid-img"/></Link>
                </Grid.Column>
            </Grid>

        </div>
    );   
};

export default HomePageGrid; 