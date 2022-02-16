import React from 'react';
import colors from '../config/colors';
// import aboutMeBackground from '../images/img3.png'
import aboutMeBackground from '../images/img4.png'
import { Paper } from '@material-ui/core';

function AboutMe(props) {
    return (
        <div className='about-me-screen'>
                <div 
                    className="table" 
                    style={{
                        minHeight:'80vh', 
                        backgroundImage:`url(${aboutMeBackground})`, 
                        backgroundPosition:'center', 
                        // backgroundSize:'cover',
                        // backgroundBlendMode: 'lighten',
                        // backgroundColor: 'rgba(255,255,255,.05)',
                        backgroundRepeat: 'no-repeat'
                        }}
                >
                    <Paper elevation={5} 
                            style={{    
                                margin:'10px 10px 0px 10px', 
                                padding:20, 
                                backgroundColor: colors.secondary, 
                                opacity:'.9',
                                borderRadius: '20px'
                                }}>
                        <h1>Academic Credentials</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Institution Name</th>
                                    <th>Passing Year</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>BRAC University</td>
                                    <td>2021</td>
                                    <td>3.46/4.00</td>
                                </tr>
                                <tr>
                                    <td>St. Joseph Higher Secondary School</td>
                                    <td>2016</td>
                                    <td>5.00/5.00</td>
                                </tr>
                                <tr>
                                    <td>National Ideal School</td>
                                    <td>2014</td>
                                    <td>5.00/5.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </Paper>
                    <br />
                    <Paper elevation={5} 
                           style={{
                                margin:'10px 10px 0px 10px',  
                                padding:20, 
                                backgroundColor: colors.secondary, 
                                opacity:'.9',
                                borderRadius: '20px'
                            }}>
                        <h1>Technical Skills</h1>
                        <br />
                        <h3>Programming Language:</h3><span> Python, JavaScript, React, HTML, CSS</span>
                        <br />
                        <h3>Programming Libraries:</h3><span> Scikit-learn, TensorFlow, ReactJS, Keras, NumPy, Pandas</span>
                        <br />
                        <h3>Software Proficiency:</h3><span> Proteus, LabView, Webots, Adobe Premiere Pro</span>
                        <br />
                        <h3>IDE Proficiency:</h3><span> Jupyter, Visual Studio Code, PyCharm</span>
                    </Paper>
                    <br />
                    <Paper elevation={5} 
                           style={{
                                margin:'10px 10px 0px 10px',  
                                padding:20, 
                                backgroundColor: colors.secondary, 
                                opacity:'.9',
                                borderRadius: '20px',
                                display:'flex',
                                justifyContent:'center',
                                alignItems: 'center',
                                flexDirection: 'column'
                            }}>
                        <h1>Language Proficiency</h1>
                        <ul>
                            <li>Bangla</li>
                            <li>English</li>
                        </ul>
                    </Paper>
                </div>
        </div>
    );
}

export default AboutMe;