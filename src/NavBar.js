import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <br></br>
            <NavLink to="/favorites">Favorite Memes</NavLink>
            <br></br>
            <NavLink to='/login'>Log In</NavLink>
            <br></br>
            <NavLink to='/signup'>Sign Up</NavLink>
        </div>
    )
}

export default NavBar;