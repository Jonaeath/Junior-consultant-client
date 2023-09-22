import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [passwordError, setPasswordError]=useState('');
    const handelLogin = event =>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email,password);

        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setPasswordError('Please provide at least two uppercase');
            return;
        }
        if(password.length < 8){
            setPasswordError('Please Should be at least 6 characters');
            return;
        }
        setPasswordError('')

    }

    return (
        <div className="card w-full m-auto mt-16 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                            <h1 className="text-4xl text-center font-bold">Login!</h1>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <p className='text-orange-600'>{passwordError}</p>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type='submit' value="Log In" />
                            </div>
                        </form>
                        <div className='text-center'>
                        <p>Please Register <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>                  
                        </div>
                        <br></br>
                    </div>
    );
};

export default Login;