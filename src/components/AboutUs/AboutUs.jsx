import React from 'react';
import aboutImg from '../../assets/img/about.png';

const AboutUs = () => {
    return (
        <div className='bg-[#080B0E]'>
            <div className="container mx-auto">
                <div className='grid lg:grid-cols-2 px-4 gap-4 py-11'>
                    <div>
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className='text-white'>
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <h3 className="text-3xl mt-5">Meet the Chef A Passionate <br /> <span className="text-sky-600 font-bold">Foodie Frenzy</span></h3>
                        <p className="mt-5">
                            Welcome to our Foodie Frenzy! We are a team of passionate chefs dedicated to creating unforgettable culinary experiences for our clients.
                            <p className='mt-5 mb-5'>
                                Our journey began with a love for food and a desire to share it with others. Over the years, we have honed our skills, experimented with flavors and techniques, and developed a unique style that is both classic and innovative.
                            </p>
                            We believe that food should not only taste amazing, but it should also be visually stunning. That's why we pay attention to every detail, from selecting the freshest ingredients to crafting beautiful presentation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;