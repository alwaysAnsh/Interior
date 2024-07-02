import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CountSection from '../components/CountSection'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Button from '../components/frequentyUsed/Button'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <CountSection/>
        <Services/>
        
        <Gallery/>
        <Testimonials/>
        <div className='flex flex-col items-center justify-center mx-auto mt-5'>
          <div  >
            <Button/>
          </div>
        </div>
    </div>
  )
}

export default Home