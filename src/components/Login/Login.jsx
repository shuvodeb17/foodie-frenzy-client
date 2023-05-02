import React, { useContext } from 'react';
import './Login.css';
import loginImage from '../../assets/img/login.png';
import googleLogo from '../../assets/img/login/download.png';
import githubLogo from '../../assets/img/login/GitHub-Mark.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';


const Login = () => {
    const { login } = useContext(AuthContext)

    const loginHandler = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // login
        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className='login-main flex items-center justify-center'>
            <div className="container mx-auto">
                <div className="login-wrapper grid grid-cols-2 text-center">
                    <div className="login-left">
                        <h2 className="text-2xl font-bold text-[#FE4320] tracking-wider">User Login</h2>
                        <form onSubmit={loginHandler}>
                            <input className='mb-5 mt-5' required name='email' type="email" placeholder='Email' />
                            <br />
                            <input required name='password' type="password" placeholder='Password' />
                            <div>
                                <p className='forget-pass mt-4'>Forget Password</p>
                            </div>
                            <button className='button'>Login</button>
                        </form>


                        <div className='mb-10'>
                            <Link to='/register' className='acc'><small>Don't have an account ?
                                <span className='forget-pass'>Register</span>
                            </small>
                            </Link>
                        </div>

                        <div className="social-login flex gap-4 items-center justify-center mt-5 p-2">
                            <div>
                                <img src={googleLogo} alt="" />
                            </div>
                            <div>
                                <p>Sign in with Google</p>
                            </div>
                        </div>

                        <div className="social-login flex gap-4 items-center justify-center mt-5 p-2">
                            <div>
                                <img src={githubLogo} alt="" />
                            </div>
                            <div>
                                <p>Sign in with GitHub</p>
                            </div>
                        </div>
                    </div>
                    <div className="login-right">
                        <img src={loginImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;