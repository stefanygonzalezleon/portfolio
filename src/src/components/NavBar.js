import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
        <ul className="">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <div className="background"></div>
        </ul>
    </div>
  );
}

export default NavBar;
