import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import thum from '../../images/Rectangle2.png';

const Contact = () => {
    const { user } = useAuth();
    return (
        <div className="container">
            {(user.email || user.displayName) ? (
                <div className="container">
                    <div className="course mt-5 mb-5">
                        <img className="w-100 img rounded-0 m-auto" src={thum} alt="" />
                        <h2>Inspect Health</h2>
                        <h5>Our dedicated service helps you to cure your all diseases and lead a helathy life.</h5>
                        <ul className="s">
                            <li><i className="fas fa-user"></i> <small>32 Quaries Today</small></li>
                        </ul>
                    </div>
                    <div className="container mb-5">
                        <h2>Submit Your Quary</h2>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Problem Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Service Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Details</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="button" className="btn btn-primary">Submit Query</button>
                    </div>
                </div>
            ) : (
                <>
                    <Navigate to="/login" replace />
                </>
            )}
        </div>
    );
};

export default Contact;