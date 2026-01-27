import React from 'react';
import SingleService from '../SingleService/SingleService';
import './Services.css';
// Optimization: Import data directly to avoid network request and re-renders
import servicesData from '../../fakedata/FakeDataService.json';

const Services = () => {
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
                        servicesData.map((service, index) => <SingleService
                            key={index}
                            service={service}
                        />)
                    }

                </div>
            </div>
        </section>
    );
};

export default Services;
