import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css'
const Contact = () => {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="zoom-out" data-aos-delay="200">
        
      </div>
      {/* End Section Title */}

      <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
      <iframe 
      className=' w-full'
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184618.50149782756!2d77.04417071716394!3d28.5272527355002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e1!3m2!1sen!2sin!4v1724348280294!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      {/* End Google Maps */}

      <section className="bg-white " data-aos="fade-up" data-aos-delay='300'>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <div>

        
        <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-blue-700 ">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback? Need details about our Appointment plan? Let us know.
        </p>
        </div>
        {/* <div className=' flex flex-col'>
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Location</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>

          </div>
        </div> */}
        <div>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 ">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  "
              placeholder="abc@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700 ">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 ">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Leave a comment..."
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
        </div>
      </div>
    </section>

    </section>
  );
};

export default Contact;
