import React from 'react';
import colors from '../config/colors';

function Footer(props) {
    return (
            <footer className='footer' style={{
                                    minHeight:'10vh', 
                                    backgroundColor: colors.primary,
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    }}>
                <div style={{
                        height:'30px', 
                        width:'30px', 
                        backgroundColor:colors.link, 
                        borderRadius:'15px',
                        marginRight:'10px'}}></div>
                <p>color words are clickable</p>
            </footer>
    );
}

export default Footer;