import React from 'react'
import heroSection from '../assets/landing.jpg'
import chairs from '../assets/chairs.png'
import '../App.css'

const Hero = () => {
  return (
    <div className = 'z-10 relative flex flex-row items-center justify-center  overflow-hidden   h-[90vh]  ' >
        {/* <div className=' absolute -bottom-24 -z-50 left-[20%]' >
        <img src={chairs} alt="chair lamp and flower pot" />
      </div> */}
        {/* <div className='flex flex-row items-center overflow-hidden justify-evenly' > */}
           
            {/* <div className='w-[40%]  overflow-hidden flex flex-col  gap-6' >
            <h1 className=' font-playfair text-8xl overflow-hidden text-darkblue '  >
                  Elevate your Interior Minimilist & Modern
                </h1>
                <div className='overflow-hidden text-left w-full' >
                <button className="cta">
          <span>Contact</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10"> */}
            {/* <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline> */}
          {/* </svg>
        </button>
</div> 
            </div> */}
           
           
            <div>
            <img className=' md:h-[760px]  w-screen overflow-y-hidden' src={heroSection} alt="image containing furnitures and images of living rooms" />
            </div>
        {/* </div>   */}
                
           
            
        
    </div>
  )
}

export default Hero