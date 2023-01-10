import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleAddDoctor=()=>{

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
                    <select className="select select-ghost w-full max-w-xs">
                        <option disabled selected>Pick a Specialty</option>
                        <option>Svelte</option>
                        <option>Vue</option>
                        <option>React</option>
                    </select>
                </div>
                <br />
                <input className='btn btn-accent w-full' value="Add Doctor" type="submit" />
               
            </form>
        </div>
    );
};

export default AddDoctor;