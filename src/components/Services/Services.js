import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHeartbeat, FaPills, FaUserAlt, FaBriefcaseMedical, FaStethoscope, FaMicroscope } from 'react-icons/fa';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="bg-gray-50 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">Services</h2>
        <p className="text-gray-600 mt-4">
        Experience excellence with our offerings, crafted to elevate every aspect of your healthcare journey with precision, innovation, and personalized care.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Service 1 */}
        <div data-aos="fade-up" className="relative bg-white p-8 shadow-lg mb-12 rounded-lg">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
            <FaHeartbeat className="text-white text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mt-8 text-center">Diagnostic Services</h3>
          <p className="text-gray-500 text-center mt-4">
          We offer a range of diagnostic services, including laboratory tests, advanced imaging studies such as X-rays and MRIs,
          and other specialized assessments to accurately identify and monitor medical conditions.
          </p>
        </div>
        
        {/* Service 2 */}
        <div data-aos="fade-left" className="relative bg-white p-8 shadow-lg  mb-12 rounded-lg">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
            <FaPills className="text-white text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mt-8 text-center">Nutritional Counseling</h3>
          <p className="text-gray-500 text-center mt-4">
          offers personalized nutritional counseling to help you achieve optimal 
          health through tailored diet plans and expert guidance.
          </p>
        </div>
        
        {/* Service 3 */}
        <div data-aos="fade-right" className="relative bg-white p-8 shadow-lg mb-12 rounded-lg">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
            <FaUserAlt className="text-white text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mt-8 text-center">Health Monitoring</h3>
          <p className="text-gray-500 text-center mt-4">
          offers continuous tracking of key health metrics to enable early detection and proactive management, ensuring timely and personalized care.
          </p>
        </div>

        {/* Service 4 */}
        <div data-aos="fade-up" className="relative bg-white p-8 shadow-lg rounded-lg">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
            <FaBriefcaseMedical className="text-white text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mt-8 text-center">Genetic Testing</h3>
          <p className="text-gray-500 text-center mt-4">
          offer genetic testing to analyze your DNA, identify genetic disorders, and assess potential health risks, 
          providing valuable insights for personalized care and preventive strategies.
          </p>
        </div>

        {/* Service 5 */}
        <div data-aos="fade-left" className="relative bg-white p-8 shadow-lg rounded-lg">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
            <FaStethoscope className="text-white text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mt-8 text-center">Emergency Care</h3>
          <p className="text-gray-500 text-center mt-4">
          provides rapid and expert emergency care to address urgent medical needs, 
          ensuring swift, effective treatment in critical situations.
          </p>
        </div>

        {/* Service 6 */}
        <div data-aos="fade-right" className="relative bg-white p-8 shadow-lg rounded-lg">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
            <FaMicroscope className="text-white text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mt-8 text-center">Health Guidance</h3>
          <p className="text-gray-500 text-center mt-4">
          We offer expert health guidance to enhance your understanding of wellness, disease prevention, 
          and effective condition management, supporting informed health decisions.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Services;
