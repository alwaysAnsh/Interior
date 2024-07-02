import {React, useState} from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'

const ServicesSoFar = () => {
    const [counteron, setCounterOn ] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit = {() => setCounterOn(false)}>
    <div className='mx-auto  services bg-gradient-to-r from-cyan-700 to-cyan-900  h-[180px] flex flex-row justify-between items-center ' >
        
        <div className=' flex flex-col items-center justify-center gap-3  opacity-100  text-white'>
            <div>
            {counteron && <CountUp end={100} duration={3} className='text-6xl font-extrabold font-playfair'/>}<span className='text-4xl'  >+</span>
            </div>
            <span className='inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-white text-2xl font-playfair font-extrabold ' >Happy Clients</span>
        </div>
        <div className=' flex flex-col items-center justify-center gap-3  opacity-100  text-white'>
            <div>
            {counteron && <CountUp end={100} duration={3} className='text-6xl font-extrabold font-playfair'/>}<span className='text-4xl' >%</span>
            </div>
            <span className='bg-gradient-to-r from-pink-500 to-amber-500 inline-block text-transparent bg-clip-text text-2xl font-playfair font-extrabold'>Client Satisfaction</span>
        </div>
        <div className=' flex flex-col items-center justify-center gap-3  opacity-100  text-white'>
            <div>
            {counteron && <CountUp end={20} duration={3} className='text-6xl font-extrabold font-playfair'/>}<span className='text-4xl'>+</span>
            </div>
            <span className='inline-block text-transparent  bg-clip-text bg-gradient-to-r from-amber-200 to-green-700 text-2xl font-playfair font-extrabold '>Projects Completed</span>
        </div>
        
        
        
    </div>
    </ScrollTrigger>
  )
}

export default ServicesSoFar