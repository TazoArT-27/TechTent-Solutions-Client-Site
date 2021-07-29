import React from 'react';
import './industry.css';
import logistics from '../../../images/logistics.jpg';
import law from '../../../images/law.jpg';
import finance from '../../../images/finance.jpg';
import manufacture from '../../../images/manufacture2.jpg';

const Industry = () => {
    return (
        <section className="py-5 industry">
            <div className="text-center py-5">
                <h6 className="text-white">Impact</h6>
                <h2 className="fw-bold text-white">Our Industry Specialization</h2>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col-md-3 col-sm-6 industry-media">
                    <div className="card industryCard">
                        <img src={logistics} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-center fw-bold">Transport & Logistics</h5>
                            <h6 className="text-muted">Experience In.</h6>
                            <ul>
                                <li>Yard Management</li>
                                <li>Fleet Management</li>
                                <li>Cost Optimization</li>
                                <li>Best Solutions</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 industry-media">
                    <div className="card industryCard">
                        <img src={law} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-center fw-bold">Legal Tech & Law Industry</h5>
                            <h6 className="text-muted">Experience In.</h6>
                            <ul>
                                <li>Smart Contracts</li>
                                <li>Legal Tech Solutions</li>
                                <li>Chatbot Applications</li>
                                <li>Other Services</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 industry-media">
                    <div className="card industryCard">
                        <img src={finance} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-center fw-bold">Financial Services</h5>
                            <h6 className="text-muted">Experience In.</h6>
                            <ul>
                                <li>Forex Trading Solutions</li>
                                <li>Blokchain Solutions</li>
                                <li>KYC Systems</li>
                                <li>Process Optimization</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 industry-media">
                    <div className="card industryCard">
                        <img src={manufacture} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-center fw-bold">Manufacturing & Industry</h5>
                            <h6 className="text-muted">Experience In.</h6>
                            <ul>
                                <li>Production Planning</li>
                                <li>Smart Mettering</li>
                                <li>Process Optimization</li>
                                <li>Energy Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};


export default Industry;