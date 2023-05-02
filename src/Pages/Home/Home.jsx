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