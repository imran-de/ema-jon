import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login'>
            <div>
                <h2>Create Account</h2>
                <form>
                    <input type="email" placeholder="your email" /><br />
                    <input type="password" placeholder="your password" /><br />
                    <input type="password" placeholder="re-enter password" /><br />
                    <input type="submit" value="Register" />
                </form>
                <p>Already have Account <Link to="/login">Login</Link></p>
                <h4>---------OR---------</h4>
                <button className='btn-cart'>Sign In with Google</button>
            </div>
        </div>
    );
};

export default Register;