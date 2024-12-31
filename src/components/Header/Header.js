import React from 'react';
import './Header.scss';
import logo from '../../img/LOGOkasa.png';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo Kasa" className="logokasa" />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/"
              className={({ isActive }) => (isActive ? 'disabled' : '')}>

                            
                        Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/APropos"
              className={({ isActive }) => (isActive ? 'disabled' : '')}>
                        A propos
                        </NavLink>

                        
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

