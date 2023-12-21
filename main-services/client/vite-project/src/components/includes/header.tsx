

import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom"
// import { useNavigate } from 'react-router-dom';
const Header: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getHeaderStyle = () => {
        // Define your gradient colors here
        const minColor = '#15515a';
        const maxColor = '#015d50';
        // Define the scroll range where you want the transition to occur
        const scrollRange = 200; // Change this value as needed

        // Calculate the color based on the scroll position
        const percentScrolled = Math.min(scrollY / scrollRange, 1);
        const blendedColor = `linear-gradient(135deg,  ${maxColor} , ${minColor} ${percentScrolled * 100}%)`;

        return {
            background: blendedColor,
            // transition: 'background 0.3s ease-out' // Add a transition effect for a smoother change
        };
    };

    return (
        <header className="header-bg-scroll" style={getHeaderStyle()}>
            <div className='header-row'>
                <NavLink to="/home" className='header-link remove-style-from-link'>
                    <div>Home</div>
                </NavLink>
                <NavLink to="/about" className='header-link remove-style-from-link'>
                    <div>About</div>
                </NavLink>
                <NavLink to="/services" className='header-link remove-style-from-link'>
                    <div>Services</div>
                </NavLink>
                <NavLink to="/deedback" className='header-link remove-style-from-link'>
                    <div>Feedback</div>
                </NavLink>
                <NavLink to="/login" className='header-link remove-style-from-link'>
                    <div>Login</div>
                </NavLink>
                <NavLink to="/register" className='header-link remove-style-from-link'>
                    <div>Register</div>
                </NavLink>
                
            </div>
        </header>
      );
};

export default Header;
