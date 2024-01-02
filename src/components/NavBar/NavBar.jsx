import React from 'react';
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './NavBar.css';

const Navbar = () => {
    const { logoutUser, user } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <div className='navBar'>
            <ul>
                <li className='brand'>
                    <Link
                        to='/search'
                        style={{ textDecoration: 'none', color: 'white' }}
                    >
                        <b>BookNook</b>
                    </Link>
                </li>
                <li>
                    {user ? (
                        <Link to='/favorites'>
                            <b>Favorites</b>
                        </Link>
                    ) : (
                        <div />
                    )}
                </li>
                <li>{user ? <h4>Hello, {user.userName}</h4> : <div />}</li>
                <li>
                    {user ? (
                        <button onClick={logoutUser}>Logout</button>
                    ) : (
                        <button onClick={() => navigate('/login')}>
                            Login
                        </button>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
