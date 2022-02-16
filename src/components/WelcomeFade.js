import React from 'react';
import {Paper, Fade} from '@material-ui/core'
import backgroungPhoto from '../images/img2.jpg'
import colors from '../config/colors';


function WelcomeFade({isChecked}) {
    return (
        <div className="fade-in-out">
        <Fade 
            in={isChecked} 
            style={{ transitionDelay:'100ms'}}
        >
          <Paper
            elevation={5}
            style={{ 
                height:'100vh', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexDirection: 'column',
                backgroundImage: `url(${backgroungPhoto})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover' }} >
            <h1 style={{
                    fontSize: '10vw', 
                    textShadow: '10px -4px 5px #1c829e', 
                    textTransform:'uppercase'}}>Welcome</h1>
            <h2 style={{
                    fontSize: '4vw', 
                    textTransform:'uppercase',
                    color:colors.secondary}}>To My Journey Of Life</h2>
          </Paper>
        </Fade>
        </div>
    );
}

export default WelcomeFade;