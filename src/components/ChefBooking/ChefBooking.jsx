import React from 'react';

const ChefBooking = () => {
    return (
        <div className='bg-[#101418] py-10'>
            <div className="container mx-auto">
                <div className='text-center text-white'>
                    <h1 className='text-4xl font-bold'>Book A Chef On Time</h1>
                    <div className='flex justify-center gap-4 mt-5 text-black'>
                        <div>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="text" placeholder="Your Phone" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className='flex justify-center gap-4 mt-5  text-black'>
                        <div>
                            <input type="text" placeholder="Person" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="date" placeholder="Date" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="text" placeholder="Time" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <button className='btn btn-primary mt-5'>Booking Chef</button>
                </div>
            </div>
        </div>
    );
};

export default ChefBooking;