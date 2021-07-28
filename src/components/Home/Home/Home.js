import React from 'react';
import BusinessServices from '../BusinessServices/BusinessServices';
import Header from '../Header/Header';
import ShowCase from '../ShowCase/ShowCase';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BusinessServices></BusinessServices>
            <ShowCase></ShowCase>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;