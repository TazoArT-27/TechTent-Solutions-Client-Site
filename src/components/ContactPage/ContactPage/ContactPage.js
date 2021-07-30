import React from 'react';
import './ContactPage.css';
import Navbar from './../../Home/Navbar/Navbar';
import ContactMain from '../ContactMain/ContactMain';

const ContactPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <ContactMain></ContactMain>
        </>
    );
};

export default ContactPage;