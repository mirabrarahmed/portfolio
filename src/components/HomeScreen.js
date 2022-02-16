import React from 'react';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Fade } from '@material-ui/core';
import Profile from './Profile';

function HomeScreen(props) {
    const [isChecked, setIsChecked] = useState(true)

    // useEffect(() => {
    //   const timeout = setInterval(() => {
    //     // if(isChecked === true){
    //     //   setIsChecked(false)
    //     // }
    //   }, 5000)
    // }, [])
    return (
            <div className='home-screen'>
                <Navbar/>
                <Profile />
                <Footer/>   
            </div>
    );
}

export default HomeScreen;