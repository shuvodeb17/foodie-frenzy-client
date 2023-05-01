import React from 'react';
import aboutImg from '../../assets/img/about.png';

const AboutUs = () => {
    return (
        <div className='bg-[#080B0E]'>
            <div className="container mx-auto">
                <div className='flex gap-40 py-5'>
                    <div>
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className='text-white'>
                        <h1 className="text-">About Us</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;