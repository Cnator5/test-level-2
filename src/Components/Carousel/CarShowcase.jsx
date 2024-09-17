"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaCar, FaTachometerAlt, FaGasPump, FaCogs } from 'react-icons/fa';
import "./CarShowcase.css";
const categories = [
  {
    name: 'In Stuck',

    image: '/images/beautiful-rolls-royce-car_999195-437-removebg-preview 1.png',
    description: 'ROLLS ROYCE Wraith',
    cars: [
      { image: '/images/Group 65.png' },
      { image: '/images/Group 63.png' },
      { image: '/images/Group 64.png' },
      { image: '/images/Group 62.png' },
    ]
  },
  {
    name: 'Used cars',
  
    image: '/images/beautiful-rolls-royce-car_999195-437-removebg-preview 1.png',
    description: 'Spacious and versatile vehicles for families and adventurers.',
    cars: [
      { image: '/images/Group 65.png' },
      { image: '/images/Group 63.png' },
      { image: '/images/Group 64.png' },
      { image: '/images/Group 62.png' },
    ]
  },
  {
    name: 'Any Model',
 
    image: '/images/beautiful-rolls-royce-car_999195-437-removebg-preview 1.png',
    description: 'Powerful and capable vehicles for work and play.',
    cars: [
        { image: '/images/Group 65.png' },
        { image: '/images/Group 63.png' },
        { image: '/images/Group 64.png' },
        { image: '/images/Group 62.png' },
    ]
  },
  {
    name: 'Any Motors',
  
    image: '/images/beautiful-rolls-royce-car_999195-437-removebg-preview 1.png',
    description: 'Eco-friendly vehicles with cutting-edge technology.',
    cars: [
        { image: '/images/Group 65.png' },
        { image: '/images/Group 63.png' },
        { image: '/images/Group 64.png' },
        { image: '/images/Group 62.png' },
    ]
  },
];

const CategoryBanner = ({ category }) => (
  <div className="category-banner">
    <div className="category-info">
      <div>        
        <h2 className="category-title">{category.description}</h2>
      </div>
      <button className="explore-button">
        Explore {category.name}
      </button>
    </div>
    <div className="category-image">
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
    <div className="car-image">
      <Image
        src={car.image}
        alt={car.name}
        width={300}
        height={200}
      />
    </div>
  
);

const CarShowcase = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="showcase">
      <div className="container">
        <h1 className="showcase-title">Car Categories</h1>
        <div className="category-buttons">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-button ${
                activeCategory === index
                  ? 'category-button-active'
                  : 'category-button-inactive'
              }`}
              onClick={() => setActiveCategory(index)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <CategoryBanner category={categories[activeCategory]} />
        <div className="car-grid">
          {categories[activeCategory].cars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarShowcase;