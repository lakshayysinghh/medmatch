import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does MedMatch offer?",
      answer:
        "MedMatch provides a range of services including advanced diagnostics, health monitoring, emergency care,           nutritional counseling, and more. Our offerings are designed to support comprehensive and personalized healthcare.",
    },
    {
      question: "How can I schedule an appointment?",
      answer:
        "You can easily schedule an appointment through our online booking system or by contacting our office directly. Choose your preferred date and time, and we'll handle the rest.",
    },
    {
      question: "What should I bring to my first appointment?",
      answer:
        "Please bring a valid ID, insurance information, and any relevant medical records or previous test results. This helps us provide the most accurate and efficient care.",
    },
    {
      question: "How does MedMatch ensure the quality of care?",
      answer:
        "MedMatch maintains high standards of care through rigorous protocols, advanced technology, and a team of highly skilled professionals. We are committed to continuous improvement and patient satisfaction.",
    },    
    {
      question: "What should I do in case of an emergency?",
      answer:
        "For immediate assistance, please visit our emergency care department or call emergency services. Our team is equipped to handle urgent medical situations with prompt and effective care.",
    },    
  ];

  return (
    <section id="faq" className="faq section bg-blue-100 p-16" data-aos="zoom-out" data-aos-delay="200">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-700" data-aos="fade-up">Frequently Asked Questions</h2>
          <p className=" mt-4" data-aos="fade-up">
          Here are answers to common queries about our services, appointments, and more.
          </p>
        </div>

        <div className="faq-container max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item p-5 mb-4 rounded-lg  ${activeIndex === index ? "bg-blue-500 text-white border-blue-500" : "bg-white hover:text-blue-500 "} transition-colors duration-300 cursor-pointer`}
              onClick={() => toggleFaq(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-lg">{faq.question}</h3>
                <BiChevronRight
                  className={`transform ${activeIndex === index ? "rotate-90" : ""} text-2xl`}
                />
              </div>
              <div
                className={`faq-content mt-2 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
