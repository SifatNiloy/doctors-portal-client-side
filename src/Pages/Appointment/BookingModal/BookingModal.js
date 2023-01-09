import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { json } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const {name, slots}= treatment;
    const date= format(selectedDate,'PP')

    const { user } = useContext(AuthContext);
    const handleBooking= event=>{
        event.preventDefault();
        const form= event.target;
        const slot= form.slot.value;
        const name= form.name.value;
        const email= form.email.value;
        const phone= form.phone.value;


        const booking={
            appointmentDate: date,
            treatment: treatment.name,
            patient: name, 
            slot, 
            email,
            phone
        }
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type':'application/json' 
            },
            body: JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if (data.acknowledged){
                setTreatment(null)
                toast.success('Booking Confirmed')
            }
        })

    }
    return (
      <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input type="text" value={date} placeholder="Type here" className="input w-full input-bordered input-info " readOnly />
                        <select name='slot' className="select select-bordered input-info w-full ">
                            {
                                slots?.map((slot, index )=> <option 
                                key={index}
                                value={slot}>{slot}</option>)
                            }
                            
                        </select>
                        <input name='name' defaultValue={user?.displayName} type="text" placeholder="your Name " className="input w-full input-bordered input-info" />
                        <input name='email' defaultValue={user?.email} type="text" placeholder="Email Address" className="input w-full input-bordered input-info" readOnly />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered input-info" />
                        <input className='w-full btn btn-accent' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
      </>
    );
};

export default BookingModal;