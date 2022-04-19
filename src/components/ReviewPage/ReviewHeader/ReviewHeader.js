import React from 'react';
import Navbar from './../../Home/Navbar/Navbar';
import ReviewHeaderMain from './../ReviwHeaderMain/ReviewHeaderMain';
import '../../ServicesPage/ServicesHeader/ServicesHeader.css'

const ReviewHeader = () => {
    return (
        <div className="servicesHeader-container">
            <Navbar></Navbar>
            <ReviewHeaderMain></ReviewHeaderMain>
        </div>
    );
};

export default ReviewHeader;