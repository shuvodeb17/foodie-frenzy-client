import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    console.log(user?.photoURL);
    const logoutHandler = () => {
        logout()
            .then()
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="navbar bg-gray-100">
            <div className="container mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Foodie Frenzy</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 flex items-center gap-4">
                        <ActiveLink to='/'>Home</ActiveLink>
                        {/* <ActiveLink style={{ display: 'none' }} >{user?.email}</ActiveLink> */}
                        <ActiveLink to='/blog'>Blog</ActiveLink>
                        {
                            user &&
                            <div className="avatar me-5">
                                <div style={{ height: '53px' }} className="user-image rounded-full">
                                    <img title={user?.displayName} src={user?.photoURL} />
                                </div>
                            </div>
                        }
                        {
                            user ?
                                <Link>
                                    <button onClick={logoutHandler} className="btn btn-secondary">
                                        Logout
                                    </button></Link>
                                :
                                <Link to='/login'>
                                    <button className="btn btn-primary">
                                        Login
                                    </button></Link>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;