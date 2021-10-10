import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <nav>
                <Link to="/Shop">Shop</Link>
                <Link to="/Review">Order Review</Link>
                <Link to="/Inventory">Manage Inventory Here</Link>
                {
                    user?.displayName ? <span><span style={{ color: 'white' }}>Hello! {user.displayName} </span>< button onClick={logOut}>Logout</button></span> : <Link to="/login">Login</Link>
                }
            </nav>
        </div >
    );
};

export default Header;