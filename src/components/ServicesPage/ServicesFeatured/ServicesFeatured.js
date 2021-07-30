import React from 'react';
import './ServicesFeatured.css';
//import icon2 from '../../../images/icon-02.png';
import icon3 from  '../../../images/icon-03.png';
import icon4 from  '../../../images/icon-04.png';
import icon5 from  '../../../images/icon-05.png';
import icon6 from  '../../../images/icon-06.png';
import icon7 from  '../../../images/icon-07.png';
import icon10 from  '../../../images/icon-10.png';
import ServiceCard from '../ServiceCard/ServiceCard';
//import icon11 from  '../../../images/icon-11.png';



const ServicesFeatured = () => {
    const featuredServices = [
        {
            image: icon4, 
            name: 'Web App Development', 
            description: 'Develop robust online applications to suit your business needs and cater to your clients faithfully.'
    
        },
        {
            image: icon7,  
            name: 'App Development', 
            description: 'Developing innovative and native mobile apps for Android, iOS, BlackBerry and Windows platforms'
    
        },
        {
            image: icon10, 
            name: 'AEM Solutions', 
            description: 'AEM brings your content management system (CMS) & digital asset management (DAM) in one place'
    
        },
        {
            image: icon6,
            name: 'ML & AI',
            description: 'Machine Learning and Artificial Intelligence solution for your organization by experts hand'
        },
        {
            image: icon5,
            name: 'Cloud Solution',
            description: 'We help large companies with enterprise-oriented certified cloud and cyber security solutions'
        },
        {
            image: icon3,
            name: 'E-Commerce',
            description: 'We provide ultimate e-commerce solution as well as customizations for your e-commerce business'
        }
    ]
    return (
        <section className="py-5">
            <div className="text-center">
                <h1 className="servicesInk fw-bold pb-5">Technological Solutions</h1>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">

                        {
                            featuredServices.map(featured => <ServiceCard featured={featured}></ServiceCard>)
                        }
                </div>
            </div>
        </section>
    );
};

export default ServicesFeatured;