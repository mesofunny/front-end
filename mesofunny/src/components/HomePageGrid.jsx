// creates the square boxes that link to a given page using semantic-ui styling 

// imports 
import React from 'react';
import { Icon, Input, Menu } from "semantic-ui-react";

const HomePageGrid = () => {
    return (
        <div className="home-grid">

            <Menu.Item>
                <Input icon='search' placeholder='Search joke...' />
            </Menu.Item>

            
            <Menu icon='labeled' horizontal>
                <Menu.Item name='gamepad'>
                    <Icon name='book' />
                    JokeBook
                </Menu.Item>

                <Menu.Item name='video camera'>
                    <Icon name='write square' />
                    My Jokes 
                </Menu.Item>

                <Menu.Item name='video play'>
                    <Icon name='video play' />
                    Videos
                </Menu.Item>
            </Menu>

            <Menu icon='labeled' horizontal>
                <Menu.Item name='gamepad'>
                    <Icon name='gamepad' />
                    Games
                </Menu.Item>

                <Menu.Item name='video camera'>
                    <Icon name='video camera' />
                    Channels
                </Menu.Item>

                <Menu.Item name='video play'>
                    <Icon name='video play' />
                    Videos
                </Menu.Item>
            </Menu>
        </div>
    );   
};

export default HomePageGrid; 