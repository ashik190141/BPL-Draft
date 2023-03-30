import React from 'react';
import BPL from '../../BPL.png';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={BPL} alt="" className='navImg'/>
            <div>
                <a href="/about">About</a>
                <a href="/blog">Blog</a>
                <a href="/login">Log in</a>
            </div>
        </nav>
    );
};

export default Header;