import React from 'react';
import './ContactFooter.css';

const ContactFooter = () => {
    return (
        <section className="py-5 mt-5 contact-footer text-white">
            <div className='footerImage p-5'>
                <div className="container footer-container">
                    <div className="row align-items-center justify-content-center footer-row">
                        <div className="col-md-4 offset-md-1 col-sm-12 fw-bold ">
                            <h1 className="pb-3">Let's get in touch</h1>
                            <h6 className="pb-5">Contact us to discuss your project and how we can help</h6>
                            <p className="pb-3">+880 1521773102</p>
                            <p className="pb-3">shafayat.tazoar27@gmail.com</p>
                            <button type="button" class="btn btn-primary btn-footer">Contact Us</button>
                        </div>
                        <div className="col-md-2 col-sm-12"></div>
                        <div className="col-md-5 col-sm-12">
                            <iframe className="maps" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="500" frameBorder="0" style={{border:0}} allowFullScreen aria-hidden="false" tabIndex="0"></iframe>
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

export default ContactFooter;