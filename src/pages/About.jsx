import React from 'react'
import image from '../assets/landingImage.jpg'
import Button from '../components/frequentyUsed/Button'
// import { TypeAnimation } from 'react-type-animation';
import Testimonials from '../components/Testimonials';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className='' >
      <Navbar/>
        <div className='relative' >
            <img src={image} alt="image containing interior " className=' w-full h-[400px] relative' />
            <div className=' absolute lg:left-[28%] md::left-0 md:bottom-[8%] lg:bottom-[8%] sm:left-0 sm:bottom-[8%] z-10 flex flex-col gap-6 items-center justify-center' >
                <h1 className='font-playfair md:text-5xl sm:text-3xl sm:p-8 text-white bg-brown-500 md:p-4  font-bold text-center' >About Digital Interiors</h1>
                <div><Button/></div>
            </div>
            
            </div>
            <div className='mx-auto w-11/12 text-center mt-8 mb-8 pt-8 pb-8' >
            
            <ol className='flex flex-col gap-4 bg-green-50 rounded-md md:p-4 sm:pl-2 sm:pr-2 sm:pt-8 sm:pb-8' >
              <li>We don't just decorate, we create. At <b>Digital Interiors</b>, we combine a passion for stylish and functional homes with the power of technology to bring your dream space to life.</li>
              <li><>Forget the guesswork</>. We utilize cutting-edge software to generate stunning 3D visualizations, allowing you to see your dream home before a single change is made.</li>
              <li><>Transparency is key</>. Our digital project management tools keep you informed every step of the way, from material selection to installation timelines. This ensures a smooth and stress-free journey.</li>
              <li><>Finally</>, our network of <>skilled professionals</> works seamlessly through digital platforms, allowing for efficient communication and a cohesive final product that exceeds your expectations.  <b>Digital Interiors isn't just about aesthetics; it's about a technology-driven approach that transforms your vision into a beautiful reality.</b></li>
            </ol>
            {/* <TypeAnimation
      sequence={[
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      ]}
      wrapper="span"
      speed={45}
      style={{  display: 'inline-block' }}
      className='text-lg font-playfair font-bold'
      repeat={Infinity}
    /> */}
                
            </div>
            <Testimonials/>
    </div>
  )
}

export default About