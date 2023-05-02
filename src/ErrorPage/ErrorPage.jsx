import React from 'react';
import errorImage from '../../src/assets/img/errorpage/error.png'

const ErrorPage = () => {
    return (
        <div className=''>
            <header className="bg-gray-800 text-white py-4">
                <h1 className="text-center text-4xl">Oops! Page not found</h1>
            </header>
            <section className="bg-gray-100 py-8">
                <div className="max-w-2xl mx-auto px-4">
                    <img style={{ height: '60vh', margin: 'auto' }} src={errorImage} alt="" />
                </div>
            </section>
            <footer className="bg-gray-800 text-white py-4">
                <div className="max-w-2xl mx-auto px-4">
                    <p className="text-center">&copy; All rights reserved by Foodie Frenzy</p>
                </div>
            </footer>

        </div>
    );
};

export default ErrorPage;