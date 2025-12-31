import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';
import './Services.css';

const Services = () => {

    const [service, setPost] = useState([]);

    useEffect(() => {
        console.log('product api called');
        fetch('/FakeDataService.JSON')
            .then(res => res.json())
            .then(data => {
                setPost(data);
                console.log('products received');
            })
    }, [])
    return (
        <section className="we-offer-area text-center bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="site-heading text-center">
                            <h2>What we <span>Offer</span></h2>
                            <h4>Medical Resources</h4>
                        </div>
                    </div>
                </div>
                <div className="row our-offer-items less-carousel">

                    {
                        service.map((service, index) => <SingleService
                            key={index}
                            service={service}
                        >
                        </SingleService>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Services;