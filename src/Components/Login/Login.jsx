import React from 'react';
import clgImg from '../../assets/img/clg_img.jpg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigateTo = useNavigate();

  const changePage = () => {
    navigateTo('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='h-full flex items-center justify-center'>
      <div className='flex flex-col md:flex-row w-form lg:w-l_md h-half desktop:w-l_md l_desktop:w-half '>
        <div className='bg-img  sm:hidden md:w-11/12 lmd:w-9/12 s_photo:w-8/12 bg-cover   display-none md:block w-8/12 lg:w-8/12 h-half'>
          <div className='flex flex-col items-center justify-center h-t_half text-white'>
            <p className='font-bold uppercase text-w_lg lmd:text-large '>Welcome To</p>
            <p className='font-bold uppercase text-w_lg lmd:text-large'>Innovation Lab</p>
            <span className='capitalize md:sm_text lmd:text-md_text'>We are a community, together to grow skill</span>
          </div>
        </div>
        <div className='bg-slate-800 m-mobile:w-8/12 mobile:mx-auto mobile:w-10/12 lg:w-6/12 py-10 '>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-white capitalize text-medium font-bold'>get Started</p>
            <div className='flex gap-1 pl-4'>
              <span className='text-white text-center capitalize'>Create An  account?</span>
              <span className='text-emerald-600 font-semibold cursor-pointer hover:text-green-500' onClick={changePage}>Sign Up</span>
            </div>
          </div>
          <form className='mt-16 w-12/12 flex flex-col gap-6 items-center justify-center' onSubmit={handleSubmit}>
            
            <div className='flex gap-1 flex-col w-8/12 text-white text-lg'>
              <label className=' text-label'>Email</label>
              <input type='email' className=' bg-transparent outline-none border-b-2 border-green-500 text-white' />
            </div>
            <div className='flex flex-col gap-1  w-8/12 text-white text-lg'>
              <label className=' text-label'>Password</label>
              <input type='password' className=' bg-transparent outline-none border-b-2 border-green-500 text-white' />
            </div>
           
            <button className='w-7/12 mt-4 p-2 rounded-md text-white bg-emerald-500 hover:-translate-y-2 transition-all duration-300 ease-linear hover:bg-teal-500' type='submit'>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
