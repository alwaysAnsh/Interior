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
            <img src={image} alt="image containing interior " className=' w-full  sm:h-[500px] md:h-[550px] lg:h-[700px] relative' />
            <div className=' absolute sm:left-[10%] sm:bottom-[4%] md:left-[12px] md:bottom-[4%] lg:left-[28%] lg:bottom-[8%] z-10 flex flex-col gap-6 items-center justify-center' >
                <h1 className='font-playfair lg:text-5xl md:text-4xl sm:text-3xl text-white  font-bold text-center' >Dream Interiors made possible</h1>
                <div><Button/></div>
            </div>
            </div>
            <div className='shadow-overlay' ></div>            
        </div>

        <div className='mt-10 flex flex-col gap-6 mx-auto text-center items-center justify-center' >
            <h1 className='font-playfair lg:text-4xl md:text-3xl sm:text-2xl text-darkblue uppercase  font-bold ' >The complete home interiors experience</h1>
            <h3 className='text-lg italic sm:text-sm md:text-sm lg:text-lg  md:w-full sm:w-full lg:w-[90%] xl:w-[50%] ' >No more dreaming about your interiors.  Digital Interiors brings together award-winning designers, service partners and brands, to help you take your home interiors from dream to reality.</h3>
        </div>
        
       
        
        
       <div className='bg-darkblue' >
       <Works direction={"lg:flex-row md:flex-col-reverse sm:flex-col-reverse"} background={"bg-lightgreen"} image={image4}  heading={"Construction & Renovation"} subheading={"Our construction and renovation expertise tackles everything from roof repairs and exterior revamps to custom decks and window installations. We can even incorporate sleek, low-maintenance aluminum siding, soffits, fascia, and railings.  For a touch of timeless elegance and security, our ironwork services create beautiful gates, fences, and decorative elements.  Need a modern touch? We offer stunning stainless steel solutions for railings, countertops, appliances, and more. "}/>
        <Works  direction={"flex-row-reverse"} background={"bg-white"} image={glasswork} heading={"Interior Design & Carpentry"} subheading={"Moving inside, we design and build dream kitchens with modular cabinets and components that maximize storage and optimize your culinary adventures.  Closets become organized sanctuaries with custom-made wardrobes perfectly tailored to your needs.  And for a distinctive touch on your walls, we offer a variety of decorative wall panels to add a unique flair to your space."}/>
        <Works direction={"flex-row"} background={"bg-lightgreen"} image={glasswork2} heading={"Interior Finishing"} subheading={"Let's not forget the final flourish! Our skilled painters breathe new life into your space with a fresh coat of paint, tackling walls, ceilings, trim, and accents.  Elevate your interior design with stunning wallpaper options, from classic patterns to modern prints.  Finally, strategically placed glass partitions, shower enclosures, mirrors, and decorative glass elements can enhance both the beauty and functionality of your home."}/>
       </div>

        <h1 className='mx-auto text-center font-extrabold sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-playfair uppercase mb-5  text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-800' >Services so Far</h1>
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