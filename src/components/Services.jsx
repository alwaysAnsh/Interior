import React from 'react'
import interior from '../assets/interior.jpg'
import '../App.css'

const Services = () => {
  return (
    <div>
        <div className='relative ' >
            <img src={interior} alt="interior image" className='diagonal-cut' />
            {/* <div className="video-overlay"></div> */}
            <div className='absolute left-[10%] top-[30%]'>
                <h2 className='uppercase font-playfair text-8xl text-darkblue overflow-hidden ' >Services</h2>
                <p className='w-[40%]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit inventore saepe sed doloribus consequatur, rerum provident fuga veritatis quibusdam nobis eos a architecto quis enim expedita at eveniet cumque ipsum quidem? Temporibus maxime ex dolore, at cum reiciendis ducimus id?</p>
                <div className='overflow-hidden text-left w-full mt-10' >
                <button className="cta">
          <span>Go to Services</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            {/* <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline> */}
          </svg>
        </button>
</div>
            </div>
        </div>
    </div>
  )
}

export default Services