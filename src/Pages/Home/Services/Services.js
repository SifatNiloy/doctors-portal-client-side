import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'random description txt',
            img: fluoride
        },
        {
            id: 2,
            name: 'Fluoride Treatment',
            description: 'random description txt',
            img: cavity
        },
        {
            id: 3,
            name: 'Fluoride Treatment',
            description: 'random description txt',
            img: whitening
        },
    ]
    return (
        <div className='text-center my-8'>
            <h4 className='text-primary text-lg'>Our Services</h4>
            <h3 className='text-2xl text-accent'>Services We Provide</h3>
            <div className='grid gap-6 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;