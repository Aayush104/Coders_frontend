import React from 'react';
import clgImg from '../../assets/img/clg_img.jpg'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigateTo = useNavigate()

  const changePage = ()=>{
    navigateTo('/Login')

  }

const handleSubmit = (e)=>{
  e.preventDefault()
}

  return (
    <div className='h-full flex items-center justify-center'>
      <div className='flex bg-red-700 w-half  h-half'>
        <div className='bg-img bg-cover w-8/12 h-half' >
        <div className='flex flex-col items-center justify-center h-t_half text-white '>
        <p className='font-bold uppercase text-medium'>Welcome To</p>
        <p className='font-bold uppercase  text-medium'>Innovation Lab</p>
        <span className='capitalize'>We are a community, together to grow skill</span>
        </div>
      
       
        </div>
        <div className=' bg-slate-800 w-6/12 py-8'>
          <div className='flex  flex-col justify-center items-center'>
            <p className='text-white capitalize text-medium font-bold '>get Started</p>
           <div className='flex gap-1 pl-4'>
            <span className='text-white text-center  '>Already Have an account?</span>
            <span className='text-emerald-600 font-semibold cursor-pointer hover:text-green-500' onClick={changePage}>Sign In</span>
           </div>
           
          </div>
          
          <form className='mt-8  w-12/12 flex flex-col gap-4 items-center justify-center ' onSubmit={handleSubmit}>
           <div className='flex flex-col w-8/12 text-white text-lg'>
           
           <label>Username</label>
            <input type='text' className='text-black bg-transparent outline-none border-b-2  border-green-500'></input>
           </div>
            
           <div className='flex flex-col w-8/12 text-white text-lg'>
           
           <label>Email</label>
            <input type='email' className='text-black bg-transparent outline-none border-b-2  border-green-500'></input>
           </div>
           <div className='flex flex-col w-8/12 text-white text-lg'>
           
           <label>Password</label>
            <input type='password' className='text-black bg-transparent outline-none border-b-2  border-green-500'></input>
           </div>
           <div className='flex flex-col w-8/12 text-white text-lg'>
           
           <label>Confirm Password</label>
            <input type='password' className='text-black bg-transparent outline-none border-b-2  border-green-500'></input>
           </div>
           <button className=' w-7/12 mt-4 p-2 rounded-md text-white bg-emerald-500  hover:-translate-y-2 transition-all duration-300 ease-linear hover:bg-teal-500' type='submit'>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
