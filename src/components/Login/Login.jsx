import React, { useContext, useState } from 'react';
import './Login.css';
import loginImage from '../../assets/img/login.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import GitHubSignIn from '../GitHubSignIn/GitHubSignIn';


const Login = () => {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    console.log(location);

    const loginHandler = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // login
        login(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                setError('');
                setSuccess('Registration Successful')
                navigate(from, { replace: true })
            })
            .catch(error => {
                setSuccess('');
                setError(error.message);
            })
    }

    return (
        <div className='login-main flex items-center justify-center'>
            <div className="container mx-auto">
                <div className="login-wrapper grid lg:grid-cols-2 text-center">
                    <div className="login-left">
                        <h2 className="text-2xl font-bold text-[#FE4320] tracking-wider">User Login</h2>
                        <form onSubmit={loginHandler}>
                            <input className='mb-5 mt-5' required name='email' type="email" placeholder='Email' />
                            <br />
                            <input required name='password' type="password" placeholder='Password' />
                            <div>
                                <p className='forget-pass mt-4'>Forget Password</p>
                            </div>
                            <div>
                                <p className="text-green-600">{success}</p>
                                <p className="text-red-600">{error}</p>
                            </div>
                            <button className='button'>Login</button>
                        </form>


                        <div className='mb-10'>
                            <Link to='/register' className='acc'><small>Don't have an account ?
                                <span className='forget-pass'>Register</span>
                            </small>
                            </Link>
                        </div>

                        <GoogleSignIn />
                        <GitHubSignIn />

                    </div>
                    <div className="login-right">
                        <img className='hidden lg:block' src={loginImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;