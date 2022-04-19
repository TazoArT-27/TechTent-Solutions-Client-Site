import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div className="col-md-4 col-sm-10 testimonialCustomer">
            <div className="card ms-5 customerCard" style={{maxWidth: '340px'}}>
            <div class="row g-0">
                <div className="col-md-4">
                    <img style={{height: '100px',width: '80px'}} src={review.photoURL} className="img-fluid rounded-circle" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{review.name}</h5>
                        <p className="card-text">{review.address}</p>
                        <small className="card-text">{review.review}</small>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ReviewCard;