import React, { useState } from "react";
import "./navbar.css";

import { Link } from "react-router-dom";



function navbar() {

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">YourTV</h1>
            <ul className="nav-links">
                <Link className="link" to='/'>Home</Link>
                <Link className="link" to='/Apps'>Apps</Link>
                <Link className="link" to='/Search'>Search</Link>
                <Link className="link" to='/Settings'>Settings</Link>
            </ul>



            <button className="button">Options</button>

        </nav>
    );

}

export default navbar;
