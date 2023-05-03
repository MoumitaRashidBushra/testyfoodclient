import React, { useEffect, useState } from 'react';

import AllChef from './AllChef/AllChef';

const Home = () => {
    const [allChefs, setAllChefs] = useState([]);

    useEffect(() => {
        fetch('https://testy-food-hunter-server-moumitarashidbushra.vercel.app/allChef')
            .then(response => response.json())
            .then(data => setAllChefs(data))

    }, [])
    return (
        <div>

            <section>
                <div className=' bg-slate-100 mb-14'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-2 lg:gap-4 lg:container lg:mx-auto px-5 lg:px-20 lg:pt-8 pb-20'>
                        <div>
                            <h1 className='text-4xl lg:text-6xl font-semibold text-black'>The best <br /> indian dishes for <br /> <span className='text-indigo-600'>Testy food hunter</span></h1>
                            <p className='pt-2 lg:pt-6 pb-6'>Cooking is like love. It should be entered into with abandon or not at all.Food is an essential part of our lives. Not only is it necessary for our survival, but it also plays a crucial role in our social and cultural experiences. The way we eat and the foods we consume can tell a lot about our identity, values, and beliefs.</p>
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
                <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-4 mb-2 pt-4'>
                    <h1 className=' text-center text-4xl lg:text-5xl font-semibold text-black'> Recipe Categories  </h1>
                    <p className='text-center pt-4 px-6'>Recipes are an essential part of cooking and can be a helpful guide for creating delicious and nutritious meals. Recipe categories can be a useful tool for organizing and finding recipes that fit specific dietary needs or preferences. </p>


                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-10 pt-12 mb-24'>
                        <div className="card w-full bg-slate-300 shadow">
                            <div className="card-body">
                                <h2 className="text-2xl font-semibold text-center">Appetizers!</h2>

                            </div>

                        </div>

                        <div className="card w-full bg-slate-300 shadow">
                            <div className="card-body">
                                <h2 className="text-2xl font-semibold text-center">Main Dishes</h2>

                            </div>

                        </div>

                        <div className="card w-full bg-slate-300 shadow">
                            <div className="card-body">
                                <h2 className="text-2xl font-semibold text-center">Side Dishes</h2>

                            </div>

                        </div>

                        <div className="card w-full bg-slate-300 shadow">
                            <div className="card-body">
                                <h2 className="text-2xl font-semibold text-center">Desserts</h2>

                            </div>

                        </div>

                        <div className="card w-full bg-slate-300 shadow">
                            <div className="card-body">
                                <h2 className="text-2xl font-semibold text-center">Beverages</h2>

                            </div>

                        </div>

                        <div className="card w-full bg-slate-300 shadow">
                            <div className="card-body">
                                <h2 className="text-2xl font-semibold text-center">Breakfast</h2>

                            </div>

                        </div>

                        <div className="card w-full bg-slate-300 shadow">
                            <div className="card-body">
                                <h2 className="text-2xl font-semibold text-center"> Low-carb</h2>

                            </div>

                        </div>

                        <div className="card w-full bg-slate-300 shadow">
                            <div className="card-body">
                                <h2 className="text-2xl font-semibold text-center">Soups </h2>

                            </div>

                        </div>

                    </div>

                </div>

                <div>

                </div>
            </section>


            <section>
                <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-4 mb-2'>
                    <h1 className=' text-center text-4xl lg:text-5xl font-semibold text-black'> Our Special Chef's  </h1>
                    <p className='text-center pt-4 px-6'>Traditional dishes and cooking techniques have been passed down from generation to generation and can tell the story of a particular culture. Exploring different cuisines can broaden our horizons and help us appreciate the diversity of our world.</p>

                </div>
            </section>

            <section>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 lg:container lg:mx-auto px-5 lg:px-20 lg:pt-12 mb-12'>




                    {
                        allChefs.map(chefs => <AllChef
                            key={chefs.id}
                            chefs={chefs}
                        ></AllChef>)
                    }



                </div>
            </section>

            <section class=" container lg:container  lg:mx-auto px-12 lg:px-28 mt-28 mb-28">
                <div class="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-12 ">

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 pt-12 mb-24'>

                        <div>
                            <img src="https://img.freepik.com/free-photo/selection-indian-food-including-chicken-curry-other-spices_1340-23307.jpg?w=740&t=st=1683142230~exp=1683142830~hmac=2d71d3089c9f2f063705f81a9a710ce901c6ad50c383011a852390eee5c624d0" alt="" />
                        </div>

                        <div>
                            <img src="https://img.freepik.com/free-photo/indian-butter-chicken-black-bowl-black-background_123827-20757.jpg?w=740&t=st=1683141912~exp=1683142512~hmac=7a068321c2a3e43a8acce21ccb8c51083105919684b53d724861753b6cfea228" alt="" />
                        </div>

                        <div>
                            <img src="https://img.freepik.com/free-photo/sandwich-with-chicken-burger-tomatoes-lettuce_2829-16584.jpg?w=740&t=st=1683100860~exp=1683101460~hmac=1eab70bc02da16fbe38af09a7290bd2a6318a71c6ad3ba5b5e9ddef3761ef935" alt="" />
                        </div>
                        <div>
                            <img src="https://img.freepik.com/free-photo/lentil-salad-with-peppersonion-carrot-bowl-black-slate-background_123827-21265.jpg?w=740&t=st=1683097917~exp=1683098517~hmac=54dab928b85846a2b688d4da824f53ace34c0e4ac89a597415963ed641769a03" alt="" />
                        </div>

                    </div>


                    <div>
                        <h1 class="text-5xl font-bold">Subscribe to the best
                            recipes feed. </h1>
                        <div className="form-control text-center mt-6">

                            <label className="input-group">
                                <span>Email</span>
                                <input type="text" placeholder="info@site.com" className="input input-bordered" />
                            </label>
                        </div>
                        <p class="pt-7 pb-7">Food is essential to our existence. It provides us with the energy and nutrients needed for our bodies to function properly.  A balanced and nutritious diet can help prevent various chronic diseases, including heart disease, diabetes, and certain types of cancer. Nutrients found in fruits, vegetables, whole grains, and lean protein sources can help reduce the risk of these diseases.</p>

                        <h4 class="font-bold">Unique Taste</h4>
                        <p class="pt-1 pb-4">A Unique and different style from other teapots gives a luxurious and
                            minimalist
                            impression</p>
                        <h4 class="font-bold">Premium Quality</h4>
                        <p class="pt-2 pb-2">Premium Quality that makes tea more elegant and more durable when you use it.
                        </p>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default Home;