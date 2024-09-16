'use client'

import React from 'react'
import Image from 'next/image'

const CarSection = () => {
  const cars = [
    {  image: '/images/Group 497.png' },
    {  image: '/images/Group 489.png' },
    {  image: '/images/Group 490.png' },
    {  image: '/images/Group 490.png' },
    { image: '/images/Group 489.png' },
  ];

  return (
    <div className="car-section-wrapper">
      <div className="car-section">
        {cars.map((car, index) => (
          <div key={index} className="car-item">
            <div className="car-image">
              <Image src={car.image} alt={car.name} width={100} height={100} />
            </div>
            <div className="car-name">{car.name}</div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .car-section-wrapper {
          margin-top: 80px;
        }
        .car-section {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin: 0 auto;
        }
        .car-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .car-image {
          margin-bottom: 10px;
        }
        .car-name {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default CarSection;