"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaCar, FaTachometerAlt, FaGasPump, FaCogs } from 'react-icons/fa';

const categories = [
  {
    name: 'In Stuck',
    icon: FaCar,
    image: '/images/beautiful-rolls-royce-car_999195-437-removebg-preview 1.png',
    description: 'ROLLS ROYCE',
    sub: 'Wraith',
    cars: [
      { image: '/images/Group 65.png' },
      { image: '/images/Group 63.png' },
      { image: '/images/Group 64.png' },
      {  image: '/images/Group 62.png' },
    ]
  },
  {
    name: 'Used cars',
    icon: FaTachometerAlt,
    image: '/images/beautiful-rolls-royce-car_999195-437-removebg-preview 1.png',
    description: 'Spacious and versatile vehicles for families and adventurers.',
    cars: [
        { image: '/images/Group 65.png' },
        { image: '/images/Group 63.png' },
        { image: '/images/Group 64.png' },
        {  image: '/images/Group 62.png' },
    ]
  },
  {
    name: 'Any Model',
    icon: FaGasPump,
    image: '/images/beautiful-rolls-royce-car_999195-437-removebg-preview 1.png',
    description: 'Powerful and capable vehicles for work and play.',
    cars: [
      { image: '/images/Group 65.png' },
      { image: '/images/chevrolet-silverado.jpg' },
      { image: '/images/ram-1500.jpg' },
      { image: '/images/toyota-tundra.jpg' },
    ]
  },
  {
    name: 'Any Motors',
    icon: FaCogs,
    image: '/images/beautiful-rolls-royce-car_999195-437-removebg-preview 1.png',
    description: 'Eco-friendly vehicles with cutting-edge technology.',
    cars: [
      { image: '/images/Group 65.png' },
      { image: '/images/chevrolet-bolt.jpg' },
      { image: '/images/nissan-leaf.jpg' },
      { image: '/images/ford-mach-e.jpg' },
    ]
  },
];

const CategoryBanner = ({ category }) => (
  <div className="flex items-center bg-black rounded-xl shadow-lg overflow-hidden mb-8 h-96">
    <div className="w-1/2 p-8 text-white">
      <div className="flex items-center mb-4">
        <category.icon className="text-4xl text-blue-400 mr-3" />
        <h2 className="text-3xl font-bold">{category.description}</h2>
      </div>
      <p className="text-gray-300 mb-6">{category.description}</p>
      <p className="text-gray-300 mb-6">{category.sub}</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
        Explore {category.name}
      </button>
    </div>
    <div className="w-1/2 h-full relative">
      <Image
        src={category.image}
        alt={category.name}
        layout="fill"
        objectFit="contain"
      />
    </div>
  </div>
);

const CarCard = ({ car }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
    <div className="relative h-48">
      <Image
        src={car.image}
        alt={car.name}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{car.name}</h3>
      <p className="text-gray-600">{car.price}</p>
    </div>
  </div>
);

const CarShowcase = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12" style={{fontFamily: 'Sansita One', fontSize: '64px', fontWeight: 400, lineHeight: '74.56px', textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
  Car Categories
</h1>
        <div className="flex justify-center mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`mx-2 px-4 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ${
                activeCategory === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600 hover:bg-blue-100'
              }`}
              onClick={() => setActiveCategory(index)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <CategoryBanner category={categories[activeCategory]} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories[activeCategory].cars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarShowcase;