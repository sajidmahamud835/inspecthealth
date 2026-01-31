import React from 'react';
import SingleService from '../SingleService/SingleService';
import serviceData from '../../fakedata/FakeDataService.json';
import './Services.css';

const Services = () => {
    // Optimization: Directly import static data to avoid network request and unnecessary re-renders.
    const service = serviceData;

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
                        />)
                    }

                </div>
            </div>
        </section>
    );
};

export default Services;
