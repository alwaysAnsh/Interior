import React from 'react'
import '../../App.css'

const ServiceCard = ({heading}) => {
  return (
    <div>
                
            <div className='lg:h-[160px] lg:w-[160px] sm:h-[150px] sm:w-[150px] shadow-xl border-2  bg-opacity-40 text-center mx-auto flex items-center justify-center' >
                <p className='font-maven p-2 font-semibold' >{heading}</p>
            </div>
                
                {/* <div class="card">
        <a class="card1" href="#">
            <p>This is heading</p>
            <p class="small">Card description with lots of great facts and interesting details.</p>
            <div class="go-corner" href="#">
            <div class="go-arrow">
                →
            </div>
            </div>
        </a>
        </div> */}
    </div>
  )
}

export default ServiceCard