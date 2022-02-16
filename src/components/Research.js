import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import {Paper} from '@material-ui/core'
import colors from '../config/colors';

function Research(props) {
    return (
        <div>
            {/* <Navbar/> */}
                <div 
                    className="research" 
                    style={{
                        minHeight:'80vh',
                        display: 'flex' 
                        // backgroundImage:`url(${aboutMeBackground})`, 
                        // backgroundPosition:'center', 
                        // backgroundSize:'cover',
                        // backgroundBlendMode: 'lighten',
                        // backgroundColor: 'rgba(255,255,255,.05)',
                        // backgroundRepeat: 'no-repeat'
                        }}
                >
                    <div style={{flex:1}} className='academic-projects'>
                        <Paper elevation={5} 
                                style={{    
                                    margin:10, 
                                    padding:20, 
                                    backgroundColor: colors.secondary, 
                                    opacity:'.9',
                                    borderRadius: '20px',
                                    textAlign: 'left',
                                    }}>
                            <h2>Undergraduate Research Work </h2>
                            <p><span style={{fontWeight:'bold', margin:0}}>Thesis title:</span> <span style={{fontStyle:'italic'}}>“A Deep Learning Process for the Generation of Public and Private Keys using Hybrid Architecture in Blockchain”</span></p>
                            <p>Facial recognition-based generation of Public and Private keys in Blockchain wallet to ensure increased security.</p>
                            <ul>
                                <li>Recognition and extraction of facial features done using MTCNN Neural Network</li>
                                <li>Generation of Prime numbers done using pixel value and color grading</li>
                                <li>Implemented a hybrid architecture for encryption using RSA and ECDSA algorithm</li>
                            </ul>
                        </Paper>
                        
                    </div>
                </div>
                {/* <Footer/> */}
        </div>
    );
}

export default Research;