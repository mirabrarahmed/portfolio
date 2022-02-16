import React from 'react';
import { Link } from 'react-router-dom';
import colors from '../config/colors';

function Navbar(props) {
    return (
            <nav className='navbar' style={{
                                        minHeight:'10vh', 
                                        backgroundColor: colors.primary, 
                                        display:'flex', 
                                        justifyContent: 'space-evenly', 
                                        alignItems: 'center',
                                        color: colors.secondary}}>
                <Link to="portfolio/home">
                    <h1>Home</h1>
                </Link>                            
                <Link to="portfolio/aboutme">
                    <h1>About Me</h1>
                </Link>
                <Link to="portfolio/projects">
                    <h1>Projects</h1>
                </Link>
                <Link to="portfolio/research">
                    <h1>Research</h1>
                </Link>
            </nav>
    );
}

export default Navbar;