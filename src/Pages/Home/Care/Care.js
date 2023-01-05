import React from 'react';
import treatment from '../../../assets/images/treatment.png'
const Care = () => {
    return (
        <div className="hero min-h-screen bg-light ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="hidden md:block max-w-sm rounded-lg lg:w-1/2" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, On Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Care;