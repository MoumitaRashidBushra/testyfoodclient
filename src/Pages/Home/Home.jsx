import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const Home = () => {
    return (
        <div>
            <section>
                <div className=' bg-slate-100 mb-14'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-2 lg:gap-4 lg:container lg:mx-auto px-5 lg:px-20 lg:pt-12'>
                        <div>
                            <h1 className='text-4xl lg:text-7xl font-semibold text-black'>The best <br /> indian dishes for <br /> <span className='text-indigo-600'>Testy food hunter</span></h1>
                            <p className='pt-2 lg:pt-6 pb-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                            <div className='pb-4'>
                                <a className="btn btn-info text-white ">Get Started</a>
                            </div>
                        </div>

                        <div>
                            <img src="https://img.freepik.com/free-photo/top-view-indian-food-assortment_23-2148747714.jpg?w=740&t=st=1682965272~exp=1682965872~hmac=63a7499caffd80ea53fed855bf619a40db092a8edb85a81b5c8fb119feb03d09" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 lg:container lg:mx-auto px-5 lg:px-20 lg:pt-12 mb-12'>
                    <div className="card w-full bg-base-100 shadow">
                        <figure className='pt-4 px-4 '><img className='rounded-lg' src="https://img.freepik.com/free-photo/happy-young-cook-uniform-showing-thumbs-up_171337-5330.jpg?w=740&t=st=1683009798~exp=1683010398~hmac=77d02563937dd1cd60832b11a95576e0a6c160ee9f076a00dc59d028a836451a" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-semibold text-4xl text-center">Ranveer Brar</h2>
                            <p><span className='font-semibold'> Experience:</span> 10 year</p>
                            <div className='flex justify-between gap-8 items-center '>
                                <div>
                                    <p><span className='font-semibold'> Special recipes:</span> 100</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FaThumbsUp /> 100
                                </div>
                            </div>

                            <div className="card-actions justify-start mt-1">
                                <button className="btn btn-primary">View Recipes </button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src="https://img.freepik.com/free-photo/top-view-indian-food-assortment_23-2148747714.jpg?w=740&t=st=1682965272~exp=1682965872~hmac=63a7499caffd80ea53fed855bf619a40db092a8edb85a81b5c8fb119feb03d09" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src="https://img.freepik.com/free-photo/top-view-indian-food-assortment_23-2148747714.jpg?w=740&t=st=1682965272~exp=1682965872~hmac=63a7499caffd80ea53fed855bf619a40db092a8edb85a81b5c8fb119feb03d09" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src="https://img.freepik.com/free-photo/top-view-indian-food-assortment_23-2148747714.jpg?w=740&t=st=1682965272~exp=1682965872~hmac=63a7499caffd80ea53fed855bf619a40db092a8edb85a81b5c8fb119feb03d09" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src="https://img.freepik.com/free-photo/top-view-indian-food-assortment_23-2148747714.jpg?w=740&t=st=1682965272~exp=1682965872~hmac=63a7499caffd80ea53fed855bf619a40db092a8edb85a81b5c8fb119feb03d09" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src="https://img.freepik.com/free-photo/top-view-indian-food-assortment_23-2148747714.jpg?w=740&t=st=1682965272~exp=1682965872~hmac=63a7499caffd80ea53fed855bf619a40db092a8edb85a81b5c8fb119feb03d09" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;