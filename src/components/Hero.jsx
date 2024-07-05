import React from 'react'
import heroSection from '../assets/heroSection.png'
import smallscreen from '../assets/smallscreen.png'
import chairs from '../assets/chairs.png'
import '../App.css'

const Hero = () => {
  return (
    <div className = 'z-10 relative flex flex-row items-center justify-center  overflow-hidden   h-[90vh]  ' >
        
        <div className='flex flex-row items-center overflow-hidden justify-evenly relative' >
           
            <div className='lg:w-[40%] sm:w-full sm:mx-auto sm:text-center sm:top-[12%] md:top-[23%] md:gap-4 overflow-hidden flex flex-col absolute sm:gap-4 lg:gap-6 lg:top-[30%] lg:left-[10%]' >
            <h1 className=' font-maven lg:text-6xl overflow-hidden lg:text-white sm:text-2xl '  >
                  Experience the Interior Minimilist with <span className='lg:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  inline-block lg:text-transparent lg:bg-clip-text font-playfair sm:text-5xl sm:font-bold text-black sm:bg-yellow-50 sm:bg-opacity-40 sm:p-4 sm:mt-4 md:mt-4 sm:tracking-wide  ' >Digital Interiors</span>
                </h1>
                <p className='font-bold lg:bg-gradient-to-r from-cyan-200 via-purple-500 to-pink-500 lg:bg-clip-text lg:text-transparent font-maven lg:text-xl sm:text-white sm:font-normal italic sm:bg-black sm:p-4 sm:bg-opacity-40 ' >"From bland to grand, by an expert hand."</p>
                <div className='overflow-hidden  w-full sm:text-center md:text-center sm:mx-auto lg:mx-auto ' >
                <button className="cta">
          <span>Contact</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
</div> 
            </div>
           
           
            <div>
            <img className=' sm:hidden md:hidden lg:h-[760px] lg:block  w-screen overflow-y-hidden' src={heroSection} alt="image containing furnitures and images of living rooms" />
            <img className=' sm:h-full md:h-full lg:hidden xl:hidden 2xl:hidden  w-screen overflow-y-hidden' src={smallscreen} alt="image containing furnitures and images of living rooms" />
            </div>
        </div>  
                
           
            
        
    </div>
  )
}

export default Hero