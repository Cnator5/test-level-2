import React from 'react'
import CarShowcase from '../Components/Carousel/CarShowcase';
import OurServices from './../Components/Services/OurServices';
import CarSection from './../Components/CarSection';
const page = () => {
  return (
    <div className=''>
        <CarSection/>
        <CarShowcase/>
      <OurServices/>
    </div>
  )
}

export default page