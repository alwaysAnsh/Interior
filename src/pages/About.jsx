import React from 'react'
import image from '../assets/landingImage.jpg'
import Button from '../components/frequentyUsed/Button'
// import { TypeAnimation } from 'react-type-animation';
import Testimonials from '../components/Testimonials';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom'
import promotion from '../assets/promotion.mp4'

const About = () => {
  return (
    <div className='' >
      <Navbar/>
        <div className='relative' >
            <img src={image} alt="image containing interior " className=' w-full h-[400px] relative' />
            <div className=' absolute lg:left-[28%] md::left-0 md:bottom-[8%] lg:bottom-[8%] sm:left-0 sm:bottom-[8%] z-10 flex flex-col gap-6 items-center justify-center' >
                <h1 className='font-playfair md:text-5xl sm:text-3xl sm:p-8 text-white bg-brown-500 md:p-4  font-bold text-center' >About Digital Interiors</h1>
                {/* <div><Button/></div> */}
            </div>
            
            </div>
            <div className='mx-auto w-11/12 text-center mt-8 mb-8 pt-8 pb-8' >
            
            <ol className='flex flex-col gap-4 bg-green-50 rounded-md md:p-4 sm:pl-2 sm:pr-2 sm:pt-8 sm:pb-8' >
              <li>Welcome to Digital Interior, your premier destination for exceptional interior design services in Noida. Our team of experienced designers and project managers is dedicated to transforming your dreams into reality, creating spaces that are not only aesthetically pleasing but also functional and tailored to your unique lifestyle.</li>
              <h2 className='font-bold text-3xl font-maven' >Our Expertise</h2>
              <li>At Digital Interior, we pride ourselves on our diverse team of over 34 top-notch interior designers who specialize in crafting unique spaces based on our clients' preferences and budgets. Our designers are supported by a robust team of over 10 project managers who ensure seamless project execution with innovative solutions and personalized services. Additionally, we collaborate with over 30 trusted vendors to source the finest furniture, fabrics, and decor, ensuring the highest quality for our projects.</li>
              <h2 className='font-bold text-3xl font-maven' >Comprehensive Services</h2>
              <ol className='text-left' >
  <li>
    <strong>1. Design:</strong> Our designers create stunning spaces that match your vision, whether it’s fully furnished homes, modular kitchens, or custom storage solutions.
  </li>
  <li>
    <strong>2. Implementation:</strong> We follow a meticulous planning approach to bring your dream home to life with detailed designs.
  </li>
  <li>
    <strong>3. Maintenance:</strong> Post-execution, our designers provide ongoing support to ensure the lasting quality of your space.
  </li>
</ol>
<h2 className='font-bold text-3xl font-maven' >Tailored Interior Design Solutions</h2>
<ol className=' text-left ' >
  <li>
    <strong>1. Tailored Design Solutions:</strong> Our team takes the time to understand your desires and requirements, incorporating their professional knowledge to enhance the functionality and aesthetics of your home.
  </li>
  <li>
    <strong>2. Attention to Detail:</strong> Our designers and craftsmen work in harmony to bring your envisioned design to fruition, creating personalized spaces that resonate with your style and taste.
  </li>
  <li>
    <strong>3. Sustainability and Innovation:</strong> We advocate for eco-conscious living and adopt technological elements that promise a greener and more sustainable lifestyle.
  </li>
  <li>
    <strong>4. Cost-Effective Solutions:</strong> We offer the best possible solutions that fit your budget, ensuring you get the most value for your investment.
  </li>
  <li>
    <strong>5. Quality Assurance:</strong> We guarantee quality at every step, from initial planning to project completion.
  </li>
  <li>
    <strong>6. Timely Delivery:</strong> We are committed to delivering projects on time, maintaining our standard of punctuality.
  </li>
  <li>
    <strong>7. 10-Year Warranty:</strong> We offer a decade-long warranty to strengthen our relationship with our clients, ensuring their peace of mind.
  </li>
</ol>
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
            <div>
            <video  autoPlay={false} controls className=' sm:h-full sm:block  lg:h-[400px] xl:hidden 2xl:hidden  w-screen overflow-y-hidden'    alt="video of interior design by digital interiors"> 
              <source   src={promotion} type='video/mp4' />
            </video>
            </div>
            <Testimonials/>
    </div>
  )
}

export default About