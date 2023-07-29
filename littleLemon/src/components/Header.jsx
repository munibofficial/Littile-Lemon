import React from 'react';
import logo from '/Users/mwaleedamjad/Downloads/Littile Lemon/littleLemon/src/assets/Logo .png';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" /> {/* replace with the path to your logo */}
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="/services" className="nav-link">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
