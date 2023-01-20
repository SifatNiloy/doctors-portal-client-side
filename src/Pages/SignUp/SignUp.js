import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } }= useForm();
    const { createUser, updateUser }= useContext(AuthContext);
    const [signUpError, setSignUpError]= useState('');
    const [createdUserEmail, setCreatedUserEmail]= useState('');
    const [token] = useToken(createdUserEmail);
    const navigate= useNavigate();
    if(token){
        navigate('/');
    }
    const handleSignUp=(data)=>{
        setSignUpError('');
        createUser(data.email, data.password)
        .then((result)=>{
            const user=result.user;
            console.log(user);
            toast('User created successfully')
            const userInfo={
                displayName: data.name
            } 
            updateUser(userInfo)
            .then(()=>{
                saveUser(data.name, data.email);
            })
            .catch(err=> console.error(err));
        })
        .catch(error=> {
            console.log(error)
            setSignUpError(error.message)
        })
    }
    const saveUser = (name, email)=>{
        const user= {name, email};
        fetch(`http://doctors-portal2.sifatniloy.com/users`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=>{
            setCreatedUserEmail(email)           
        })
    }

    

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className="text-xl text-center">Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name </span> </label>
                        <input type="text"  
                            {...register("name",{
                                required:'name is required'
                            })}                        
                            className="input input-bordered input-success w-full max-w-xs" />
                        {errors.name && <span className='text-red-400'>{errors.name.message}</span>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email </span> </label>
                        <input type="email"  
                            {...register("email",{
                                required: "email is required"
                            })}                        
                            className="input input-bordered input-success w-full max-w-xs" />
                        {errors.email && <span className='text-red-400'>{errors.email.message}</span>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password </span> </label>
                        <input type="password"
                            {...register("password",{
                                required: "password is required",
                                minLength: { value: 6, message: "password should be at least 6 characters or longer" },
                                pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "password must have uppercase, number and special characters" }
                            })}
                            className="input input-bordered input-success w-full max-w-xs" />
                        {errors.password && <span className='text-red-400'>{errors.password.message}</span>}
                    </div>
                    <br />
                    <input className='btn btn-accent w-full' type="submit" />
                    {signUpError&& <p className='text-red-500'> {signUpError} </p>}
                </form>
                <p>Already have an account? <Link className='text-secondary' to="/login">Please Login </Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full text-accent'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;