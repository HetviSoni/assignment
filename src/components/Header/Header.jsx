import React from 'react';
import './header.css';
import Logo from '../../assets/logo.webp';

const Header = () => {
    return (
        <div className='header'>
            <div className="navbar">
                <div className="left">
                    {/* Logo */}
                    <img src={Logo} alt="Logo" className='logo' />
                </div>
                <div className="right">
                    <ul>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><button>Buy Template</button></li>
                    </ul>

                </div>
            </div>
        </div>

    );
};

export default Header;
