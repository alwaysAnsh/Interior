import React from 'react'
import living from '../assets/living.jpg'
import chairs from '../assets/chairs.png'
import { TypeAnimation } from 'react-type-animation';

const CountSection = () => {
  return (
    <div className=' z-10 flex flex-row justify-evenly w-full relative bg-darkblue p-10' >
      <div className='overflow-hidden flex flex-col  items-center gap-4' >
        <h3 className='text-8xl font-playfair text-white overflow-hidden' >1000+</h3>
        <p className='text-white' >Satisfied Customers</p>
      </div>
      <div className='h-52 w-52 rounded-md' >
        <img src={living} alt="living room interior" />
      </div>
      <div className='flex flex-col gap-4 w-[30%]' >
        <h2 className='font-playfair text-2xl text-yellow-200' >Cozy Sofa</h2>
        <p className='text-white' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quasi impedit ducimus dolorum ea, voluptate atque ex totam optio debitis.</p>
      </div>
      
    </div>
  )
}

export default CountSection