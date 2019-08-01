import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';
import menubaremoji from '../ImgFiles/menubaremoji.PNG';
import { menuBarEmoji } from './StyledWidgets';



 const MenuBar = () => {
    const token = localStorage.getItem('token')
    
    if (token) {
        return (
            <div >
                <Menu attached='top' >
                    <Dropdown item icon='bars' simple>
                        <Dropdown.Menu>
                            <div>
                            <Link to='/' >
                                <Dropdown.Item>Home</Dropdown.Item>
                            </Link>
                            </div>
                            <div>
                            <Link to='/contact' >
                                <Dropdown.Item>Contact Us</Dropdown.Item>
                            </Link>
                            </div>
                            <div>
                            <Link to ='/profile'>
                                <Dropdown.Item>Profile</Dropdown.Item>
                            </Link>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Menu position='left' >
                            <img src={menubaremoji} alt='menuBarEmoji' style={menuBarEmoji}/>
                            <h1  >MeSoFunny</h1>
                    </Menu.Menu>
                    <Menu.Menu position='right' >
                        <h3 >Contact Us</h3>
                        <h3>Settings</h3>
                        <h3>Sign Out</h3>

                    </Menu.Menu>


                </Menu>
            </div>
        )
    } else {

        return (
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
                            <Link to ='/public-feed'>
                                <Dropdown.Item>Public Feed</Dropdown.Item>
                            </Link>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Menu position='left' >
                            <img src={menubaremoji} alt='menuBarEmoji' style={menuBarEmoji}/>
                            <h1  >MeSoFunny</h1>
                    </Menu.Menu>
                    <Menu.Menu position='right' >
                            <h3 >Contact Us</h3>
                            <h3>Settings</h3>
                            <h3>Sign Out</h3>
                    </Menu.Menu>


                </Menu>
            </div>
        )
    }
}
export default MenuBar;