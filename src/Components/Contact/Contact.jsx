import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import thum from '../../images/Rectangle2.png';

const Contact = () => {
    const { user } = useAuth();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsSuccess(false);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            e.target.reset();
            // Auto-hide success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
        }, 1500);
    };

    return (
        <div className="container">
            {(user.email || user.displayName) ? (
                <div className="container">
                    <div className="course mt-5 mb-5">
                        <img className="w-100 img rounded-0 m-auto" src={thum} alt="" />
                        <h2>Inspect Health</h2>
                        <h5>Our dedicated service helps you to cure all your diseases and lead a healthy life.</h5>
                        <ul className="s">
                            <li><i className="fas fa-user"></i> <small>32 Queries Today</small></li>
                        </ul>
                    </div>
                    <div className="container mb-5">
                        <h2>Submit Your Query</h2>

                        {isSuccess && (
                            <div className="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Success!</strong> Your query has been submitted. We will contact you soon.
                                <button type="button" className="btn-close" aria-label="Close" onClick={() => setIsSuccess(false)}></button>
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="problemName" className="form-label">Problem Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="problemName"
                                    placeholder="Service Name"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="details" className="form-label">Details</label>
                                <textarea
                                    className="form-control"
                                    id="details"
                                    rows="3"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Submitting...
                                    </>
                                ) : (
                                    "Submit Query"
                                )}
                            </button>
                        </form>
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
