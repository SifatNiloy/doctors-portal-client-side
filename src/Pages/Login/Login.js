import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
   
    const handleLogin = (data) => {
        console.log(data)
    };
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className="text-xl text-center">Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email </span> </label>
                        <input type="email" 
                            {...register("email", { 
                                required: "email is required" 
                            })} 
                        className="input input-bordered input-success w-full max-w-xs" />  
                        {errors.email && <span className='text-red-400'>{errors.email?.message}</span>}                        
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password </span> </label>
                        <input type="password" 
                            {...register("password", { 
                                required: "password is required",
                              minLength: { value: 6, message: "password should be at least 6 characters or longer"},
                                pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "password must be strong"}
                            })} 
                        className="input input-bordered input-success w-full max-w-xs" />  
                        {errors.password && <span className='text-red-400'>{errors.password?.message}</span>}       
                        <label className="label"> <span className="label-text"> Forgot Password ? </span> </label>   
                                     
                    </div>
                   
                    <input className='btn btn-accent w-full' type="submit" />
                </form> 
                <p>New to doctors portal? <Link className='text-secondary' to="/signup">Create an account</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full text-accent'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;