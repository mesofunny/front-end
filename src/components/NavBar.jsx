import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    const token = localStorage.getItem('token')
    if (token) {

    return ( 
        <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/profile">Profile</Link>
        </div>
     );
} else {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/user">Join Up</Link>
            <Link to="/contact">Contact Us</Link>
        </div>
    )
}
} 
 
export default NavBar;