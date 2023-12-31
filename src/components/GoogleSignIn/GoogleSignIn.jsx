import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import googleLogo from '../../assets/img/login/download.png';
import { AuthContext } from '../../providers/AuthProviders';


const GoogleSignIn = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const googleSignInHandler = () => {
        googleSignIn()
            .then(result => {
                const googleLoggedIn = result.user;
                console.log(googleLoggedIn);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div>
            <div onClick={googleSignInHandler} className="social-login flex gap-4 items-center justify-center mt-5 p-2">
                <div>
                    <img src={googleLogo} alt="" />
                </div>
                <div>
                    <p>Sign in with Google</p>
                </div>
            </div>
        </div>
    );
};

export default GoogleSignIn;