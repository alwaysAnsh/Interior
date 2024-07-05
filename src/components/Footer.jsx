import React from 'react'
import room2 from '../assets/room2.jpg'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <footer class="w-full p-8 bg-white">
  <div
    class="flex flex-row flex-wrap items-center justify-start text-center bg-white gap-y-6 gap-x-12 md:justify-between">
    <Link to='/' >
      <img src={logo} alt="logo-ct" class="w-28" />
    </Link>
    <ul class="flex flex-wrap items-center gap-y-2 gap-x-8">
      <li>
        <Link to='/about-us' >
        <a 
          class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-darkblue focus:text-darkblue">
          About Us
        </a>
        </Link>
      </li>
      <li>
        <Link to='/our-services' >
        <a 
          class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-darkblue focus:text-darkblue">
          Our Services
        </a>
        </Link>
      </li>
      
      <li>
        <Link to='/contact-us' >
        <a 
          class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-darkblue focus:text-darkblue">
          Contact Us
        </a>
        </Link>
      </li>
    </ul>
  </div>
  <span class="block my-8 border-t border-blue-gray-50" />
  <p class="block font-sans text-base antialiased font-normal leading-relaxed text-center text-blue-gray-900">
    © 2024 Digital Interior
  </p>
</footer>
  )
}

export default Footer