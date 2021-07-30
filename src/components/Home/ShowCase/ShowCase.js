import React from 'react';
import './ShowCase.css';
import office2 from '../../../images/office1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShowCase = () => {
    AOS.init();
    return (
        <div id="about" className="showcase-bg pt-5">
            <div className="container showcase pt-5 text-center">
                <h6 className="techTent pt-4">About</h6>
                <h2 className=" tech1">Why <span className="techTent">TechTent Solutions ?</span></h2>
                <div className="row align-items-center pt-5">
                    <div className="col-md-5 offset-md-1 col-sm-12 offset-md-1 justify-content-center" data-aos-duration="500" data-aos="fade-right">
                        <h2 className="pb-4">We build software solutions that solve our clients business challenges</h2>
                        <h6 className="">We specialize in delivering end-to-end services and mobile & web applications for innovation companies around the world</h6>
                    </div>
                    <div className="col-md-6 col-sm-12" data-aos-duration="500" data-aos="fade-left">
                        <img className="showcaseImg" src={office2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCase;