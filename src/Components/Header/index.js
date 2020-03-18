import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return (
    <header className="header">
      <nav className="header__menu">
        <a href="#">Home</a>
        <a href="#">About Me</a>
        <a href="#">Contact Us</a>
      </nav>
      <div>
        Social Media Links
        </div>
    </header>
  )

}

export default Header