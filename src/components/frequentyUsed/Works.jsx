import React from 'react'
import image4 from '../../assets/allExterior.jpg'
import image5 from '../../assets/glasswork.jpg'
import Cards from './Cards'
import Button from './Button'

const Works = ({direction,background,image,subheading,heading}) => {
  return (
    <div className={`lg:flex ${direction} mt-12 mb-12  items-center gap-4  ${background} mx-auto justify-center text-darkblue `} >
            
            <div  className='lg:w-[40%] md:w-full sm:w-full lg:ml-10 p-3 flex flex-col items-start justify-start gap-4' >
              <h1 className='  lg:w-[80%`] xl:w-[60%] md:w-full sm:w-full  font-playfair font-bold md:text-2xl sm:text-2xl lg:text-3xl xl:text-4xl' >{heading}</h1>
              <p className=' lg:w-[90%] xl:w-[70%] md:w-full sm:w-full  text-sm font-maven' >
                         {subheading}    
                             </p>
              <Button/>
            </div>
            <div className=' overflow-y-clip lg:w-[60%] md:w-full sm:w-full drop-shadow-2xl'>
              <img src={image} alt="works interior image" className='object-contain h-full  ' />
            </div>
        </div>
  )
}

export default Works