import React from 'react';
import InfoCards from '../../InfoCards/InfoCards';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner/>
            <InfoCards></InfoCards>
            <Services></Services>
            <Care></Care>
        </div>
    );
};

export default Home;