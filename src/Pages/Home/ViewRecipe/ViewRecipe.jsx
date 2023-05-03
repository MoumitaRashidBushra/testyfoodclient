import React, { useEffect, useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import ViewRecipeDetails from '../ViewRecipeDetails/ViewRecipeDetails';

const ViewRecipe = () => {
    const { id } = useParams();
    console.log(id)
    const chefD = useLoaderData();
    console.log(chefD)
    const { name, picture, years_of_experience, num_recipes, bio, recipes } = chefD;
    // const [details, setDetails] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/allChef/${id}`)
    //         .then(response => response.json())
    //         .then(data => setDetails(data))

    // }, [])



    return (
        <div>
            {
                // chefD.map(cd => <ViewRecipeDetails key={cd.id}
                //     cd={cd}
                // ></ViewRecipeDetails>)

                //<h1>{chefD.recipes[0].name}</h1>
            }
            {/* {
                details.map(chefsD => <ViewRecipeDetails
                    key={chefsD.id}
                    chefsD={chefsD}>

                </ViewRecipeDetails>)
            } */}
            {

            }

            <div>
                <div className=' bg-slate-100 mb-14'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-2 lg:gap-8 justify-between lg:container lg:mx-auto px-5 lg:px-20 lg:pt-12 pb-12'>
                        <div>
                            <h1 className='text-4xl lg:text-6xl font-semibold text-black'>{name}</h1>
                            <p className='pt-2 lg:pt-8 pb-5'>{bio}</p>
                            <p><span className='font-semibold'> Experience:</span> {years_of_experience} year</p>
                            <div className='flex  gap-8 items-center pt-2 '>
                                <div>
                                    <p><span className='font-semibold'> Special recipes:</span>{num_recipes}</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FaThumbsUp /> 100
                                </div>
                            </div>

                        </div>

                        <div>
                            <img src={picture} alt="" />
                        </div>
                    </div>
                </div>

            </div>

            <section>
                <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-1 pb-20 '>
                    <h1 className=' text-center text-4xl lg:text-5xl font-semibold text-black'> Chef's Special Recipes</h1>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 pt-12 '>
                        {
                            recipes.map(r => <ViewRecipeDetails key={id}
                                r={r}
                            ></ViewRecipeDetails>)
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ViewRecipe;