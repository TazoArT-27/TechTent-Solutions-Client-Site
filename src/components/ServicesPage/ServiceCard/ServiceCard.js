import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({service}) => {
    const history = useHistory();
    const handleOrder = () => {
        history.push("/orderUser")
    }
    return (
        <div className="col-md-4 col-sm-10 gy-4 card-media">
            <div className="ps-5 ms-1">
                <div className="card h-100 serviceCard text-center" style={{width: "18rem"}}>
                    <img src={`data:image/png;base64,${service.image.img}`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{service.name}</h5>
                        <p className="card-text text-muted">{service.description}</p>
                        <button onClick={handleOrder} className="btn btn-primary btn-order">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;