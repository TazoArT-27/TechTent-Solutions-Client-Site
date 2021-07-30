import React from 'react';
import ServicesFeatured from '../ServicesFeatured/ServicesFeatured';
import ServicesFooter from '../ServicesFooter/ServicesFooter';
import ServicesHeader from '../ServicesHeader/ServicesHeader';

const ServicesPage = () => {
    return (
        <>
            <ServicesHeader></ServicesHeader>
            <ServicesFeatured></ServicesFeatured>
            <ServicesFooter></ServicesFooter>
        </>
    );
};

export default ServicesPage;