import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import './ChefRecipes.css';
import { HandThumbUpIcon } from '@heroicons/react/24/solid';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ChefRecipes = () => {
    const chefRecipes = useLoaderData();
    console.log(chefRecipes);
    const [rating, setRating] = useState(0)
    const { picture, name, description, likes, numbersOfRecipes, experience, recipeName, ingredients, cookingMethod, ratings } = chefRecipes;



    return (
        <>
            <div className='bg-[#151920]'>
                <div className="container mx-auto">
                    <div className='w-6/12 text-white mx-auto'>
                        <div className='chef-main bg-[#0E1317] p-5 '>
                            <img className='chef-recipe-img rounded-lg' src={picture} alt="" />
                            <div>
                                <h2 className="text-3xl font-bold mt-2 mb-3">Name: {name}</h2>
                                <p className='mb-3'><span className='font-bold'>Description:</span> {description}</p>
                                <p> <span className='font-bold'>Number of Recipes:</span> {numbersOfRecipes}</p>
                                <p className='mb-3'> <span className='font-bold'>Experience: </span>{experience}</p>
                                <div className='flex mb-3'>
                                    <HandThumbUpIcon className="me-3 h-6 w-6 text-blue-500" />
                                    <span>{likes}</span>
                                </div>
                            </div>

                            <div className='grid grid-cols-2 recipe-page-multiple mt-5 p-3'>
                                <div className='recipe-page-left'>
                                    <h2 className="text-2xl font-bold mt-3">Recipe Name</h2>
                                    {
                                        recipeName.map(r => <p> {r}</p>)
                                    }
                                </div>
                                <div className='recipe-page-right'>
                                    <h2 className="text-2xl font-bold mt-3">Ingredients</h2>
                                    {
                                        ingredients.map(ingredient => <p>
                                            {ingredient}
                                        </p>)
                                    }
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h2 className="">
                                    <span className='font-bold'>Cooking Method :</span>
                                    <span> {cookingMethod}</span>
                                </h2>

                                {/* ratings */}
                                <h2 className='mt-3'>
                                    <span className="font-bold">Ratings : </span>
                                    {ratings}
                                </h2>
                                <Rating style={{ maxWidth: 100 }} value={ratings} readOnly />
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