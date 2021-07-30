import React from 'react';
import './HeaderMain.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import mobilebg2 from '../../../images/mobilebg2.png'
import { Link } from 'react-router-dom';
const HeaderMain = () => {
    AOS.init({
        duration: 800,
    });
    return (
        <main className="container">
            <div className="row header-row">
            <div className="col-md-6 col-sm-10 offset-md-1 pt-5" data-aos-duration="1500" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <h5 className="pt-5 pb-4 text-head">The best web & mobile solutions</h5>
                <h1 className="company-name">TechTent</h1>
                <h1 className="company-name">Solutions</h1>
                <h6 className="pt-3 pb-5 text-head">Clients business solutions are our best incentives.</h6>
                <Link to="/services"><button className="btn btn-primary me-4 btn-services">Our Services</button></Link>
                <Link to="/contact"><button type="button" class="btn btn-primary btn-hire">Hire Us</button></Link>
            </div>
            <div className="col-md-5 col-sm-12" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <img src={mobilebg2} alt="" className="img-fluid header-img  pb-5" />
            </div>
            </div>
        </main>
    );
};

export default HeaderMain;