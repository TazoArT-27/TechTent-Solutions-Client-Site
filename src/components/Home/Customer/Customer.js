import React from 'react';
import './Customer.css';

const Customer = (props) => {
    const {name, address, image, description} = props.customer;
    return (
        <div className="col-md-4 col-sm-10 testimonialCustomer">
            <div className="card ms-5 customerCard" style={{maxWidth: '340px'}}>
            <div class="row g-0">
                <div className="col-md-4">
                    <img style={{height: '100px',width: '80px'}} src={image} className="img-fluid rounded-circle" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{name}</h5>
                        <p className="card-text">{address}</p>
                        <small className="card-text">{description}</small>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Customer;