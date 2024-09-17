'use client'

import React from 'react'
import Image from 'next/image'
import './CarSection.css'

const CarSection = () => {
  const cars = [
    { image: '/images/Group 497.png' },
    { image: '/images/Group 489.png' },
    { image: '/images/Group 490.png' },
    { image: '/images/Group 490.png' },
    { image: '/images/Group 489.png' },
  ];

  return (
    <section className="car-section">
      <div className="car-container">
        {cars.map((car, index) => (
          <div key={index} className="car-item">
            <Image src={car.image} alt={`Car ${index + 1}`} width={200} height={150} layout="responsive" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarSection;