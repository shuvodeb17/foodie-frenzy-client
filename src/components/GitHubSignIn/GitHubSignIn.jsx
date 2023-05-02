import React, { useContext } from 'react';
import githubLogo from '../../assets/img/login/GitHub-Mark.png';
import { AuthContext } from '../../providers/AuthProviders';


const GitHubSignIn = () => {
    const { GitHubSignIn } = useContext(AuthContext);

    const githubSignInHandler = () => {
        GitHubSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
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