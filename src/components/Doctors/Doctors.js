import React from 'react';
import Doc1 from '../assets/img/doctors/doctors-1.jpg'
import Doc2 from '../assets/img/doctors/doctors-2.jpg'
import Doc3 from '../assets/img/doctors/doctors-3.jpg'
import Doc4 from '../assets/img/doctors/doctors-4.jpg'

import { FaTwitter, FaInstagramSquare, FaLinkedin } from "react-icons/fa";


const Doctors = () => {
  const doctors = [
    {
      name: 'Walter White',
      position: 'Chief Medical Officer',
      description: 'With extensive experience in the medical field, the CMO oversees the quality and integration of patient care, ensuring adherence to the highest standards of medical practice.',
      image: Doc1,
      socials: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Sarah Jhonson',
      position: 'Anesthesiologist',
      description: 'Dr. Sarah Johnson specializes in administering anesthesia with a focus on patient safety and comfort.',
      image: Doc2,
      socials: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
    {
      name: 'William Anderson',
      position: 'Cardiology',
      description: 'His clinical focus includes the management of complex heart conditions, utilizing advanced imaging techniques and evidence-based therapies to optimize cardiovascular health and outcomes.',
      image: Doc3,
      socials: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Amanda Jepson',
      position: 'Neurosurgeon',
      description: 'Her expertise encompasses intricate procedures for spinal and cranial disorders, employing the latest surgical techniques and technologies to achieve precise outcomes and enhance neurological health.',
      image: Doc4,
      socials: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
  ];

  return (
    <section id="doctors" className="py-16" data-aos="zoom-out" data-aos-delay="200">
      <div className="container mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-semibold">Doctors</h2>
        <p className="text-gray-600 mt-4">Discover our team of highly skilled and experienced physicians dedicated to providing exceptional care.</p>
      </div>

      <div className="container  px-32 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {doctors.map((doctor, index) => (
            <div key={index} className="team-member flex flex-col lg:flex-row items-center lg:items-start bg-white  shadow-xl border-gray-100 border-2 rounded-lg p-8 transition-transform duration-300 cursor-pointer hover:scale-105" data-aos="fade-up" data-aos-delay={`${100 * (index + 1)}`}>
              <div className="pic mb-6 lg:mb-0 lg:mr-6 w-36 h-36 rounded-full overflow-hidden">
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
              </div>
              <div className="member-info text-center lg:text-left">
                <h4 className="text-xl font-semibold">{doctor.name}</h4>
                <span className="text-gray-500 text-sm mb-2 block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-px after:bg-gray-300">{doctor.position}</span>
                <p className="text-gray-600 mt-4">{doctor.description}</p>
                <div className="social mt-4 flex justify-center lg:justify-start space-x-2">
                    {doctor.socials.linkedin && (
                      <a href={doctor.socials.linkedin} className="bg-gray-200 hover:bg-blue-700 text-gray-600 hover:text-white w-9 h-9 flex items-center justify-center rounded-full transition">
                        <FaLinkedin className=' w-5 h-5'/>
                      </a>
                    )}
                  {doctor.socials.twitter && (
                    <a href={doctor.socials.twitter} className="bg-gray-200 hover:bg-blue-500 text-gray-600 hover:text-white w-9 h-9 flex items-center justify-center rounded-full transition">
                      <FaTwitter className=' w-5 h-5'/>
                    </a>
                  )}
                  
                  {doctor.socials.instagram && (
                    <a href={doctor.socials.instagram} className="bg-gray-200 hover:bg-pink-500 text-gray-600 hover:text-white w-9 h-9 flex items-center justify-center rounded-full transition">
                      <FaInstagramSquare className=' w-5 h-5'/>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
