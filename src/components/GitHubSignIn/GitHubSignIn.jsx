import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import githubLogo from '../../assets/img/login/GitHub-Mark.png';
import { AuthContext } from '../../providers/AuthProviders';


const GitHubSignIn = () => {
    const { GitHubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const githubSignInHandler = () => {
        GitHubSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div onClick={githubSignInHandler} className="social-login flex gap-4 items-center justify-center mt-5 p-2">
                <div>
                    <img src={githubLogo} alt="" />
                </div>
                <div>
                    <p>Sign in with GitHub</p>
                </div>
            </div>
        </div>
    );
};

export default GitHubSignIn;