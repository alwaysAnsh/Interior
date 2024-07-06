import React from 'react'
import room2 from '../assets/room2.jpg'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";


const Footer = () => {
  return (
    <div className='w-screen bg-black border-t-2' >
      <footer className="flex flex-col space-y-5   justify-center mt-3 mb-16   ">

<nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium mt-4 ">
  <Link to='/' >
    <a class="hover:text-gray-900">Home</a>
    </Link>

    <Link to='/about-us' >
      <a class="hover:text-gray-900" >About</a>
    </Link>
    <Link to='/our-services' >
    <a class="hover:text-gray-900" >Services</a>
    </Link>
    
    <Link to='/contact-us'>
      <a class="hover:text-gray-900" >Contact</a>
    </Link>
</nav>

<div class="flex justify-center space-x-5 ">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebook className='text-xl text-blue-800' />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookMessenger className='text-xl text-blue-500' />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <PiInstagramLogoFill className='text-[21px] text-pink-400'/>
    </a>
    <a href="https://wa.me/9012841693" target="_blank" rel="noopener noreferrer">
        <IoLogoWhatsapp className='text-xl text-green-500' />
    </a>
    
</div>
<p class="text-center text-gray-700 font-medium ">&copy; 2024 Digital Interiors All rights reserved.</p>
<p class="text-center text-gray-700 font-medium ">&copy; Powered by <a href="https://rankved.com/" target='_blank' className='text-blue-300 underline'>Rankved.com</a></p>

</footer>
    </div>
  )
}

export default Footer