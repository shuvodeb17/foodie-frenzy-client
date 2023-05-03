import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import './Blog.css';


const Blog = () => {
    const blogs = useLoaderData();
    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [12, 15]
    };

    return (
        <div>
            <div className='flex items-center justify-center'>
                <Pdf targetRef={ref} filename="blog-answer.pdf" options={options}>
                    {({ toPdf }) => <button className='btn btn-primary' onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </div>

            <div className="blog-container mx-auto">
                <div ref={ref} className='grid lg:grid-cols-2 gap-4'>
                    {
                        blogs.map(blog => <div>
                            <div className="container mx-auto px-4 lg:px-0">
                                <div className="card mx-auto">
                                    <div className="card-body mt-5">
                                        <h2 className="card-title">Q: {blog.question}</h2>
                                        <p>Ans: {blog.ans}</p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;