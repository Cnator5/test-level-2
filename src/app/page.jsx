import React from 'react'
import Image from 'next/image'
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
      <div className='w-full bg-gray-800 text-white py-8 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center'>
          <div className='col-span-1 md:col-span-1 flex justify-center'>
            <Image 
              src="/images/all-pages-2.png" 
              alt="Luxury Cars Logo" 
              width={200} 
              height={133} 
              className="mx-auto"
            />
          </div>
          <div className='col-span-1 md:col-span-1 text-center'>
            <h1 className="text-2xl md:text-3xl font-bold">
              Premium Cars
            </h1>
            <p className="text-lg mt-2">
              Find Your Perfect Ride
            </p>
          </div>
          <div className='col-span-1 md:col-span-1 flex justify-center'>
            <button className="bg-white hover:bg-red-700 text-black font-bold py-2 px-4 rounded transition duration-300">
              View Inventory
            </button>
          </div>
        </div>
      </div>
    </div>

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