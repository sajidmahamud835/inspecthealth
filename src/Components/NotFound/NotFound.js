import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center my-5'>
            <h1 className='mb-3'>404 - Not Found </h1>
            <p>Nothing was found. Please recheck the url.</p>
            <Link to='/'>
                <button className="btn btn-success">Go Home</button>
            </Link>
        </div>
    );
};

export default NotFound;