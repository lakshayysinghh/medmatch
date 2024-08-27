import React from 'react';
import backgroundImage from './assets/images/image1.png'; // Replace with the correct path to your image
import { IoDiamondOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa6";
import { GiTestTubes } from "react-icons/gi";

const FrontPage = () => {
  return (
    <div
      className="relative w-full bg-auto bg-center"
      style={{ backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover"}}
    >
      <div className="bg-gradient-to-r from-blue-50 to-white/5 pt-24">
        <div className="w-screen h-screen mx-auto py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-in">
          <div className="lg:text-left">
            <h2 className="text-3xl font-extrabold text-blue-800 sm:text-4xl px-16" data-aos="zoom-out" data-aos-delay="200">
              Welcome to MedMatch
            </h2>
            <p className="mt-4 text-lg text-gray-500 mb-5 px-16" data-aos="zoom-out" data-aos-delay="200">
            Revolutionizing Patient Care with Cutting-Edge Innovations
            </p>
          </div>
          <div className="mt-10 lg:mt-0 lg:flex lg:items-center px-16">
            <div className="bg-blue-700/85 text-white p-6 rounded-lg lg:w-1/2" data-aos="zoom-out" data-aos-delay="200">
              <h3 className="text-2xl font-bold" >Why Choose MedMatch?</h3>
              <p className="mt-4 text-base" >
              MedMatch excels in transforming patient care with innovative solutions and advanced technology. Our expert team delivers personalized, high-quality care in state-of-the-art facilities, ensuring safety and efficiency. We prioritize a seamless, patient-centered experience and are known for our trusted excellence in healthcare
              </p>
              <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">
                Learn More
              </button>
            </div>
            <div className="lg:flex lg:flex-grow lg:ml-6 mt-10 lg:mt-0 space-y-6 lg:space-y-0 lg:space-x-6" data-aos="zoom-out" data-aos-delay="200">
              <div className="bg-white/75 shadow p-6 rounded-lg text-center">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-briefcase-medical"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-800">
                <div className='flex justify-center items-center'><FaRegNewspaper /></div>
                Clinical Insights
                </h4>
                <p className="mt-2 text-gray-500">
                We offer vital data to boost care quality, foresee risks, and customize treatments for MedMatch users
                </p>
              </div>
              <div className="bg-white/75 shadow p-6 rounded-lg text-center">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-gem"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-800 ">
                  <div className='flex justify-center items-center'><IoDiamondOutline /></div>
                  Premium
                </h4>
                <p className="mt-2 text-gray-500">
                Unlock exclusive benefits: advanced insights, priority support, and personalized care for a superior healthcare experience
                </p>
              </div>
              <div className="bg-white/75 shadow p-6 rounded-lg text-center">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-folder"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-800">
                <div className='flex justify-center items-center'><GiTestTubes /></div>
                Sophisticated Systems
                </h4>
                <p className="mt-2 text-gray-500">
                Experience cutting-edge technology and seamless care with MedMatch’s Sophisticated Systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
