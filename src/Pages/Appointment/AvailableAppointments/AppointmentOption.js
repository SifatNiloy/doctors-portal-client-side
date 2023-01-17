import React from 'react';


const AppointmentOption = ({appointmentOption, setTreatment}) => {
    const {name,slots, price}= appointmentOption;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <div className="text-center">
                    <p>{slots.length > 0 ? slots[0] : 'appoint another day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <p><small>Price: ${price}</small></p>
                </div>
                
                <div className="card-actions justify-center">
                    
                    <label 
                    disabled ={slots.length===0}
                    htmlFor="booking-modal" 
                    className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
                        onClick={() => setTreatment(appointmentOption)}
                     >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;