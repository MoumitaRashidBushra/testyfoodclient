import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (

        <div className=' lg:gap-4 lg:container lg:mx-auto px-5 lg:px-20 lg:pt-12'>
            <div className='text-center  '>

                <p>{error.message}</p>
                <img className="w-96 mx-auto mt-5 mb-5 rounded-xl" src="https://img.freepik.com/free-vector/404-error-page-found_24908-59516.jpg?w=740&t=st=1683006032~exp=1683006632~hmac=4de0485d8b03e724bd43597d8e804fa48ecb4936f68fb60f8201f9af5038a2d1" alt="" />
                <p className='text-5xl font-semibold'>404</p>
                <p className='text-5xl font-semibold mb-3'>Page not found</p>

            </div>

        </div>
    );
};

export default ErrorPage;