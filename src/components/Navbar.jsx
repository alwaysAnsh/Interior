import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineCleaningServices } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";



const Navbar = () => {
  return (
    <div className=' navbar ' >
      <div className = 'nav-items  ' >
        <IoHomeOutline />
        <span>Home</span>
      </div>
      <div className = ' nav-items' >
      <RiCustomerService2Fill />
        <span>Contact</span>
      </div>
      <div className = 'nav-items '>
      <IoPersonSharp />
        <span>About</span>
      </div>
      <div className = 'nav-items ' >
        <MdOutlineCleaningServices />
        <span>Services</span>
      </div>
      
    </div>
  )
}

export default Navbar