import React from 'react'
import Image from 'next/image'
import CarShowcase from '../Components/Carousel/CarShowcase'
import OurServices from '../Components/Services/OurServices'
import CarSection from '../Components/CarSection'
import Map from '../Components/Map'
import HeroSection from '../Components/HeroSection'
import ChatButton from '../Components/ChatButton'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CarSection />
      <CarShowcase />
      <div className='w-[86%] mx-auto flex justify-center items-center bg-black text-white rounded-xl py-8 px-20 my-8'>
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
              <h2 className="text-2xl md:text-3xl font-bold">
                Premium Cars
              </h2>
              <p className="text-lg mt-2">
                Find Your Perfect Ride
              </p>
            </div>
            <div className='col-span-1 md:col-span-1 flex flex-col items-center space-y-4'>
              <button className="bg-white hover:bg-red-700 hover:text-white text-black font-bold py-2 px-4 rounded transition duration-300 w-full">
                View Inventory
              </button>
              <ChatButton />
            </div>
          </div>
        </div>
      </div>
      <OurServices />
      <div className='flex items-center flex-col w-[90%] rounded-xl mx-auto px-4 py-8 space-y-6 my-8'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-800'>
          Visit Our Dealership
        </h2>
        <p className='text-lg md:text-xl text-center text-gray-600'>
          Find us in Bonamoussadi, Douala
        </p>
        <div className='w-full h-[400px] rounded-lg overflow-hidden shadow-lg'>
          <Map />
        </div>
      </div>
    </>
  )
}

export default HomePage