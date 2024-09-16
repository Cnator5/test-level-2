import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-black text-white relative overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Find your dream car
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Discover the perfect vehicle that matches your style, performance needs, and budget. Our collection awaits your exploration.
            </p>
            <Link href="/cars" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-40 translate-y-1/2 w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px]">
        <Image
          src="/images/white-midsize-city-suv-family-black-background-3d-rendering_101266-20790-removebg-preview 1.png"
          alt="Audi electric supercar concept"
          layout="fill"
          objectFit="contain"
          objectPosition="right bottom"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default HeroSection;