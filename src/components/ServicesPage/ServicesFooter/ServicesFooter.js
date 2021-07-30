import React from 'react';
import './ServicesFooter.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CallIcon from '@material-ui/icons/Call';

const ServicesFooter = () => {
    return (
        <section className="py-5 mt-5 service-footer text-white">
            <div className='service-footerImage p-5'>
                <div className="container service-footer-container">
                    <div className="row align-items-center justify-content-center service-footer-row">
                        <div className="col-md-4 offset-md-1 col-sm-12">
                            <h1 className="pb-3 fw-bold">Want a custom website for your business?</h1>
                            <h6 className="pb-5">Whether you want to make a custom website for your business or have any questions, <span  className="fw-bold techTent">we are here 24X7</span> to help your business grow.</h6>
                            {/* <p className="pb-3 fw-bold">+880 1521773102</p> */}
                            {/* <p className="pb-3 fw-bold">shafayat.tazoar27@gmail.com</p> */}
                            <button type="button" class="btn btn-primary btn-service-footer">
                                <CallIcon className="svg_icons_call me-3"></CallIcon>Call Us On +880 1521773102
                            </button>
                        </div>
                        <div className="col-md-2 col-sm-12"></div>
                        <div className="col-md-5 col-sm-12">
                            <h2 className="pb-3 fw-bold">Get In Touch</h2>
                            <p className="pb-2">Tel: 02-9367283</p>
                            <p className="pb-2">sales@techtentsolutions.com</p>
                            <p className="pb-2">career@techtentsolutions.com</p>
                            <div className=''>
                                <FacebookIcon  className="svg_icons"/>
                                <LinkedInIcon  className="svg_icons ms-4"></LinkedInIcon>
                                <TwitterIcon className="svg_icons ms-4"/>
                                <YouTubeIcon className="svg_icons ms-4"></YouTubeIcon>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <small className="text-white">Copyright {(new Date()).getFullYear()} All Rights Reserved</small>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesFooter;