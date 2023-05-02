import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const AllChef = ({ chefs }) => {
    const { id, name, picture, years_of_experience, num_recipes } = chefs;


    return (
        <div className="card w-full bg-base-100 shadow">
            <figure className='pt-4 px-4 '><img className='rounded-lg' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-semibold text-4xl text-center">{name}</h2>
                <p><span className='font-semibold'> Experience:</span> {years_of_experience} year</p>
                <div className='flex justify-between gap-8 items-center '>
                    <div>
                        <p><span className='font-semibold'> Special recipes:</span> {num_recipes}</p>
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
    );
};

export default AllChef;