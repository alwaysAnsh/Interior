import React from 'react'
import '../App.css'
import interior from '../assets/interior.jpg'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'
import living from '../assets/living.jpg'
import room2 from '../assets/room2.jpg'
import room from '../assets/livingInterior.jpg'
import Button from '../components/frequentyUsed/Button'

const Gallery = () => {
  return (
    <div className='mt-6  flex flex-col gap-6' >

        <div className='flex flex-col gap-4 text-left' >
            <h1 className='font-playfair text-5xl text-darkblue' >Inspiration for home interior designs</h1>
            <h3>Give your home a new look with these interior design ideas curated for you</h3>
        </div>
        
        <div class="grid grid-cols-2 gap-2 md:grid-cols-4 relative">
        <div class="glow-background"></div>
  <div class="grid gap-2">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={image4}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src={image1}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={living}
        alt="gallery-photo"
      />
    </div>
  </div>
  <div class="grid gap-2">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={image2}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src={image3}
        alt="gallery-photo"
      />
    </div>
  </div>
  <div class="grid gap-2">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={image5}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src={image6}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={image7}
        alt="gallery-photo"
      />
    </div>
  </div>
  <div class="grid gap-2">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={image8}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={image9}
        alt="gallery-photo"
      />
    </div>
  </div>
</div>
    <div>
        <Button/>
    </div>
    </div>
  )
}

export default Gallery