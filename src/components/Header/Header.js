import React from 'react';
import './Header.scss'; // Optional: if you want to add styles
import { Link } from 'react-router-dom'; // Pour la navigation avec React Router

const Header = () => {
    return (
        <header className="header">
            <img src="src/img/LOGOkasa.png" alt="logokasa" className="logo" />
            <h1>My First React Header</h1>
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

