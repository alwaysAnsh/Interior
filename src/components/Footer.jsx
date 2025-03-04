import React from 'react'
import room2 from '../assets/room2.jpg'
import {Link} from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { scrollToTop } from '../utils/srollToTop';


const Footer = () => {
  return (
    <div className='w-screen bg-black border-t-2 md:flex sm:flex sm:flex-col lg:flex-row ' >
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.04426823169177!2d77.43911307479932!3d28.548486500000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce97524f632ff%3A0x57db1018e4906af5!2sDigital%20interior!5e0!3m2!1sen!2sin!4v1720880567095!5m2!1sen!2sin" width="600" height="450"  allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <footer className="flex flex-col space-y-5   justify-center mt-3 mb-16   ">

<nav class="flex justify-center flex-wrap gap-6 text-white font-medium mt-4 ">
  <Link to='/' onClick={scrollToTop} >
    <a className="hover:text-yellow-500 transition-all duration-200 " >Home</a>
    </Link>

    <Link to='/about-us'onClick={scrollToTop}  >
      <a className="hover:text-yellow-500 transition-all duration-200 " >About</a>
    </Link>
    <Link to='/our-services' onClick={scrollToTop} >
    <a className="hover:text-yellow-500 transition-all duration-200 " >Services</a>
    </Link>
    
    <Link to='/contact-us' onClick={scrollToTop} >
      <a className="hover:text-yellow-500 transition-all duration-200 " >Contact</a>
    </Link>
</nav>

<div class="flex justify-center space-x-5 ">
    <a href="https://m.facebook.com/100069336482916/"  target="_blank" rel="noopener noreferrer">
    <FaFacebook className='text-xl text-blue-800' />
    </a>
    <a href="https://m.facebook.com/100069336482916/" target="_blank" rel="noopener noreferrer">
    <FaFacebookMessenger className='text-xl text-blue-500' />
    </a>
    <a href="https://www.instagram.com/mr.naseem_mobil_no_9012841693?igsh=enAxOHl2eWt0ZXNw" target="_blank" rel="noopener noreferrer">
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