import classes from './NavbarHeader.module.css';
import React from 'react'
import {NavLink} from 'react-router-dom';

const NavbarHeader = () => {
    return (
        <div className={classes.topnav}>
            <NavLink exact activeClassName={classes.active} className={classes['topnav-link']} to="/">Home</NavLink>
            <NavLink activeClassName={classes.active} className={classes['topnav-link']} to="/welcome">Welcome</NavLink>
            <NavLink activeClassName={classes.active} className={classes['topnav-link']} to="/items">Items</NavLink>
            <NavLink activeClassName={classes.active} className={classes['topnav-link']} to="/about">About</NavLink>
        </div>
    )
}

export default NavbarHeader