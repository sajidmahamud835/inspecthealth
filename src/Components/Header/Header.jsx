import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { handleLogout, user } = useAuth();
    return (
        <div>
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand text-primary" href="/"><i className="fas fa-search-plus"></i> InspectHealth</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/services">Services</Link>
                                    </li>
                                    {(user.email || user.displayName) ? (
                                        <li className="nav-item">
                                            <button onClick={handleLogout} type="button" className="btn btn-custom">Logout</button>
                                        </li>
                                    ) : (
                                        <>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/login">Login</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/register">Register</Link>
                                            </li>
                                        </>
                                    )}
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/appointment">Book Appointment</Link>
                                    </li>
                                    <li className="nav-item ms-3">
                                        <Link className="nav-link btn btn-primary text-white" to="/query">Submit Query</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;