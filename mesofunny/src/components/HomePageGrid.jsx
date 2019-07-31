// creates the square boxes that link to a given page using semantic-ui styling 

// imports 
import React from 'react';
import { Icon, Input, Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom'

const HomePageGrid = () => {
    return (
        <div className="home-grid">

            <Menu.Item>
                <Input icon='search' placeholder='Search joke...' />
            </Menu.Item>

            
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
        </div>
    );   
};

export default HomePageGrid; 