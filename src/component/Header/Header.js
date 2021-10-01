import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <nav>
                <Link to="/Shop">Shop</Link>
                <Link to="/Review">Order Review</Link>
                <Link to="/Inventory">Manage Inventory Here</Link>
            </nav>
        </div>
    );
};

export default Header;