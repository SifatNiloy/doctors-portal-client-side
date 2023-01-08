import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions]=useState([])
    const [treatment, setTreatment]= useState([]);

    const { data: appointmentOptions=[]}=useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch('http://localhost:5000/appointmentOptions')
            .then(res => res.json())
    })

    // useEffect(()=>{
    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res=> res.json())
    //     .then(data=> setAppointmentOptions(data))
    // },[])
    return (
        <section className='my-16 px-6'>
            <p className='text-center text-secondary font-bold'>Available Services on {format(selectedDate,'PP')}</p>
            <div className='grid gap-6 my-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option=> <AppointmentOption key={option.id} appointmentOption={option} setTreatment={setTreatment} ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal 
                selectedDate={selectedDate} 
                treatment={treatment}
                setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;