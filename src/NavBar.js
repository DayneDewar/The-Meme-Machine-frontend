import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <br></br>
            <NavLink to="/favorites">Favorite Memes</NavLink>
        </div>
    )
}

export default NavBar;