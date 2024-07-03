import {React, useState} from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'

const ServicesSoFar = () => {
    const [counteron, setCounterOn ] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit = {() => setCounterOn(false)}>
    <div className='mx-auto  services bg-gradient-to-r from-cyan-700 to-cyan-900 sm:h-[150px] md:h-[150px] lg:h-[180px] flex flex-row justify-center items-center ' >
        
        <div className=' flex flex-col items-center justify-center gap-3  opacity-100  text-white '>
            <div>
            {counteron && <CountUp end={100} duration={3} className= '  lg:text-5xl md:text-3xl sm:text-3xl xl:text-6xl font-extrabold font-playfair'/>}<span className=' lg:text-3xl md:text-xl sm:text-xl xl:text-4xl'  >+</span>
            </div>
            <span className=' text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-white  lg:text-xl md:text-md sm:text-md xl:text-2xl font-playfair font-extrabold sm:ml-[10px] md:ml-[28px] lg:ml-0' >Happy Clients</span>
        </div>
        <div className=' flex flex-col items-center justify-center gap-3  opacity-100  text-white'>
            <div>
            {counteron && <CountUp end={100} duration={3} className='lg:text-5xl md:text-3xl sm:text-3xl xl:text-6xl font-extrabold font-playfair'/>}<span className='lg:text-3xl md:text-xl sm:text-xl xl:text-4xl' >%</span>
            </div>
            <span className='bg-gradient-to-r from-pink-500 to-amber-500  text-transparent bg-clip-text lg:text-xl md:text-md sm:text-md xl:text-2xl font-playfair font-extrabold sm:ml-[20px] md:ml-[40px]  lg:ml-0'>Client Satisfaction</span>
        </div>
        <div className=' flex flex-col items-center justify-center gap-3  opacity-100  text-white'>
            <div>
            {counteron && <CountUp end={20} duration={3} className='lg:text-5xl md:text-3xl sm:text-3xl xl:text-6xl font-extrabold font-playfair'/>}<span className='lg:text-3xl md:text-xl sm:text-xl xl:text-4xl'>+</span>
            </div>
            <span className=' text-transparent  bg-clip-text bg-gradient-to-r from-amber-200 to-green-700 lg:text-xl md:text-md sm:text-md xl:text-2xl font-playfair font-extrabold sm:ml-[20px] md:ml-[40px] lg:ml-0 '>Projects Completed</span>
        </div>
        
        
        
    </div>
    </ScrollTrigger>
  )
}

export default ServicesSoFar