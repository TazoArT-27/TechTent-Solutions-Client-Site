import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './ReviewsFeatured.css';
import { useState, useEffect } from 'react';

const ReviewsFeatured = () => {
    const [reviewPage, setReviewPage] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/reviewPage')
        .then(res => res.json())
        .then(data => setReviewPage(data))
    }, [])
    return (
        <section className="py-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    reviewPage.map(review => <ReviewCard review={review}></ReviewCard>)
                }
                </div>
            </div>
        </section>
    );
};

export default ReviewsFeatured;