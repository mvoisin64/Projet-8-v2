import React from 'react';
import './Header.scss'; 
import logo from '../../img/LOGOkasa.png'; 

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo Kasa" className="logokasa" />
            <nav>
                <ul>
                    <li>
        
                            Accueil
                    
                        </li>
                    <li>

                            A propos
                    
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

