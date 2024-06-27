import React from 'react'
import interior from '../assets/interior.jpg'
import living from '../assets/living.jpg'
import room2 from '../assets/room2.jpg'
import room from '../assets/livingInterior.jpg'
import '../App.css'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";
import Cards from './frequentyUsed/Cards';
import Button from './frequentyUsed/Button';
   
  export default function Services() {
    return (
      <div className='mt-5 flex flex-col gap-6  ' >
        <div className='md:flex md:flex-col md:gap-4 md:text-center' >
            <h1 className='font-playfair text-darkblue md:text-6xl ' >One-stop shop for all things interiors</h1>
            <h3 className='w-[50%] mx-auto ' >Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office. With a wide range of furniture & decor, we have your back from start to finish</h3>
        </div>
        <div className='flex flex-row flex-wrap gap-4' >
            <Cards image={interior} heading={"Modular Interiors"} subheading={"Functional kitchen, wardrobe and storage"} />
            <Cards image={living} heading={"Full Home Interiors"} subheading={"Turnkey interior solutions for your home"} />
            <Cards image={room} heading={"Luxury Interiors"} subheading={"Tailored Interiors that redefine elegance"} />
            <Cards image={room2} heading={"Renovations"} subheading={"Expert solutions to upgrade your home"} />
            
        </div>
        <div>
            <Button/>
        </div>
        
      </div>
    );
  }