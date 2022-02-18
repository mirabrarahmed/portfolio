import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import colors from '../config/colors';

function Navbar(props) {
    return (
        <>
            <nav className='navbar' style={{
                                        minHeight:'10vh', 
                                        backgroundColor: colors.primary, 
                                        display:'flex', 
                                        justifyContent: 'space-evenly', 
                                        alignItems: 'center',
                                        color: colors.secondary}}>

                <NavLink to="/portfolio/home">
                    <h1>Profile</h1>
                </NavLink>
                <NavLink to="/portfolio/aboutme">
                    <h1>About Me</h1>
                </NavLink>
                <NavLink to="/portfolio/projects">
                    <h1>Projects</h1>
                </NavLink>
                <NavLink to="/portfolio/research">
                    <h1>Research</h1>
                </NavLink>
            </nav>
        </>
    );
}

export default Navbar;