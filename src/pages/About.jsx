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
            <div className=' absolute left-[28%] bottom-[8%] z-10 flex flex-col gap-6 items-center justify-center' >
                <h1 className='font-playfair text-5xl text-white font-bold text-center' >About Digital Interiors</h1>
                <div><Button/></div>
            </div>
            
            </div>
            <div className='mx-auto w-11/12 text-center mt-8 mb-8 pt-8 pb-8' >
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur necessitatibus sed explicabo labore facere beatae sint dolore tempore, natus laudantium doloremque repellendus recusandae quam blanditiis enim sapiente aliquid deserunt ut eum quisquam itaque omnis nostrum! Tempore non accusamus officiis deleniti fugiat illo vero voluptatem, at, alias ullam aliquam, excepturi obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto provident ullam ipsam dolores quaerat rerum suscipit illum similique velit at commodi optio nulla aliquid nesciunt placeat error vel repudiandae, ducimus incidunt. Porro sapiente dolores optio voluptatem architecto natus voluptates.</p>
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