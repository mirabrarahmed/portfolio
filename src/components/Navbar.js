import React from 'react';
import { Link, Outlet } from 'react-router-dom';
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
                <Link to="home">
                    <h1>Home</h1>
                </Link>                            
                <Link to="aboutme">
                    <h1>About Me</h1>
                </Link>
                <Link to="projects">
                    <h1>Projects</h1>
                </Link>
                <Link to="research">
                    <h1>Research</h1>
                </Link>
            </nav>
            <Outlet/>
        </>
    );
}

export default Navbar;