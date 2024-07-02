import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import CountSection from './components/CountSection'
import AnimatedCursor from "react-animated-cursor"
import Services from './components/Services'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import {Routes, Route} from 'react-router-dom'
import ServicesPage from './pages/ServicesPage'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  

  return (
    <>
      <div className='z-0 overflow-hidden  ' >
      <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    />
      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/our-services' element={<ServicesPage/>} />
          <Route path='/about-us' element={<About/>} />
      </Routes>
      <Footer/>
       
      </div>
    </>
  )
}

export default App
