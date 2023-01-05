import React from 'react';
import InfoCards from '../../InfoCards/InfoCards';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Contact from '../Contact/Contact';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-12'>
            <Banner/>
            <InfoCards></InfoCards>
            <Services></Services>
            <Care></Care>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;