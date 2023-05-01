import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ChefBooking from '../ChefBooking/ChefBooking';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className='home-wrapper'>
                <div className="container mx-auto">
                    <div className="home-details text-white flex justify-center items-start flex-col h-screen w-6/12">
                        <h1 className="text-2xl">Make a Order</h1>
                        <h1 className="text-6xl font-bold">
                            Creativity Is Always <br /> On Our Menu
                        </h1>
                        <p className='text-gray-300 mt-5'>The website may include a bio or about page, a gallery of food photos, a blog with recipe and cooking advice, a menu or services page, and contact information for inquiries or bookings.Chefs can be booked and cooking recipes will be known</p>
                    </div>
                </div>
            </div>
            <AboutUs />
            <ChefBooking />
            <Footer />
        </>
    );
};

export default Home;