import React from 'react'
import heroSection from '../assets/heroSection.png'
import smallscreen from '../assets/smallscreen.png'
// import digital from '../assets/DigitalInt.mp4'
import digital from '../assets/small.mp4'
// import digitalmedium from '../assets/Digital.mp4'
import digitalmedium from '../assets/medium.mp4'
import chairs from '../assets/chairs.png'
import '../App.css'
import Button from './frequentyUsed/Button'
import { IoLogoWhatsapp } from "react-icons/io";


const Hero = () => {
  return (
    <div id='home' className = 'z-10 relative flex flex-row items-center justify-center  overflow-hidden   h-[90vh]  ' >
        
        <div className='flex flex-row items-center overflow-hidden justify-evenly relative' >
           
          <div className='sm:absolute sm:bottom-[15%] sm:left-[3%] sm:block lg:hidden ' >
          {/* <Button /> */}
          {/* <a href="https://wa.me/7617231365" target="_blank" rel="noopener noreferrer">
          <IoLogoWhatsapp className='text-4xl  text-center rounded-full bg-black z-50 border-2 border-green-900 text-green-500' />
        </a> */}
          </div>

            <div className='lg:w-[40%]     md:top-[23%] md:gap-4 overflow-hidden lg:flex lg:flex-col absolute sm:hidden md:block  lg:gap-6 lg:top-[30%] lg:left-[10%]' >
            <h1 className=' font-maven lg:text-6xl overflow-hidden lg:text-white sm:hidden md:hidden lg:block '  >
                  Experience the Interior Minimilist with <span className='lg:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  lg:inline-block lg:text-transparent lg:bg-clip-text font-playfair  sm:font-bold text-black   md:mt-4 sm:hidden md:hidden   ' >Digital Interiors</span>
                </h1>
                <p className='font-bold lg:bg-gradient-to-r from-cyan-200 via-purple-500 to-pink-500 lg:bg-clip-text lg:text-transparent font-maven lg:text-xl sm:text-white  italic  sm:hidden md:hidden lg:block' >"From bland to grand, by an expert hand."</p>
                {/* <div className='overflow-hidden   w-full  lg:block md:hidden sm:hidden lg:mx-auto ' >
                <button className="cta">
          <a href="https://wa.me/7617231365" target="_blank" rel="noopener noreferrer">Contact</a>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
</div>  */}
            </div>
           
           
            <div>
            <img className=' sm:hidden md:hidden lg:h-[760px] lg:block  w-screen overflow-y-hidden' src={heroSection} alt="image containing furnitures and images of living rooms" />
            {/* <img className=' sm:h-full md:h-full lg:hidden xl:hidden 2xl:hidden  w-screen overflow-y-hidden' src={smallscreen} alt="image containing furnitures and images of living rooms" /> */}
            <video loop muted autoPlay={true} className=' sm:h-full md:hidden lg:hidden xl:hidden 2xl:hidden  w-screen overflow-y-hidden'    alt="video of interior design by digital interiors"> 
              <source   src={digital} type='video/mp4' />
            </video>
            <video loop muted autoPlay={true} className=' md:h-full md:block  lg:hidden xl:hidden 2xl:hidden sm:hidden w-screen overflow-y-hidden'    alt="video of interior design by digital interiors"> 
              <source   src={digitalmedium} type='video/mp4' />
            </video>
            </div>
        </div>  
                
           
            
        
    </div>
  )
}

export default Hero