import React from 'react';
import ChefDetails from '../ChefDetails/ChefDetails';

const Chef = ({ allChef }) => {
    console.log(allChef);
    return (
        <div className='bg-[#151920] py-10'>
            <div className="container mx-auto">
                <h1 className="text-center text-white font-bold text-4xl">Chef</h1>
                <div className='grid grid-cols-3 gap-4 mt-5'>
                    {
                        allChef.map(chef => <ChefDetails
                            chef={chef}
                            key={chef.id}
                        ></ChefDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Chef;