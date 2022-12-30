import React from "react";
import LoginImg from "../Assets/login.jpg";
const Login2 = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        src={LoginImg}
        className="absolute w-full h-full object-cover mix-blend-overlay"
      />
      <div className='flex justify-center items-center h-full'>
            <form className="max-w-[400px] w-full mx-auto bg-white p-8">
                <h2 className="text-4xl font-bold text-center py-8">Brand</h2>
                <div className="flex flex-col mb-4 ">
                    <label className="relative" >UserName</label>
                    <input className="border relative bg-gray-100 p-2" type="text" />
                </div>
                <div className="flex flex-col mb-4 ">
                    <label className="relative"  >Password</label>
                    <input className="border relative bg-gray-100 p-2" type="password" />
                </div>
                <button className='w-full my-2 py-2 border bg-indigo-600 hover:bg-indigo-500 text-white'>Sign In</button>
                <p className='flex items-center relative'> <input type="checkbox" className='mr-2' />Remember me</p>
                <p className="relative text-center mt-8" >Not a member? Sign up now</p>
            </form>

        </div>
    </div>
  );
};

export default Login2;
