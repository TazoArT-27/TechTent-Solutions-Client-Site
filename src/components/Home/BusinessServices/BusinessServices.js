import React from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import './BusinessServices.css';
import web from '../../../images/appDev.jpg';
import graphics from '../../../images/graphics.png';
import seo from '../../../images/office1.jpg';

const services = [
    {
        image: web, 
        name: 'Mobile & Web Development', 
        description: 'We deliver mobile & web solutions by experts'

    },
    {
        image: graphics,  
        name: 'Graphics Design', 
        description: 'We will create a beautiful & working design for your idea'

    },
    {
        image: seo, 
        name: 'SEO', 
        description: 'We provide seo services for your business'

    }
]



const BusinessServices = () => {
    return (
        <section id="services" className="pt-5 business">
            <div className="text-center py-5">
                <h6 className="techTent">Our Services</h6>
                <h2 className="fw-bold" style={{color: '#153060'}}>Explore What We Offer</h2>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">

                        {
                            services.map(service => <ServiceInfo service={service}></ServiceInfo>)
                        }
                </div>
            </div>
        </section>
    );
};

export default BusinessServices;