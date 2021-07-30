import React from 'react';
import './Navbar.css';
import logo from '../../../images/logo2.png'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link me-5 text-nav" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-5 text-nav" aria-current="page" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-5 text-nav" aria-current="page" href="#">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-5 text-nav" aria-current="page" href="#testimonial">Reviews</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-5 text-nav" aria-current="page" href="#">Blogs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-5 text-nav" aria-current="page" href="#">Admin</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-nav" aria-current="page" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
        </div>
    );
};

export default Navbar;