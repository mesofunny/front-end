// creates the square boxes that link to a given page using semantic-ui styling 

// imports 
import React from 'react';
<<<<<<< HEAD
import { Grid, Image, Input, Menu } from "semantic-ui-react";

import book from "./images/joke-book.png"; 
import feed from "./images/public-feed.png"; 
import favorites from "./images/favorites.png"; 
import friends from "./images/friends.png"; 
import profile from "./images/profile.png"; 
// import inbox from "./images/inbox.png"; 
=======
import { Icon, Input, Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom'
>>>>>>> beeaa9fc5d96de3480faff387d5c841310388042

const HomePageGrid = () => {
    return (
        <div className="home-grid-container">

            <Menu.Item>
                <Input icon='search' placeholder='Search joke...' />
            </Menu.Item>

<<<<<<< HEAD
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

=======
            
            <Menu icon='labeled' horizontal>
                <Menu.Item name='joke-book'>
                    <Icon name='book' />
                    JokeBook
                </Menu.Item>

                <Menu.Item name='public feed'>
                    <Icon name='id card' />
                    Public Feed 
                </Menu.Item>
{/* 
               <Menu.Item name='favorites'>
                  <Icon name='star' />
                    Favorites
                <Link to="/jokes">
                <Menu.Item name='video camera'>
                    <Icon name='write square' />
                    My Jokes 
                </Menu.Item>
                </Link>
                
                <Menu.Item name='video play'>
                    <Icon name='video play' />
                    Videos
                  
                </Menu.Item>
*/}
            </Menu>

            <Menu icon='labeled' horizontal>
                <Menu.Item name='friends'>
                    <Icon name='users' />
                    Friends 
                </Menu.Item>

                <Menu.Item name='inbox'>
                    <Icon name='inbox' />
                    Inbox
                </Menu.Item>

                <Menu.Item name='user-outline'>
                    <Icon name='user outline' />
                    Profile
                </Menu.Item>
            </Menu>
>>>>>>> beeaa9fc5d96de3480faff387d5c841310388042
        </div>
    );   
};

export default HomePageGrid; 