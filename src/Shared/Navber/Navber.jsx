import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import ActiveLink from '../../Pages/Home/ActiveLink/ActiveLink';

const Navber = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <div className=' bg-slate-100'>
            <div className='flex justify-between items-center flex-col  md:flex-row  lg:container lg:mx-auto  lg:px-20 lg:pt-8 '>
                <div>
                    <a className="btn btn-ghost normal-case text-2xl font-extrabold">Testy Food</a>
                </div>

                <div >
                    <ActiveLink to='/' className='me-5'>Home</ActiveLink >
                    <ActiveLink to='blog' className='me-5'>Blog</ActiveLink>

                </div>

                <div className='flex justify-between items-center flex-col  md:flex-row gap-4'>
                    {
                        user && <div className="tooltip" data-tip={user?.name}>
                            <img className='w-16 rounded-full' src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1683023471~exp=1683024071~hmac=8e6ea5fbc73bd027c725087395e31196f600176ef4f30d27e32b572f15580742" />
                        </div>
                    }

                    <div>

                        {
                            user ?
                                <Link onClick={handleLogout} className='btn btn-info px-3 text-white'>Logout</Link >
                                :

                                <Link to='/login' className='btn btn-info px-3 text-white'>Login</Link >
                        }
                    </div>

                </div>



            </div>
        </div>
    );
};

export default Navber;