import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define Zod schema
const appointmentSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  department: z.string().min(1, 'Department is required'),
  doctor: z.string().min(1, 'Doctor selection is required'),
  message: z.string().optional(),
});

const Appointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = (data) => {
    console.log('Form data submitted:', data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-blue-100 p-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-7xl"
      >
        <h2 className="text-3xl font-semibold text-center mb-6">Appointment</h2>
        <p className="text-center mb-8 text-gray-500">
          Book your visit effortlessly with our convenient scheduling system
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Your Name"
              {...register('name')}
              className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Your Email"
              {...register('email')}
              className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="flex flex-col">
            <input
              type="tel"
              placeholder="Your Phone"
              {...register('phone')}
              className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="flex flex-col">
            <input
              type="date"
              {...register('date')}
              className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
          </div>

          <div className="flex flex-col">
            <input
              type="time"
              {...register('time')}
              className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
          </div>

          <div className="flex flex-col">
            <select
              {...register('department')}
              className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Department</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="pediatrics">Pediatrics</option>
            </select>
            {errors.department && <p className="text-red-500 text-sm">{errors.department.message}</p>}
          </div>

          <div className="flex flex-col">
            <select
              {...register('doctor')}
              className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Doctor</option>
              <option value="dr-smith">Dr. Smith</option>
              <option value="dr-jones">Dr. Jones</option>
              <option value="dr-taylor">Dr. Taylor</option>
            </select>
            {errors.doctor && <p className="text-red-500 text-sm">{errors.doctor.message}</p>}
          </div>
        </div>

        <div className="mb-6 flex flex-col">
          <textarea
            placeholder="Message (Optional)"
            {...register('message')}
            className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
          ></textarea>
        </div>
        <div className=' flex items-center justify-center'>

        <button
          type="submit"
          className="bg-blue-600 font-semibold text-white p-3 rounded-md  hover:bg-blue-700 transition"
        >
          Make an Appointment
        </button>
        </div>
      </form>
    </div>
  );
};

export default Appointment;
