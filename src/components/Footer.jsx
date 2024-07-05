import React from 'react'
import room2 from '../assets/room2.jpg'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <footer class="flex flex-col space-y-10 justify-center m-10">

    <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
      <Link to='/' >
        <a class="hover:text-gray-900">Home</a>
        </Link>

        <Link to='/about-us' >
          <a class="hover:text-gray-900" >About</a>
        </Link>
        <Link to='/our-services' >
        <a class="hover:text-gray-900" >Services</a>
        </Link>
        {/* <a class="hover:text-gray-900" href="#">Media</a>
        <a class="hover:text-gray-900" href="#">Gallery</a> */}
        <Link to='/contact-us'>
          <a class="hover:text-gray-900" >Contact</a>
        </Link>
    </nav>

    <div class="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
    </div>
    <p class="text-center text-gray-700 font-medium">&copy; 2024 Digital Interiors All rights reservered.</p>
</footer>
  )
}

export default Footer