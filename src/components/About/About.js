import React, { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { IoCheckmarkCircleOutline, IoFlaskOutline, IoHeartOutline } from 'react-icons/io5';
import { FaUserMd, FaBuilding, FaFlask, FaAward } from 'react-icons/fa';


const About = () => {
  const [hasCounted, setHasCounted] = useState({
    doctors: false,
    departments: false,
    labs: false,
    awards: false,
  });

  const countsRef = useRef([]);

  const handleCount = (ref, setHasCountedKey, finalCount) => {
    if (ref.current) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !hasCounted[setHasCountedKey]) {
          let count = 0;
          const interval = setInterval(() => {
            if (count >= finalCount) {
              clearInterval(interval);
            } else {
              count++;
              ref.current.innerText = count;
            }
          }, 10);
          setHasCounted((prev) => ({ ...prev, [setHasCountedKey]: true }));
        }
      });

      observer.observe(ref.current);
      return () => observer.unobserve(ref.current);
    }
  };

  useEffect(() => {
    handleCount(countsRef.current[0], 'doctors', 85);
    handleCount(countsRef.current[1], 'departments', 18);
    handleCount(countsRef.current[2], 'labs', 12);
    handleCount(countsRef.current[3], 'awards', 150);
  }, [hasCounted]);

  return (
    <div className=" p-8 py-16" data-aos="zoom-out" data-aos-delay="200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Left side - Video Player */}
        <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <ReactPlayer
              url="https://youtu.be/TziWnfLYXUs?si=Wi5TJPqUSVeA2ewj" 
              volume={false}
              loop={true}
              playing={true}
              controls={true}
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 lg:pl-10">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">About Us</h2>
          <p className="text-gray-600 mb-6">
          At MedMatch, we're redefining healthcare with cutting-edge technology and a commitment to exceptional care. Our expert team provides precise diagnostics and personalized treatment, ensuring a tailored approach to your health needs. <br />
          We prioritize your experience with advanced insights, seamless care, and priority support. MedMatch combines innovation with compassion, making healthcare smarter and more efficient. Discover a new standard in health with MedMatch—where innovation meets exceptional patient care
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <IoFlaskOutline className=" w-16 h-16 text-blue-600 text-3xl mr-4" />
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                Advanced Diagnostics
                </h4>
                <p className="text-gray-500">
                offers cutting-edge technology for precise test results and efficient analysis. Our expert team delivers timely insights to enhance patient care and streamline diagnostics
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <IoCheckmarkCircleOutline className=" w-20 h-20 text-blue-600 text-3xl mr-4" />
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                Sanitation Excellence
                </h4>
                <p className="text-gray-500">
                ensures the highest standards of safety and cleanliness. Our commitment to rigorous sanitation protocols and advanced hygiene practices provides a pristine environment, supporting reliable and safe diagnostic services
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <IoHeartOutline className=" w-16 h-16 text-blue-600 text-3xl mr-4" />
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                Health Monitoring
                </h4>
                <p className="text-gray-500">
                provides real-time updates and personalized insights on key health metrics. Stay proactive with continuous tracking and informed decision-making for optimal wellness
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="  p-8 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div className="relative bg-white rounded-lg shadow-2xl p-6">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
            <FaUserMd className="text-white text-3xl" />
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mt-8">
            <span ref={(el) => (countsRef.current[0] = el)}>15+</span>
          </h3>
          <p className="text-gray-500">Doctors</p>
        </div>

        <div className="relative bg-white rounded-lg shadow-2xl p-6">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
            <FaBuilding className="text-white text-3xl" />
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mt-8">
            <span ref={(el) => (countsRef.current[1] = el)}>6+</span>
          </h3>
          <p className="text-gray-500">Departments</p>
        </div>

        <div className="relative bg-white rounded-lg shadow-2xl p-6">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
            <FaFlask className="text-white text-3xl" />
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mt-8">
            <span ref={(el) => (countsRef.current[2] = el)}>10+</span>
          </h3>
          <p className="text-gray-500">Research Labs</p>
        </div>

        <div className="relative bg-white rounded-lg shadow-2xl p-6">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
            <FaAward className="text-white text-3xl" />
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mt-8">
            <span ref={(el) => (countsRef.current[3] = el)}>8+</span>
          </h3>
          <p className="text-gray-500">Awards</p>
        </div>
      </div>
    </div>
  );
};

export default About;
