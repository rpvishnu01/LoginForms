import React from 'react'
import LoginImg from '../Assets/login.jpg'

const Login = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img src={LoginImg} className="w-full h-full object-cover" />
        </div>
        <div className='bg-gray-100 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h1 className='text-xl font-bold text-center py-6 '>Brand</h1>
                <div className='flex flex-col py-2'>
                    <label>UserName</label>
                    <input type="text" className='border p-2 '/>
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input type="password" className='border p-2 ' />
                </div>
                <button className='w-full my-2 py-2 border bg-indigo-600 hover:bg-indigo-500 text-white'>Sign In</button>
                <div className='flex justify-between p-4'>
                    <p className='flex items-center'> <input type="checkbox" className='mr-2' />Remember me</p>
                    <p>Create An Account</p>
                </div>
            </form>

        </div>
      
    </div>
  )
}

export default Login
