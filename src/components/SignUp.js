import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom'; // For redirection

// Validation schema
const schema = z.object({
  name: z.string().nonempty('Name is required'),
  username: z.string().nonempty('Username is required'),
  email: z.string().email('Invalid email').nonempty('Email is required'),
  phone: z
    .string()
    .regex(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .optional(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  confirmPassword: z.string().min(8, 'Confirm password must be at least 8 characters long'),
  agreeToTerms: z.boolean().refine((val) => val, 'You must agree to the terms and conditions'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

const SignUp = () => {
  const navigate = useNavigate(); // For redirection
  const [role, setRole] = useState('patient'); // Default role

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(role);
    console.log('Form Data:', data);
    
    // Implement form submission logic here
    navigate('/login'); // Redirect to login page after successful signup
  };

  // Handle role change
  const handleRoleChange = (e) => {
    const newRole = e.target.value;
    setRole(newRole);
  };

  return (
    <div className="flex h-screen p-16 mt-16">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-12 relative">
        <div className="absolute top-0 -left-12 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-8 -right-10 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-12 right-20 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        {/* Form  */}
        <div className="w-full max-w-md ">
          <h2 className="text-3xl text-gray-700 font-bold mb-4 text-center">Sign Up</h2>

          {/* Signup Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="mb-4 relative">
              {/* <label htmlFor="role" className="text-sm font-medium text-gray-400 mb-2">
                Sign up as?
              </label> */}
              <select
                id="role"
                onChange={handleRoleChange}
                // value={role}
                className="w-full p-3 text-gray-700 bg-white border border-gray-500"
                defaultValue=""
              >
                <option value="" disabled>Sign up as?</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                {/* <option value="admin">Admin</option> */}
              </select>
            </div>

            <div className="mb-4">
              <input
                type="text"
                {...register('name')}
                className="w-full p-3 border border-gray-500"
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-4">
              <input
                type="text"
                {...register('username')}
                className="w-full p-3 border border-gray-500"
                placeholder="Username"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
              )}
            </div>

            <div className="mb-4">
              <input
                type="email"
                {...register('email')}
                className="w-full p-3 border border-gray-500"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4 relative">
              <input
                type="text"
                {...register('phone')}
                className="w-full p-4 pl-12 border border-gray-500"
                placeholder="Phone Number"
              />
              <p className="absolute inset-y-0 left-0 px-3 flex items-center text-gray-600 justify-center">
                +91
              </p>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div className="flex gap-2">
              <div className="mb-4">
                <input
                  type="password"
                  {...register('password')}
                  className="w-full p-3 border border-gray-500"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  {...register('confirmPassword')}
                  className="w-full p-3 border border-gray-500"
                  placeholder="Confirm Password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                )}
              </div>
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                {...register('agreeToTerms')}
                className="mr-2"
              />
              <label className="text-sm">
                I agree to the <a href="/terms" className="text-blue-500">Terms and Conditions</a>
              </label>
              {errors.agreeToTerms && (
                <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-full"
            >
              <p>Sign Up</p>
            </button>
            <p className="pb-4 text-center">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/login')} // Redirect to login page
                className="text-blue-600 hover:border-b hover:border-blue-400"
              >
                Log in
              </button>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        {/* Optional: Add content or styling for the right side if needed */}
      </div>
    </div>
  );
};

export default SignUp;
