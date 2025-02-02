import React from 'react';
import './Navbar.css';  // Import the updated CSS

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Task Manager</h1>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
