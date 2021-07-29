import React from 'react';
import BusinessServices from '../BusinessServices/BusinessServices';
import ContactFooter from '../ContactFooter/ContactFooter';
import Header from '../Header/Header';
import Industry from '../Industry/Industry';
import ShowCase from '../ShowCase/ShowCase';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BusinessServices></BusinessServices>
            <ShowCase></ShowCase>
            <Industry></Industry>
            <Testimonial></Testimonial>
            <ContactFooter></ContactFooter>
        </div>
    );
};

export default Home;