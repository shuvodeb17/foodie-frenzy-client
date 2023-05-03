import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-[#25262B] text-white'>
            <div className="container mx-auto">
                <div className='grid lg:grid-cols-3 px-4 gap-4 py-10'>
                    <div>
                        <h2 className="text-3xl font-bold custom-border">Foodie Frenzy</h2>
                        <p className='text-[#6A6C71]'>The website may include a bio or about page, a gallery of food photos, a blog with recipe and cooking advice, a menu or services page, and contact information for inquiries or bookings.Chefs can be booked and cooking recipes will be known</p>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold custom-border">About</h1>
                        <p className='text-[#6A6C71]'>Make a Order Creativity Is Always On Our Menu</p>
                    </div>
                    <div className='list'>
                        <h1 className="text-3xl font-bold custom-border">Link</h1>
                        <li>
                            <Link className='text-[#6A6C71] hover:text-sky-600 border-b-2 border-sky-600 mb-4' to='/'>Home</Link>
                        </li> <br />
                        <li>
                            <Link className='text-[#6A6C71] hover:text-sky-600 border-b-2 border-sky-600 mb-4' to='/blog'>Blog</Link>
                        </li> <br />
                        <li>
                            <Link className='text-[#6A6C71] hover:text-sky-600 border-b-2 border-sky-600 mb-4' to='/login'>Login</Link>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;