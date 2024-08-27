import React, { useState } from 'react';
import SmoothScrollAnchor from '../SmoothScrollAnchor/SmoothScrollAnchor';
import { Link } from 'react-router-dom';

import Logo from '../assets/img/logo_medmatch_bg_none.png'

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);


    const openDropdown = () => {
        setDropdownOpen(true);
    };

    const closeDropdown = () => {
        setTimeout(() => {
            setDropdownOpen(false);
            },1000);
    };

  return (
    <div>
     <nav className= 'bg-blue-600  fixed z-50 w-full top-0'>
        <div className=' flex justify-between items-center mx-auto px-12 py-2'>
            <div className='text-white text-2xl font-bold flex items-center'>
              <img src={Logo} alt="MedMatch" className=' h-12 w-12'/>
               <a href="/">MedMatch</a> </div>
            <div className='flex items-center space-x-5 text-white font-bold'>
              
              
               <SmoothScrollAnchor id="#home"><a href='#home' className='hover:border-b-2'>Home</a></SmoothScrollAnchor>
               
               <SmoothScrollAnchor id="#about"><a href='#about' className='hover:border-b-2'>About</a></SmoothScrollAnchor>
               <SmoothScrollAnchor id="#services"><a href='#services' className='hover:border-b-2'>Services</a></SmoothScrollAnchor>
               <SmoothScrollAnchor id="#department"> <a href='#department' className='hover:border-b-2'>Departments</a></SmoothScrollAnchor>
               <SmoothScrollAnchor id="#doctors"> <a href='#doctors' className='hover:border-b-2'>Doctors</a></SmoothScrollAnchor>
               <SmoothScrollAnchor id="#contact"><a href='#contact' className='hover:border-b-2'>Contact Us</a></SmoothScrollAnchor>
               <div className='relative space-x-4'>

                <Link to="/signup">
                <button 
                onMouseEnter={() => openDropdown(true)}
                onMouseLeave={() => closeDropdown(false)} className='text-white hover:text-gray-300 p-1 bg-blue-700 hover:scale-105 rounded-full px-6 py-3'>Sign Up</button></Link>
                <Link to="/login">
                <button 
                onMouseEnter={() => openDropdown(true)}
                onMouseLeave={() => closeDropdown(false)} className='text-white hover:bg-blue-600 p-1 border-2 border-blue-900 hover:scale-105 rounded-full px-6 py-3'>Log In</button></Link>
                
               </div>
            </div>
        </div>
     </nav>
    </div>
  )
};

export default Navbar
