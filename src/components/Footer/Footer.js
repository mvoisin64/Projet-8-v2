import React from 'react';
import './Footer.scss'; 
import logo from '../../img/LOGOkasablack.png'; // Adjust the path relative to Header.js
import { Link } from 'react-router-dom'; // Pour la navigation avec React Router

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} alt="Logo Kasa" className="logokasa" />
           <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
