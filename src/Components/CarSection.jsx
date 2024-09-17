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
    <div className="car-section-wrapper">
      <div className="car-section">
        {cars.map((car, index) => (
          <div key={index} className="car-item">
            <div className="car-image">
              <Image src={car.image} alt={`Car ${index + 1}`} width={100} height={100} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarSection;