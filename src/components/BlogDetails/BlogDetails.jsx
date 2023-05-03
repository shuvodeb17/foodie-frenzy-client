import React from 'react';

const BlogDetails = ({ children }) => {
    console.log(children);
    // const { question, ans } = blog;
    return (
        <div>
            {/* <div className="container mx-auto px-4 lg:px-0">
                <div className="card lg:w-96 bg-gray-100 shadow-xl">
                    <div ref={ref} className="card-body mt-5">
                        <h2 className="card-title">Q: {question}</h2>
                        <p>Ans: {ans}</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default BlogDetails;