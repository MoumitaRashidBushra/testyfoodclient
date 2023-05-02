import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {


    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className=' bg-slate-100'>
            <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-12 pb-12 pt-5 '>
                <div className='border border-indigo-600 mx-auto lg:mx-60 px-8 lg:px-28 py-10 '>
                    <h1 className='text-center mb-4 font-bold text-3xl'>Please Login!!!</h1>
                    <form onSubmit={handleLogin}>
                        <label for="email">Email:</label> <br />
                        <input className='mt-1 w-72 lg:w-full mb-4 px-2 py-2' type="email" id="email" name="email" required /> <br />


                        <label for="password">Password:</label> <br />
                        <input className='mt-1 w-72 lg:w-full mb-4 px-2 py-2' type="password" id="password" name="password" required /><br />

                        <input className='mt-4 w-72 lg:w-full mb-8 px-1 py-1 border border-black font-bold text-2xl' type="submit" value="Login" id="submit" name="submit" required /><br />

                    </form>
                    <div className='text-center mt-2'>
                        <p className='font-bold'>Don't Have an Account?<button className="btn btn-outline  ms-2"><Link to='/register'>Register</Link></button> </p>
                        <h2 className='text-2xl font-bold mt-6'>Login With</h2>
                        <button className="btn btn-outline  mt-3"><FaGoogle /> Login wth Google</button> <br />
                        <button className="btn btn-outline  mt-4"><FaGithub /> Login with Github</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;