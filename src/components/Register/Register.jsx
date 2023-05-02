import React from 'react';
import loginImage from '../../assets/img/login.png';
import '../Login/Login.css';
import { Link } from 'react-router-dom';

const Register = () => {

    const registerHandler = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name, email, photo, password);
    }

    return (
        <div>
            <div className='login-main flex items-center justify-center'>
                <div className="container mx-auto">
                    <div className="login-wrapper grid grid-cols-2 text-center">
                        <div className="login-left">
                            <h2 className="text-2xl font-bold text-[#FE4320] tracking-wider">Register</h2>
                            <form onSubmit={registerHandler}>
                                <input className='mt-5' required name='name' type="name" placeholder='Name' />
                                <br />
                                <input className='mt-5' required name='email' type="email" placeholder='Email' />
                                <br />
                                <input className='mt-5 mb-5' required name='photo' type="text" placeholder='Photo' />
                                <br />
                                <input required className='mb-3' name='password' type="password" placeholder='Password' />
                                <button className='button'>Register</button>
                            </form>

                            <div>
                                <Link to='/login' className='acc'><small>Already have an account ?
                                    <span className='forget-pass'>Login</span>
                                </small>
                                </Link>
                            </div>
                        </div>
                        <div className="login-right">
                            <img src={loginImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;