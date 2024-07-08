import React from 'react'
import '../../App.css'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";
   
  export default function Cards({image, heading, subheading }) {
    return (
      <Card className="max-w-[20rem] overflow-hidden card  ">
        <CardHeader
          floated={true}
          shadow={true}
          color="transparent"
          className="m-0 rounded-none "
        >
          <img
          src={image}
            alt="interior design images"
            lazyLoading
          />
        </CardHeader>
        <CardBody>
          <Typography className='font-playfair' variant="h4" color="blue-gray">
            {heading}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-maven text-md">
            {subheading}
          </Typography>
        </CardBody>
        <CardFooter className="">
          
          
        </CardFooter>
      </Card>
    );
  }