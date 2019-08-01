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
                <img src={menuBarEmoji} alt='menuBarEmoji' style={menuBarEmoji}/>
                <h1>MeSoFunny</h1>
            </Menu.Menu>
            <Menu.Menu position='right'>
                <div className='ui right aligned category search item'>
                <div className='ui transparent icon input'>
                    <input className='prompt' type='text' placeholder='Search animals...' />
                    <i className='search link icon' />
                </div>
                <div className='results' />
                </div>
            </Menu.Menu>
        </Menu>
          </div>
        )
}
export default MenuBar;