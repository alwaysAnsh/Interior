import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineCleaningServices } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import {Link} from 'react-router-dom'



const Navbar = () => {
  return (
    <div className=' navbar ' >
        <Link to='/' >
      <div className = 'nav-items  ' >
        <IoHomeOutline />
        <span>Home</span>
      </div>
        </Link>
        <Link to='/contact-us' >
      <div className = ' nav-items' >
      <RiCustomerService2Fill />
        <span>Contact</span>
      </div>
        </Link>
        <Link to='/about-us' >
      <div className = 'nav-items '>
      <IoPersonSharp />
        <span>About</span>
      </div>
        </Link>
        <Link to='/our-services' >
      <div className = 'nav-items ' >
        <MdOutlineCleaningServices />
        <span>Services</span>
      </div>
        </Link>
      
    </div>
  )
}

export default Navbar