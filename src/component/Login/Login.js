import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css"
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder="Your email" /><br /><br />
                    <input type="password" placeholder="******" /><br /><br />
                    <input className='btn-cart' type="submit" value="Login" />
                </form>
                <p>New to ema-john? <Link to="/register">Create Account</Link></p>
                <h4>---------OR---------</h4>
                <button onClick={signInUsingGoogle} className='btn-cart'>Sign In with Google</button>
            </div>
        </div>
    );
};

export default Login;