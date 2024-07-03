import React from 'react'
import image4 from '../../assets/allExterior.jpg'
import image5 from '../../assets/glasswork.jpg'
import Cards from './Cards'
import Button from './Button'

const Works = ({direction,background,image}) => {
  return (
    <div className={`lg:flex ${direction} mt-12 mb-12  items-center gap-4  ${background} mx-auto justify-center text-darkblue `} >
            
            <div  className='lg:w-[40%] md:w-full sm:w-full lg:ml-10 p-3 flex flex-col items-start justify-start gap-4' >
              <h1 className='  lg:w-[80%`] xl:w-[60%] md:w-full sm:w-full  font-playfair font-bold md:text-2xl sm:text-2xl lg:text-3xl xl:text-4xl' >All Kinds of Exterior Works</h1>
              <p className=' lg:w-[90%] xl:w-[70%] md:w-full sm:w-full  text-sm font-serif' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus eaque quasi, delectus debitis minima minus sunt. Sed ut illo nostrum non modi! Esse aspernatur odio, facilis modi similique soluta iste expedita animi minus. Deleniti atque ut mollitia magni? Odit?</p>
              <Button/>
            </div>
            <div className=' overflow-y-clip lg:w-[60%] md:w-full sm:w-full drop-shadow-2xl'>
              <img src={image} alt="works interior image" className='object-contain h-full  ' />
            </div>
        </div>
  )
}

export default Works