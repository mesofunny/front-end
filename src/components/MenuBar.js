import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';
import menubaremoji from '../ImgFiles/menubaremoji.PNG';
import { menuBarEmoji } from './StyledWidgets';

 const MenuBar = () => {
    return(
        <div>
        <Menu attached='top'>
            <Dropdown item icon='bars' simple>
                    <Dropdown.Menu>
                        <div>
                        <Link to='/' >
                            <Dropdown.Item>Home</Dropdown.Item>
                        </Link>
                        </div>
                        <div>
                        <Link to='/profile' >
                            <Dropdown.Item>Profile</Dropdown.Item>
                        </Link>
                        </div>
                        <div>
                        <Link to ='/public-feed'>
                            <Dropdown.Item>Public Feed</Dropdown.Item>
                        </Link>
                        </div>
                        <Link to ='favorites'>
                            <Dropdown.Item>Favorites</Dropdown.Item>
                        </Link>
                        <Link to ='friends'>
                            <Dropdown.Item>Friends</Dropdown.Item>
                        <Dropdown.Item />
                        </Link>
                        <Link to ='inbox'>
                            <Dropdown.Item>Inbox</Dropdown.Item>
                        </Link>
                        <Link to ='new-jokes'>
                            <Dropdown.Item>New Jokes</Dropdown.Item>
                        </Link>
                    </Dropdown.Menu>
            </Dropdown>
            <Menu.Menu position='left'>
                <img src={menubaremoji} alt='menuBarEmoji' style={menuBarEmoji}/>
                <h1>MeSoFunny</h1>
            </Menu.Menu>
        </Menu>
          </div>
        )
}
export default MenuBar;