import React from 'react'
import HeroSection from './../Components/HeroSection';
import CarShowcase from '../Components/Carousel/CarShowcase';
import OurServices from './../Components/Services/OurServices';
import CarSection from './../Components/CarSection';
const page = () => {
  return (
    <div className=''>
         <HeroSection/>
        <CarSection/>
        <CarShowcase/>
      <OurServices/>
    </div>
  )
}

export default page