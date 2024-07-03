import {React,useState} from 'react'
import living from '../assets/living.jpg'
import chairs from '../assets/chairs.png'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'


const CountSection = () => {
  const [counteron, setCounterOn ] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit = {() => setCounterOn(false)} >
      <div className=' z-10 flex md:flex-col sm:flex-col  lg:flex-row md:justify-center lg:justify-evenly w-full sm:gap-6 gap-0 relative bg-darkblue  lg:p-10' >
      <div className='overflow-hidden flex flex-col  items-center gap-4' >
        <div className='flex flex-row items-center justify-center gap-2' >
        {counteron && <CountUp end={100} duration={3} className=' lg:text-7xl md:text-5xl sm:text-5xl xl:text-8xl font-playfair text-white overflow-hidden'/>}<span className=' lg:text-3xl md:text-xl text-white sm:text-2xl xl:text-4xl'  >+</span>

        </div>
        {/* <h3 className=' lg:text-7xl md:text-5xl sm:text-5xl xl:text-8xl font-playfair text-white overflow-hidden' >100+</h3> */}
        <p className='text-white' >Satisfied Customers</p>
      </div>
      <div className='lg:h-52 h-full lg:w-52 w-screen rounded-md' >
        <img src={living} alt="living room interior" />
      </div>
      <div className='flex flex-col gap-4 lg:w-[30%] w-full' >
        <h2 className='font-playfair text-2xl text-yellow-200 sm:pl-2 md:pl-2 lg:pl-0' >Cozy Sofa</h2>
        <p className='text-white sm:pl-2 md:pl-2 lg:pl-0 sm:pb-4 md:pb-4 lg:pb-0 text-sm ' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quasi impedit ducimus dolorum ea, voluptate atque ex totam optio debitis.</p>
      </div>
      
    </div>
    </ScrollTrigger>
  )
}

export default CountSection