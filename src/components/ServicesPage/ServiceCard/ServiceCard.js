import React from 'react';
import './ServiceCard.css';

const ServiceCard = (props) => {
    const {image, name, description} = props.featured;
    return (
        <div className="col-lg-3 col-md-4 col-sm-10 gy-4 featured-media">
            <div className="ps-5 ms-1">
                <div className="card h-100 featuredCard text-center p-4" style={{width: "18rem"}}>
                    <div className="text-center">
                    <img style={{width: "50px", height: "50px"}}src={image} className="card-img-top" alt="..."/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text text-muted">{description}</p>
                        <button className="btn btn-primary btn-order">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;