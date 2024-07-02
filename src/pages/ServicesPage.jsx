import {React,useState} from 'react'
import image from '../assets/image6.jpg'
import interiorData from '../data/interiorData'
import image4 from '../assets/allExterior.jpg'
import glasswork from '../assets/glasswork.jpg'
import glasswork2 from '../assets/glasswork2.jpg'
import Button from '../components/frequentyUsed/Button'
import Navbar from '../components/Navbar'
import Cards from '../components/frequentyUsed/Cards'
import Works from '../components/frequentyUsed/Works'
import ServicesSoFar from '../components/ServicesSoFar'



const ServicesPage = () => {
  

  return (
    <div >
        <Navbar/>
        <div className="relative" >
            
            <div className='relative' >
            <img src={image} alt="image containing interior " className=' w-full h-[700px] relative' />
            <div className=' absolute left-[28%] bottom-[8%] z-10 flex flex-col gap-6 items-center justify-center' >
                <h1 className='font-playfair text-5xl text-white font-bold text-center' >Dream Interiors made possible</h1>
                <div><Button/></div>
            </div>
            </div>
            <div className='shadow-overlay' ></div>            
        </div>

        <div className='mt-10 flex flex-col gap-6 mx-auto text-center items-center justify-center' >
            <h1 className='font-playfair text-4xl text-darkblue uppercase  font-bold ' >The complete home interiors experience</h1>
            <h3 className='text-lg italic  w-[50%] ' >No more dreaming about your interiors.  Digital Interiors brings together award-winning designers, service partners and brands, to help you take your home interiors from dream to reality.</h3>
        </div>
        
       
        
        
       <div className='bg-darkblue' >
       <Works direction={"flex-row"} background={"bg-lightgreen"} image={image4}/>
        <Works  direction={"flex-row-reverse"} background={"bg-white"} image={glasswork}/>
        <Works direction={"flex-row"} background={"bg-lightgreen"} image={glasswork2}/>
       </div>

        <h1 className='mx-auto text-center font-extrabold text-5xl font-playfair uppercase mb-5  text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-800' >Services so Far</h1>
      <ServicesSoFar/>
      <div className=' mt-5 mb-5 flex flex-col items-center justify-center mx-auto  ' >
        <div>
        <Button/>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage