import React from 'react';
import './Navbar.css';
import logo from '../../../images/logo2.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <Link to='/home' className="navbar-brand">
                        <img src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link me-5 text-nav" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-5 text-nav" aria-current="page" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link me-5 text-nav" aria-current="page">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link me-5 text-nav" aria-current="page">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-5 text-nav" aria-current="page" href="#testimonial">Reviews</a>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/admin" className="nav-link me-5 text-nav" aria-current="page">Admin</Link>
                            </li> */}
                            <li class="nav-item">
                                <Link to="/orderUser" className="nav-link text-nav" aria-current="page">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
        </div>
    );
};

export default Navbar;