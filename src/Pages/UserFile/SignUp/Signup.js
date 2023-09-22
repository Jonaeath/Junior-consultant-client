import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [passwordError, setPasswordError]=useState('');
    const handelSignup = event =>{
        event.preventDefault();
        const from = event.target;
        const name = event.from.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name,email,password);

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
                        <form onSubmit={handelSignup} className="card-body">
                        <div className="form-control">
                            <h1 className="text-4xl text-center font-bold">Signup!</h1>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
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
                                <input className="btn btn-primary" type='submit' value="Sign Up" />
                            </div>
                        </form>
                        <div className='text-center'>
                        <p>Please LogIn <Link className='text-orange-600 font-bold' to='/login'>LogIn</Link></p>                  
                        </div>
                        <br></br>
                    </div>
    );
};

export default Signup;