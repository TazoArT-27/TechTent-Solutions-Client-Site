import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceInfo.css';

const ServiceInfo = (props) => {
    const {image, name, description} = props.service;
    return (
        <div className="col-md-4 col-sm-10 gy-4 card-media">
            <div className="ps-5 ms-1">
                <div className="card h-100 serviceCard text-center" style={{width: "18rem"}}>
                    <img src={image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text text-muted">{description}</p>
                        <Link to="/services">
                            <button className="btn btn-primary btn-order">Order Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;