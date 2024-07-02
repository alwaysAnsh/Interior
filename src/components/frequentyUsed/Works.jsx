import React from 'react'
import image4 from '../../assets/allExterior.jpg'
import image5 from '../../assets/glasswork.jpg'
import Cards from './Cards'
import Button from './Button'

const Works = ({direction,background,image}) => {
  return (
    <div className={`flex ${direction} mt-12 mb-12  items-center gap-4  ${background} mx-auto justify-center text-darkblue `} >
            
            <div  className='w-[40%] ml-10 p-3 flex flex-col items-start justify-start gap-4' >
              <h1 className=' w-[60%] font-playfair font-bold text-4xl' >All Kinds of Exterior Works</h1>
              <p className=' w-[70%] text-sm font-serif' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus eaque quasi, delectus debitis minima minus sunt. Sed ut illo nostrum non modi! Esse aspernatur odio, facilis modi similique soluta iste expedita animi minus. Deleniti atque ut mollitia magni? Odit?</p>
              <Button/>
            </div>
            <div className=' overflow-y-clip w-[60%] drop-shadow-2xl'>
              <img src={image} alt="works interior image" className='object-contain h-full transition-all duration-3000 ease-in ' />
            </div>
        </div>
  )
}

export default Works