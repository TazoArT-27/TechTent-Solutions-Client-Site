import React from 'react';
import './Testimonial.css';
import Customer from '../Customer/Customer';
import customer1 from '../../../images/customer1.png';
import customer2 from '../../../images/customer2.jpg';
import customer3 from '../../../images/customer3.jpg';

const testimonials = [
    {
        name: 'Arnab Saha',
        address: 'Netrokona',
        image: customer1,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quis officiis molestias?'
    },
    {
        name: 'Sadman Sabab',
        address: 'Dinajpur',
        image: customer2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quis officiis molestias?'

    },
    {
        name: 'Sakib Hassan',
        address: 'Mymensingh',
        image: customer3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quis officiis molestias?'

    },
]

const Testimonial = () => {
    return (
        <section className="pt-5 testimonial-section">
            <div className="testimonialText text-center py-5">
                <h6>Testimonial</h6>
                <h2>Clients Thought About <span className="techTent">TechTent</span></h2>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4  testimonial-container" >

                        {
                            testimonials.map(customer => <Customer customer={customer}></Customer>)
                        }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;