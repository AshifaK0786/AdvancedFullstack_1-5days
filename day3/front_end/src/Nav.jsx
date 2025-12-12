import React from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav>
        <ol>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/addUser'>Add Users</Link></li>
            <li><Link to='/getUsers'>Get Users</Link></li>
            <li><Link to='/aboutUs'>About Us</Link></li>
            <li><Link to='/contactUs'>Contact Us</Link></li>
        </ol>
    </nav>
  )
}

export default Nav;
