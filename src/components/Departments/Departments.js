import React, { useState } from 'react';

import Dept1 from '../assets/img/departments-1.jpg';
import Dept2 from '../assets/img/departments-2.jpg';
import Dept3 from '../assets/img/departments-3.jpg';
import Dept4 from '../assets/img/departments-4.jpg';
import Dept5 from '../assets/img/departments-5.jpg';

const deptData = [
  {
    name: "Cardiology",
    description: [
      "Our Cardiology department specializes in diagnosing, treating, and managing a wide range of heart conditions.",
      "With state-of-the-art diagnostic tools and advanced treatment options, we provide comprehensive care for conditions such as heart disease, hypertension, arrhythmias, and more."
    ],
    imageUrl: Dept1
  },
  {
    name: "Neurology",
    description: [
      "Our Neurology department is dedicated to diagnosing and managing a wide array of neurological conditions with precision and expertise.",
      "We offer comprehensive evaluations and treatments including MRI, CT scans, our team of skilled neurologists provides accurate diagnoses and develops individualized treatment plans."
    ],
    imageUrl: Dept2
  },
  {
    name: "Hepatology",
    description: [
      "Our Hepatology department specializes in the comprehensive diagnosis and treatment of liver, gallbladder, and pancreatic disorders.",
      "We provide expert advanced diagnostic techniques, including liver biopsies, imaging studies, and blood tests, our experienced hepatologists deliver precise evaluations and tailored treatment plans."
    ],
    imageUrl: Dept3
  },
  {
    name: "Pediatrics",
    description: [
      "Our Pediatrics department is dedicated to providing comprehensive care for infants, children, and adolescents.",
      "We prioritize creating a supportive and compassionate environment for both patients and their families, ensuring that every child receives personalized care tailored to their unique needs."
    ],
    imageUrl: Dept4
  },
  {
    name: "Ophthalmology",
    description: [
      "Our Ophthalmology department offers advanced diagnostic and therapeutic services for a wide range of ocular conditions.",
      "We specialize in the comprehensive evaluation and management of diseases affecting the eyes and visual pathways, including glaucoma, macular degeneration, diabetic retinopathy, and cataracts.",
     
    ],
    imageUrl: Dept5
  }
];

function Departments() {
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  
  const toggleDepartment = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <div id='department' className="flex flex-col items-center justify-center p-4 bg-gray-50 min-h-screen w-full relative " data-aos="fade-up">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Departments</h2>
      <p className=' mb-8'>Explore our specialized departments, each equipped with expert staff and advanced technology
           to provide comprehensive care and services tailored to your needs</p>
      

      {/* Department List and Details */}
      <div className="flex flex-col lg:flex-row justify-center items-start w-full max-w-6xl relative" >
        {/* Department Names */}
        <div className="lg:w-1/4 relative">
          <ul className="flex flex-col space-y-4 relative" data-aos="fade-up" data-aos-delay="100">
            {deptData.map((dept, index) => (
              <li key={index} onClick={() => toggleDepartment(index)} className="cursor-pointer relative">
                <h3 className={`text-xl font-semibold text-gray-700 hover:text-blue-500 ${selectedIndex === index ? 'text-blue-500 ' : ''}`}>
                  {dept.name}
                </h3>
              </li>
            ))}
          </ul>
        </div>

        {/* Vertical Bar */}
        <div className="flex items-start " data-aos="fade-up" data-aos-delay="100">
          <div
            className={`w-1 h-8 bg-blue-500 rounded-full transition-all duration-300 ${selectedIndex !== null ? 'visible' : 'invisible'}`}
            style={{ transform: `translateY(${selectedIndex * 2.5}rem)` }} // Adjust the translateY value based on your layout
          ></div>
        </div>

        {/* Department Details */}
        <div className="lg:w-3/4 mt-4 lg:mt-0" data-aos="fade-up" data-aos-delay="250">
          {deptData.map((dept, index) => (
            selectedIndex === index && (
              <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start">
                <div className="lg:w-2/3 details p-4 order-2 lg:order-1">
                  <h3 className="text-2xl font-semibold mb-5">{dept.name}</h3>
                  <p className="italic text-gray-700 mb-4">{dept.description}</p>
                </div>
                <div className="lg:w-1/3 text-center order-1 lg:order-2 mb-4 lg:mb-0">
                  <img src={dept.imageUrl} alt={dept.name} className="img-fluid rounded-md" />
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default Departments;
