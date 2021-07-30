import React from 'react';
import './ServicesHeader.css';
import Navbar from '../../Home/Navbar/Navbar';
import ServicesHeaderMain from '../ServicesHeaderMain/ServicesHeaderMain';

const ServicesHeader = () => {
    return (
        <div className="servicesHeader-container">
            <Navbar></Navbar>
            <ServicesHeaderMain></ServicesHeaderMain>
        </div>
    );
};

export default ServicesHeader;