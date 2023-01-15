import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate= useNavigate();
    
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['Specialty'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentSpecialty`)
            const data = await res.json();
            return data;
        }
    })
    const handleAddDoctor = data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(ImageData => {
                if (ImageData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: ImageData.data.url
                    }
                    //save doctor information to the database
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')} `
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/managedoctors')
                        })
                }

            })
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name </span> </label>
                    <input type="text"
                        {...register("name", {
                            required: 'name is required'
                        })}
                        className="input input-bordered input-success w-full max-w-xs" />
                    {errors.name && <span className='text-red-400'>{errors.name.message}</span>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email </span> </label>
                    <input type="email"
                        {...register("email", {
                            required: "email is required"
                        })}
                        className="input input-bordered input-success w-full max-w-xs" />
                    {errors.email && <span className='text-red-400'>{errors.email.message}</span>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Specialty</span> </label>
                    <select
                        {...register('specialty')}
                        className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Please Select a Specialty</option>
                        {
                            specialties?.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }

                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">photo</span> </label>
                    <input type="file"
                        {...register("img", {
                            required: 'photo is required'
                        })}
                        className="input input-bordered input-success w-full max-w-xs" />
                    {errors.img && <span className='text-red-400'>{errors.img.message}</span>}
                </div>
                <br />
                <input className='btn btn-accent w-full' value="Add Doctor" type="submit" />

            </form>
        </div>
    );
};

export default AddDoctor;