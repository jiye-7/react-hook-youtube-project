import React from 'react';
import './navbar.css';

const Navbar = (props) => (
  <nav>
    <img src="youtubeLogo.png" alt="Youtube-logo" />
    <h1>Youtube</h1>
    <div>
      <input className="search-input" type="text" placeholder="Search... :)" />
      <button className="search-icon">
        <i className="fas fa-search"></i>
      </button>
    </div>
  </nav>
);

export default Navbar;
