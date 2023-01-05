import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const Contact = () => {
    return (
        <div style={{background:`url(${appointment})`}} className="card my-16 bg-base-100 shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title text-primary">Contact Us</h2>
                <p className='text-3xl text-white'>Stay Connected With Us</p>
                <div className='grid'>
                    <input type="text" placeholder="Email Address" className="input lg:w-96 mt-4" />
                    <input type="text" placeholder="Subject" className="input lg:w-96 mt-4" />
                    <textarea className="textarea my-4" placeholder="Your message"></textarea>
                    <PrimaryButton >Submit</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Contact;