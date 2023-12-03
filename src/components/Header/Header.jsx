import React from 'react';
import './header.css';
import { useState } from 'react';
import Logo from '../../assets/logo.webp';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <div className='header'>
            <div className="navbar">
                <div className="left">
                    <img src={Logo} alt="Logo" className='logo' />
                </div>
                <div className={`right ${showMenu ? 'show' : ''}`}>
                    <ul>
                        <li><a href="#features" onClick={closeMenu}>Features</a></li>
                        <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
                        <li><a href="#pricing" onClick={closeMenu}>Pricing</a></li>
                        <li><a href="#testimonials" onClick={closeMenu}>Testimonials</a></li>
                        <li><button id='buy' onClick={closeMenu}>Buy Template</button></li>
                    </ul>
                </div>
                <div className={`menu-icon ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </div>

    );
};

export default Header;
