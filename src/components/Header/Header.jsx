import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

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
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link style={{ display: 'none' }} to='/'>{user?.email}</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
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
                                <Link to='/login'>
                                    <button onClick={logoutHandler} className="btn btn-primary">
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