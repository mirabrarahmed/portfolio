import { Paper } from '@material-ui/core';
import React from 'react';
import profilePhoto from '../images/img.jpg'
import Info from './Info';
import colors from '../config/colors';

function Profile(props) {
    return (
        <div style={{
            minHeight:'80vh', 
            display:'flex', 
            justifyContent:'center', 
            alignItems:'center', 
            // backgroundImage:`url(${backgroungPhoto})`, 
            // backgroundSize:'cover',
            // backgroundPosition:'center',
            position:'relative'
            }}
        >
            <Paper style={{
                    margin:5,
                    borderRadius:'50px', 
                    display:'flex', 
                    justifyContent:'center', 
                    alignItems:'center',
                    backgroundColor: colors.secondary, 
                    }}
            >
                <div style={{flex:1}}>
                    <img src={profilePhoto} alt="Not Available" style={{flex:1}}/>
                </div>
                <Info 
                    name='Mir Abrar Ahmed' 
                    email='abr...@gmail.com' 
                    number='+880 173....' 
                    gitLink='mirabrarahmed' 
                    linkedinLink='Mir Abrar Ahmed' />
            </Paper>
    </div>
    );
}

export default Profile;