"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSectionClient = () => {
  return (
    <div className="bg-black text-white h-[60vh] relative overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-10 z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Find your dream car
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover the perfect vehicle that matches your style, performance needs, and budget. Our extensive collection of premium cars awaits your exploration.
          </p>
          <Link href="/cars" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Learn More
          </Link>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -rotate-6 scale-105 opacity-50"></div>
          <div className="relative w-full h-full">
            <Image
              src="https://cdn.motor1.com/images/mgl/ZnMRno/s1/audi-electric-supercar.jpg"
              alt="White midsize city SUV"
              layout="fill"
              objectFit="contain"
              className="transform translate-x-4 hover:translate-x-0 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionClient;