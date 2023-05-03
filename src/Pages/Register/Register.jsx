import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleRegister = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)) {

            setError('Please add 9 characters at least one uppercase letter, one lowercase letter, and one number or special character');
            return;
        }
        // else {
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('')
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })

        // }




    }


    return (
        <div className=' bg-slate-100'>
            <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-12 pb-12 pt-5 '>
                <div className='border border-indigo-600 mx-auto lg:mx-60 px-8 lg:px-28 py-10 '>
                    <h1 className='text-center mb-4 font-bold text-3xl'>Please Register!!!</h1>
                    <form onSubmit={handleRegister}>
                        <label for="name">Name:</label> <br />
                        <input className='mt-1 w-72 lg:w-full mb-4 px-2 py-2' type="text" id="name" name="name" required /><br />


                        <label for="photo">Photo URL:</label> <br />
                        <input className='mt-1 w-72 lg:w-full mb-4 px-2 py-2' type="text" id="photo" name="photo" required /><br />


                        <label for="email">Email:</label> <br />
                        <input className='mt-1 w-72 lg:w-full mb-4 px-2 py-2' type="email" id="email" name="email" required /> <br />


                        <label for="password">Password:</label> <br />
                        <input className='mt-1 w-72 lg:w-full mb-4 px-2 py-2' type="password" id="password" name="password" required /><br />

                        <p className='text-red-500'>{error}</p>

                        <input className='mt-4 w-72 lg:w-full mb-8 px-1 py-1 border border-black font-bold text-2xl' type="submit" value="Register" id="submit" name="submit" required /><br />
                    </form>
                    <div className='text-center mt-2'>
                        <p className='font-bold'>Already Have an Account?<button className="btn btn-outline  ms-2"><Link to='/login'>Login</Link></button> </p>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Register;