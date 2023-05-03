import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="card bg-gray-100 shadow-xl">
                    <div className="card-body mt-5">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;