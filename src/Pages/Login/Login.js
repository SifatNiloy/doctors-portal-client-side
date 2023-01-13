import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {signIn}= useContext(AuthContext);
    const [loginError, setLoginError]=useState('');
    const [loginUserEmail, setLoginUserEmail]= useState('');
    const [token]= useToken(loginUserEmail);

    const location= useLocation();
    const navigate= useNavigate();
    const from= location.state?.from?.pathname || '/' ;
    if(token){
        navigate(from, { replace: true });
    }

    const handleLogin = (data) => {
        console.log(data)
        setLoginError('')
        signIn(data.email, data.password)
        .then(result=>{
            const user= result.user;
            console.log(user)
            setLoginUserEmail(data.email)
             
        })
        .catch(error=>{
            console.log(error.message)
            setLoginError(error.message)
        })
            
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
                              
                            })} 
                        className="input input-bordered input-success w-full max-w-xs" />  
                        {errors.password && <span className='text-red-400'>{errors.password?.message}</span>}       
                        <label className="label"> <span className="label-text"> Forgot Password ? </span> </label>   
                                     
                    </div>
                   
                    <input className='btn btn-accent w-full' type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p> }
                    </div>
                </form> 
                <p>New to doctors portal? <Link className='text-secondary' to="/signup">Create an account</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full text-accent'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;