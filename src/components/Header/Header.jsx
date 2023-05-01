import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-gray-100">
            <div className="container mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Foodie Frenzy</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;