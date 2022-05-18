import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <p>&copy; Copyright Protected {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;