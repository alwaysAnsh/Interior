import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineCleaningServices } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import {Link} from 'react-router-dom'
import { IoLogoWhatsapp } from "react-icons/io";
import {scrollToTop} from '../utils/srollToTop'




const Navbar = () => {
  return (
    <div className=' navbar ' >
        <Link to='/'onClick={scrollToTop}  >
      <div className = 'nav-items  ' >
        <IoHomeOutline />
        <span>Home</span>
      </div>
        </Link>
        <Link to='/contact-us' onClick={scrollToTop} >
      <div className = ' nav-items' >
      <RiCustomerService2Fill />
        <span>Contact</span>
      </div>
        </Link>

        <div>
        <a href="https://wa.me/9012841693" target="_blank" rel="noopener noreferrer">
          <IoLogoWhatsapp className='text-4xl  text-center rounded-full bg-black border-2 border-green-600 text-green-600' />
        </a>
        </div>

        <Link to='/about-us'onClick={scrollToTop}  >
      <div className = 'nav-items '>
      <IoPersonSharp />
        <span>About</span>
      </div>
        </Link>
        <Link to='/our-services'onClick={scrollToTop}  >
      <div className = 'nav-items ' >
        <MdOutlineCleaningServices />
        <span>Services</span>
      </div>
        </Link>
      
    </div>
  )
}

export default Navbar