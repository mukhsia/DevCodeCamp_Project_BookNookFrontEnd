import React from 'react';
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './NavBar.css';

const Navbar = () => {
    const { logoutUser, user } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <div className="navBar">
            <ul className="d-flex justify-content-between">
                <li className="brand p-2">
                    <Link
                        to="/search"
                        style={{ textDecoration: 'none', color: '#788896' }}
                    >
                        <b>BookNook</b>
                    </Link>
                </li>
                <li className="p-2">
                    {user && (
                        <Link
                            to="/favorites"
                            style={{ textDecoration: 'none', color: '#2c88d9' }}
                        >
                            <b>Favorites</b>
                        </Link>
                    )}
                </li>
                <li className="ml-auto p-2">
                    {user && (
                        <h4 style={{ textDecoration: 'none', color: 'black' }}>
                            Hello, {user.userName}
                        </h4>
                    )}
                </li>
                <li className="authButton p-2">
                    {user ? (
                        <button className="logoutButton" onClick={logoutUser}>
                            Logout
                        </button>
                    ) : (
                        <button
                            className="loginButton"
                            onClick={() => navigate('/login')}
                        >
                            Login
                        </button>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
