import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom'; // For redirection
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// Validation schema
const schema = z.object({
  email: z.string().email('Invalid email').nonempty('Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

const Login = () => {
  const navigate = useNavigate(); 
  const [showPassword, setShowPassword] = useState(false); //or i can do the text and pwd type chnges in the field input

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Implement form submission logic here
    navigate('/arena'); // Redirect to dashboard or home page after successful login
  };

  return (
    <div className="flex h-screen p-16 mt-16">
      {/* Left Side - Image */}
      <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        {/* Optional: Add content or styling for the left side if needed */}
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-6  relative">
        <div className="absolute top-0 -left-4 w-40 h-40 bg-blue-300   rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
        <div className="absolute top-0 -right-4 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-12 left-40 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="w-full max-w-md">
          <h2 className="text-3xl text-gray-800 text-center font-bold mb-4">Login</h2>

          {/* Google Sign-In Button */}
          <button
            type="button"
            className=" space-x-2 w-full py-2 px-4 border border-gray-300 rounded flex items-center justify-center mb-4 hover:bg-gray-100 text-gray-800"
          >
            <FcGoogle className=' h-8 w-8'/>
             <p className=' font-medium'> Continue with Google</p>
          </button>

          {/* Or Divider */}
          <div className="flex items-center justify-center mb-4">
            <hr className="w-1/3 border-gray-300" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="w-1/3 border-gray-300" />
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="mb-4">
              <input
                type="email"
                {...register('email')}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                className="w-full p-3 border border-gray-300 rounded pr-12"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 flex items-center justify-center"
              >
                {showPassword ? <FaEyeSlash className=' w-6 h-6' /> : <FaEye className=' w-6 h-6'/>}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <div className="flex items-center justify-between mb-4">
              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 text-md font-medium rounded-full"
              >
                Log in
              </button>

              <button
                type="button"
                onClick={() => navigate('/signup')} // Redirect to signup page
                className="text-blue-500 hover:border-b hover:border-blue-400 "
              >
                Haven{'`'}t registered yet?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;