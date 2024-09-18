import React from 'react'
import CarShowcase from '../Components/Carousel/CarShowcase';
import OurServices from './../Components/Services/OurServices';
import CarSection from './../Components/CarSection';
import Map from './../Components/Map';
const page = () => {
  return (
    <div className=''>
        <CarSection/>
        <CarShowcase/>
      <OurServices/>
      <div className='flex items-center flex-col w-full max-w-4xl mx-auto px-4 py-8 space-y-6'>
  <h1 className='text-3xl md:text-4xl font-bold text-center text-gray-800'>
    Welcome to Our Car Dealership
  </h1>
  <p className='text-lg md:text-xl text-center text-gray-600'>
    Find us in Bonamoussadi, Douala
  </p>
  <div className='w-full h-[400px] rounded-lg overflow-hidden shadow-lg'>
    <Map />
  </div>
</div>
    </div>
  )
}

export default page