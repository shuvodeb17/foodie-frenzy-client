import React from 'react';
import githubLogo from '../../assets/img/login/GitHub-Mark.png';


const GitHubSignIn = () => {
    return (
        <div>
            <div className="social-login flex gap-4 items-center justify-center mt-5 p-2">
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