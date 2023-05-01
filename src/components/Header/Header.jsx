import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-gray-100">
            <div className="container mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Foodie Frenzy</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <Link to='/login'>
                            <button className="btn btn-primary">
                                Login
                            </button></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;