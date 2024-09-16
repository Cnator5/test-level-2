import React from 'react'
import HeroSection from './../Components/HeroSection';
import ProductCarousel from './../Components/Carousel/ProductCarousel';
import OurServices from './../Components/Services/OurServices';
import CarSection from './../Components/CarSection';
const page = () => {
  return (
    <div className=''>
         <HeroSection/>
        <CarSection/>
      <ProductCarousel/>
      <OurServices/>
    </div>
  )
}

export default page