import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppointmentOption = ({appointmentOption}) => {
    const {name,slots}= appointmentOption;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <div className="text-center">
                    <p>{slots.length > 0 ? slots[0] : 'appoint another day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                </div>
                <div className="card-actions justify-center">
                    <PrimaryButton >Book Appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;