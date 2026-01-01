import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const { name, short_details, fee, eusers, img } = props.service;
    return (
        <div className="col-md-4 col-sm-6 equal-height">
            <div className="item">
                <i className={img}></i>
                <h4>{name}</h4>
                <p>{name} {short_details} Our {name} service starting at {fee}$ and already {eusers} people took service today.</p>
                <Link className="mt-3 btn btn-primary custom-btn" to="/post">Select Service</Link>
            </div>
        </div>
    );
};

export default SingleService;