import React from 'react';
import './ServicesFeatured.css';
import ServiceCard from '../ServiceCard/ServiceCard';
import { useState, useEffect } from 'react';




const ServicesFeatured = () => {
    
    const [service, setService] = useState([])
    const [loading, setLoading] = useState(true);
    

    useEffect( () => {
        fetch('http://localhost:5000/servicePage')
        .then(res => res.json())
        .then(data => 
            setService(data),
            setLoading(false)
            )
    }, [])
    return (
        <section className="py-5">
            <div className="text-center">
                <h1 className="servicesInk fw-bold pb-5">Technological Solutions</h1>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">

                        {
                            loading?
                            <button class="btn btn-primary" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span class="sr-only">Loading...</span>
                            </button>
                             : 
                            service.map(service => <ServiceCard service={service}></ServiceCard>)
                        }
                </div>
            </div>
        </section>
    );
};

export default ServicesFeatured;