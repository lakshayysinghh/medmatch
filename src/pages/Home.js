import React from 'react'
import FrontPage from '../components/FrontPage'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Appointment from '../components/Appointment/Appointment'
import Departments from '../components/Departments/Departments'
import Doctors from '../components/Doctors/Doctors'
import FAQ from '../components/FAQ/FAQ'
import Testimonials from '../components/Testimonials/Testimonials'
import Gallery from '../components/Gallery/Gallery'
import Contact from '../components/ContactUs/Contact'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <div id='home'><FrontPage/></div>
      <div id='about'><About/></div>
      <div id='services'><Services/></div>
      <div id='appointment'><Appointment/></div>
      <Departments/>
      <Doctors/>
      <FAQ/>
      <Testimonials/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home