import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navber = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className=' bg-slate-100'>
            <div className='flex justify-between items-center flex-col  md:flex-row  lg:container lg:mx-auto  lg:px-20 lg:pt-8 '>
                <div>
                    <a className="btn btn-ghost normal-case text-2xl font-extrabold">Testy Food</a>
                </div>

                <div >
                    <Link to='/' className='me-5'>Home</Link >
                    <Link to='statistics' className='me-5'>Statistics</Link >
                    <Link to='job' className='me-5' >Applied Jobs</Link >
                    <Link to='blog' className='me-5'>Blog</Link >
                </div>

                <div className='flex justify-between items-center flex-col  md:flex-row gap-4'>
                    {
                        user && <div className="tooltip" data-tip={user.displayName}>
                            <img className='w-16 rounded-full' src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1683023471~exp=1683024071~hmac=8e6ea5fbc73bd027c725087395e31196f600176ef4f30d27e32b572f15580742" />
                        </div>
                    }

                    <div>

                        {
                            user ?
                                <Link to='/login' className='btn btn-info px-3 text-white'>Logout</Link >
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