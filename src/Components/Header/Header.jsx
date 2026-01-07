import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { handleLogout, user } = useAuth();
    const isLoggedIn = user.email || user.displayName;

    return (
        <header className="main-header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand" to="/">
                        <span className="brand-icon">🏥</span>
                        <span className="brand-text">InspectHealth</span>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/doctors">Doctors</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                        </ul>

                        <div className="nav-actions">
                            {isLoggedIn ? (
                                <div className="user-menu">
                                    <span className="user-greeting">Hi, {user.displayName || 'User'}</span>
                                    <button onClick={handleLogout} className="btn btn-outline-primary btn-sm">
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <Link to="/login" className="btn btn-outline-primary btn-sm me-2">
                                    Login
                                </Link>
                            )}
                            <Link to="/appointment" className="btn btn-primary">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;