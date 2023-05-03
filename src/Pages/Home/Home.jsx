import React, { useEffect, useState } from 'react';

import AllChef from './AllChef/AllChef';

const Home = () => {
    const [allChefs, setAllChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allChef')
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
        </div>
    );
};

export default Home;