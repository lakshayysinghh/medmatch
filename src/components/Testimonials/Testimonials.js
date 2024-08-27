import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import test1 from '../assets/img/testimonials/testimonials-1.jpg';
import test2 from '../assets/img/testimonials/testimonials-2.jpg';
import test3 from '../assets/img/testimonials/testimonials-3.jpg';
import test4 from '../assets/img/testimonials/testimonials-4.jpg';
import test5 from '../assets/img/testimonials/testimonials-5.jpg';

const testimonials = [
  {
    name: 'Saul Goodman',
    role: 'Ceo & Founder',
    image: test1,
    quote: 'MedMatch advanced diagnostic services were a game-changer for my health. The precision and speed of their tests helped my doctor identify my condition early and start the right treatment immediately. I am grateful for their exceptional care and support.',
  },
  {
    name: 'Sara Wilsson',
    role: 'Designer',
    image: test2,
    quote: 'The cardiology team at MedMatch is outstanding. Dr. Andersons expertise and the comprehensive care I received gave me confidence and clarity about my heart condition. Thanks to their thorough approach,Im now on the road to recovery.',
  },
  {
    name: 'Jena Karlis',
    role: 'Store Owner',
    image: test3,
    quote: 'My experience with MedMatch nutritional counseling was incredibly insightful.    The personalized plan and guidance provided helped me make meaningful changes to my diet and lifestyle, leading to significant improvements in my overall health.',
  },
  {
    name: 'Matt Brandon',
    role: 'Freelancer',
    image: test4,
    quote: 'After an emergency visit to MedMatch, I was impressed by the swift, professional care I received. The team acted quickly and effectively, ensuring that my treatment was handled with the utmost care and expertise.',
  },
  {
    name: 'John Larson',
    role: 'Entrepreneur',
    image: test5,
    quote: 'Dr. Jepson skill and compassion in neurosurgery were truly remarkable.Her meticulous approach and advanced surgical techniques made a profound difference in my recovery process. I am deeply appreciative of her expertise and the care provided by the entire team.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className=' bg-gray-100  h-screen w-full flex items-center justify-center' data-aos='fade-down'>
      <div className=' w-1/2 h-full flex flex-col justify-center items-center gap-8 space-y-4'>
      <h2 className="text-5xl font-bold  text-center">
      Testimonials
      </h2>
      <p className=' text-lg text-center font-normal '>

      Explore the experiences of our patients who       have received exceptional care at MedMatch. <br />      Read their personal stories and insights to       understand how our dedicated team and advanced      services have made a difference in their health     and well-being.
      </p>
      </div>
      {testimonials.length && (
        <div className=' flex items-center justify-center flex-col w-2/3  h-full p-8'>
          <div className=" bg-blue-50 flex flex-col md:flex-row  p-8 rounded-lg shadow w-full  mx-auto mb-8">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover"
            />
            <div className="flex flex-col justify-between pl-8">
              <p className="text-lg md:text-2xl text-black mb-4">
                {testimonials[currentIndex].quote}
              </p>
              <div>
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  {testimonials[currentIndex].name}
                </h4>
                <h5 className="text-base text-gray-600">
                  {testimonials[currentIndex].role}
                </h5>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-2">
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer transition-all hover:bg-blue-400 hover:text-white"
              onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
            >
              <HiChevronLeft className="w-5 h-5 text-secondary" />
            </div>

            <div
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer transition-all hover:bg-blue-400 hover:text-white"
              onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}
            >
              <HiChevronRight className="w-5 h-5 text-secondary" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
