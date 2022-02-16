import React from 'react';
import {Paper} from '@material-ui/core'
import colors from '../config/colors';

function Projects(props) {
    return (
        <div className='projects-screen' style={{minHeight: '80vh'}}>
                <div 
                    className="projects" 
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
                            <h2>Simulation of LFR</h2>
                            <p>A simulation of Line Following Robot which detects various objects in its path</p>
                            <ul>
                                <li>Implemented simulation of LFR using Webots software </li>
                                <li>Detected different objects using the Camera module and controlled the robot using Robot module from Python</li>
                            </ul>
                        </Paper>
                        <Paper elevation={5} 
                                style={{    
                                    margin:10, 
                                    padding:20, 
                                    backgroundColor: colors.secondary, 
                                    opacity:'.9',
                                    borderRadius: '20px',
                                    textAlign: 'left',
                                    }}>
                            <h2>Simulation of Gas and Flame Detector</h2>
                            <p>Gas and Flame detectors simulated using gas and flame sensors</p>
                            <ul>
                                <li>Simulated Arduino microprocessor for controlling gas and flame sensors using Proteus</li>
                                <li>Built an easily usable interface to monitor the sensors using LabView</li>
                            </ul>
                        </Paper>
                        <Paper elevation={5} 
                                style={{    
                                    margin:10, 
                                    padding:20, 
                                    backgroundColor: colors.secondary, 
                                    opacity:'.9',
                                    borderRadius: '20px',
                                    textAlign: 'left',
                                    }}>
                            <h2>Ride Sharing Web App</h2>
                            <p>A simulation of Line Followint Robot which detects various objects in its path</p>
                            <ul>
                                <li>Built database server to keep track of rider info, user info and fare info using MySQL and PHP</li>
                                <li>Implemented easy navigation with responsive design using HTML, CSS and JavaScript</li>
                            </ul>
                        </Paper>
                    </div>
                    <div style={{flex:1}} className='personal-projects'>
                        <Paper elevation={5} 
                                style={{    
                                    margin:10, 
                                    padding:20, 
                                    backgroundColor: colors.secondary, 
                                    opacity:'.9',
                                    borderRadius: '20px',
                                    textAlign: 'left',
                                    }}>
                            <h2>Minimax-Tic-Tac-Toe</h2>
                            <p>A simple tic-tac-toe game implemented with minimax algorithm to make the AI of the game harder to beat</p>
                            <ul>
                                <li>Implemented the minimax algorithm using JavaScript </li>
                                <li>Styled and designed the page using HTML and CSS  </li>
                            </ul>
                        </Paper>
                    </div>
                </div>
        </div>
    );
}

export default Projects;