import { Paper } from '@material-ui/core';
import React from 'react';
import colors from '../config/colors';

function Info({name, email, number, gitLink, linkedinLink}) {
    return (
        <div className='info' style={{
                                flex:1, 
                                fontWeight:'600',
                                display:'flex',
                                justifyContent: 'center',
                                alignItems: 'center'}}>
            <Paper elevation={5} 
                   style={{
                        margin:5,
                        opacity:'.9', 
                        borderRadius:'50px', 
                        display:'flex', 
                        flexDirection:'column',
                        width:'100%',
                        backgroundColor: colors.secondary 
                        }}
            >
                    <h2>Name:</h2><span>{name}</span><br/>
                    <h2>E-mail:</h2><span>{email}</span><br/>
                    <h2>Cell-Phone:</h2><span>{number}</span><br/>
                    <h2>GitHub Profile:</h2><span><a href='https://github.com/mirabrarahmed' target='_blank' rel="noreferrer">{gitLink}</a></span><br/>
                    <h2>LinkedIn Profile:</h2><span><a href='https://www.linkedin.com/in/mir-abrar-ahmed-991a4aa6' target='_blank' rel="noreferrer">{linkedinLink}</a></span><br/>
            </Paper>
        </div>
    );
}

export default Info;