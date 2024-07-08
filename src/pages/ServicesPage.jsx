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
import ServiceCard from '../components/frequentyUsed/ServiceCard'
import interior from '../assets/interior.jpg'
import upvc from '../assets/upvc.jpg'
import room2 from '../assets/room2.jpg'
import room from '../assets/livingInterior.jpg'
import furniture from '../assets/furniture.jpg'
import lightning from '../assets/lightning.jpg'
import falsec from '../assets/false.jpg'
import paint from '../assets/paintandart.jpg'
import civil from '../assets/civil.jpg'



const ServicesPage = () => {
  

  return (
    <div >
        <Navbar/>
        <div className="relative" >
            
            <div className='relative' >
            <img src={image} alt="image containing interior " className=' w-full  sm:h-[500px] md:h-[550px] lg:h-[700px] relative' />
            <div className=' absolute sm:left-[10%] sm:bottom-[4%] md:left-[12px] md:bottom-[4%] lg:left-[28%] lg:bottom-[8%] z-10 flex flex-col gap-6 items-center justify-center' >
                <h1 className='font-playfair lg:text-5xl md:text-4xl sm:text-3xl text-white  font-bold text-center' >Dream Interiors made possible</h1>
                {/* <div><Button/></div> */}
            </div>
            </div>
            <div className='shadow-overlay' ></div>            
        </div>

        <div className='mt-10 flex flex-col gap-6 mx-auto text-center items-center justify-center' >
            <h1 className='font-playfair lg:text-4xl md:text-3xl sm:text-2xl text-darkblue uppercase  font-bold ' >The complete home interiors experience</h1>
            <h3 className='text-lg italic sm:text-sm md:text-sm lg:text-lg  md:w-full sm:w-full lg:w-[90%] xl:w-[50%] ' >No more dreaming about your interiors.  Digital Interiors brings together award-winning designers, service partners and brands, to help you take your home interiors from dream to reality.</h3>
        </div>
        
       
        
        
       {/* <div className='bg-darkblue' >
       <Works direction={"lg:flex-row md:flex-col-reverse sm:flex-col-reverse"} background={"bg-lightgreen"} image={image4}  heading={"Construction & Renovation"} subheading={"Our construction and renovation expertise tackles everything from roof repairs and exterior revamps to custom decks and window installations. We can even incorporate sleek, low-maintenance aluminum siding, soffits, fascia, and railings.  For a touch of timeless elegance and security, our ironwork services create beautiful gates, fences, and decorative elements.  Need a modern touch? We offer stunning stainless steel solutions for railings, countertops, appliances, and more. "}/>
        <Works  direction={"flex-row-reverse"} background={"bg-white"} image={glasswork} heading={"Interior Design & Carpentry"} subheading={"Moving inside, we design and build dream kitchens with modular cabinets and components that maximize storage and optimize your culinary adventures.  Closets become organized sanctuaries with custom-made wardrobes perfectly tailored to your needs.  And for a distinctive touch on your walls, we offer a variety of decorative wall panels to add a unique flair to your space."}/>
        <Works direction={"flex-row"} background={"bg-lightgreen"} image={glasswork2} heading={"Interior Finishing"} subheading={"Let's not forget the final flourish! Our skilled painters breathe new life into your space with a fresh coat of paint, tackling walls, ceilings, trim, and accents.  Elevate your interior design with stunning wallpaper options, from classic patterns to modern prints.  Finally, strategically placed glass partitions, shower enclosures, mirrors, and decorative glass elements can enhance both the beauty and functionality of your home."}/>
       </div> */}
        <div className='mx-auto text-center lg:mt-8 mb-8'>
            <h2 className='lg:text-4xl font-bold font-playfair lg:mb-6 sm:text-3xl sm:mb-2 sm:mt-2 sm:text-red-700 underline' >Services we offer</h2>
            <p className='text-lg italic sm:text-sm md:text-sm lg:text-lg mx-auto  md:w-full sm:w-full lg:w-[90%] xl:w-[50%] mt-4 mb-4  '>We provide expert paint work, stylish false ceilings, sleek gypsum ceilings, precise fabrication, reliable civil work, transformative home renovation, high-quality aluminum and uPVC installations, and elegant glass work</p>
          <div className='flex flex-wrap flex-row gap-4' >
            
          <Cards image={furniture} heading={"Fabrication Works"} subheading={"We design Wardrobes, Kitchen Cabinets based"} />
          <Cards image={lightning} heading={"Gypsum Ceiling"} subheading={"Best projects and products in the commercial"} />
          <Cards image={falsec} heading={"False Ceiling"} subheading={"Changing business climate, workplace design"} />
          <Cards image={paint} heading={"Paint & Art works"} subheading={"Designing hospital area with equipments needs"} />
          <Cards image={glasswork} heading={"Civil Works"} subheading={"Will differentiate from the ordinary restaurants"} />
          {/* <Cards image={glasswork2} heading={"Industrial Designs"} subheading={"Will differentiate you from the restaurants"} /> */}
          {/* <Cards image={interior} heading={"Modular Kitchens"} subheading={"Functional kitchen, wardrobe and storage"} /> */}
          <Cards image={upvc} heading={"uPVC Works"} subheading={"Turnkey Interior Solutions for your home"} />
          <Cards image={room} heading={"Luxury Interiors"} subheading={"Tailored Interiors that refine elegance"} />
          <Cards image={room2} heading={"Home Renovations"} subheading={"Expert Solutions to upgrade your home"} />

            
            
            {/* <ServiceCard heading={"Exterior work"}/>
            <ServiceCard heading={"Modular Kitchen"}/>
            <ServiceCard heading={"Wordrobe"} />
            <ServiceCard heading={"Wall Panels"}/>
            <ServiceCard heading={"Paint Work"} />
            <ServiceCard heading={"Wallpaper dising"}/>
            <ServiceCard heading={"Glass Work"} />
            <ServiceCard heading={"Aluminium and Iron Works"} /> */}
            
            
          </div>
        </div>

        <h1 className='mx-auto text-center font-extrabold sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-playfair uppercase mb-5  text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-800' >Services so Far</h1>
      <ServicesSoFar/>
      {/* <div className=' mt-5 mb-5 flex flex-col items-center justify-center mx-auto  ' >
        <div>
        <Button/>
        </div>
      </div> */}
    </div>
  )
}

export default ServicesPage