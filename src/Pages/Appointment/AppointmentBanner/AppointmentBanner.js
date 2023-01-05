import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bg.png'
const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
  
    return (
        <header style={{background:`url(${bg})`}}>
            <div className="hero my-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='mr-6'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            
                        />
                        
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;