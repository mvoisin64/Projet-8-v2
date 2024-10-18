import React from 'react';
import './Header.scss'; 
import logo from '../../img/LOGOkasa.png'; 
import { Link } from 'react-router-dom'; 

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo Kasa" className="logokasa" />
            <nav>
                <ul>
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#about">À Propos</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

