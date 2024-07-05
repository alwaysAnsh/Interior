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
          {/* <div className="flex items-center -space-x-3">
            <Tooltip content="Natali Craig">
              <Avatar
                size="sm"
                variant="circular"
                alt="natali craig"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                className="border-2 border-white hover:z-10"
              />
            </Tooltip>
            <Tooltip content="Tania Andrew">
              <Avatar
                size="sm"
                variant="circular"
                alt="tania andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                className="border-2 border-white hover:z-10"
              />
            </Tooltip>
          </div> */}
          {/* <Typography className="font-normal text-darkblue">Explore</Typography> */}
        </CardFooter>
      </Card>
    );
  }