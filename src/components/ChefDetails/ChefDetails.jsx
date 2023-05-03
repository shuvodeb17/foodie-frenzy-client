import React from 'react';
import './ChefDetails.css';
import { BeakerIcon, HandThumbUpIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';



const ChefDetails = ({ chef }) => {
    const { id, picture, name, experience, numbersOfRecipes, likes } = chef;

    return (
        <div className='bg-[#0E1317] text-white'>
            <div className="chef-top">
                <LazyLoad>
                    <img src={picture} alt="" />
                </LazyLoad>
            </div>
            <div className="chef-bottom px-5 py-5">
                <p className='text-2xl font-bold'>Name: {name}</p>
                <p>Experience: {experience}</p>
                <p>Number of Recipes: {numbersOfRecipes}</p>
                <div className='flex'>
                    <HandThumbUpIcon className="me-3 h-6 w-6 text-blue-500" />
                    <span>{likes}</span>
                </div>
                <Link to={`/chef-recipes/${id}`}>
                    <button className='bg-[#8A6D42] px-5 py-3 mt-5 rounded-lg hover:bg-[#2C3238]'>View Recipe</button>
                </Link>
            </div>
        </div>
    );
};

export default ChefDetails;