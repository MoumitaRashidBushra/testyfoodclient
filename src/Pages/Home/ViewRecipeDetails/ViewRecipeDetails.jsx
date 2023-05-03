import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ViewRecipeDetails = ({ r }) => {

    const { id, name, ingredients, cooking_method } = r;

    return (
        <div>
            <div className="card w-full bg-base-100 shadow">
                <figure className='pt-4 px-4 '><img className='rounded-lg' src="https://img.freepik.com/free-photo/top-view-indian-food-assortment_23-2148747714.jpg?w=740&t=st=1682965272~exp=1682965872~hmac=63a7499caffd80ea53fed855bf619a40db092a8edb85a81b5c8fb119feb03d09" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold text-4xl text-center">{name}</h2>
                    <p><span className='font-semibold pt-3'> Ingredients:</span>{
                        ingredients.map(i => <li> {i}</li>)



                    }  </p>

                    <div>
                        <p><span className='font-semibold pt-3'> Cooking_method:</span> {cooking_method} </p>

                        <div className='flex gap-2 items-center pt-3'>
                            <FaThumbsUp /> 100
                        </div>
                    </div>




                    <div className="card-actions justify-start mt-1">
                        <Link to={`/${id}`}>
                            <button className="btn btn-primary">Favorite Recipes </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewRecipeDetails;