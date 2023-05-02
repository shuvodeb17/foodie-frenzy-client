import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import './ChefRecipes.css';

const ChefRecipes = () => {
    const chefRecipes = useLoaderData();
    console.log(chefRecipes);
    const { picture, name, description, likes, numbersOfRecipes, experience, recipeName } = chefRecipes;



    return (
        <>
            <div className='bg-[#151920]'>
                <div className="container mx-auto">
                    <div className='w-6/12 text-white mx-auto'>
                        <div className='chef-main bg-[#0E1317] p-5 '>
                            <img className='chef-recipe-img rounded-lg' src={picture} alt="" />
                            <div>
                                <h2 className="text-3xl font-bold mt-2">Name: {name}</h2>
                                <p>Description: {description}</p>
                                <div>
                                    <span>{likes}</span>
                                </div>
                                <p>Number of Recipes: {numbersOfRecipes}</p>
                                <p>Experience: {experience}</p>
                            </div>
                            
                            <div>
                                <div>
                                    <h2 className="text-2xl font-bold mt-3">Recipe Name</h2>
                                    {
                                        recipeName.map(r => <p> {r}</p>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ChefRecipes;