import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCar, FaHeadset } from 'react-icons/fa';

const OurServices = () => (
  <section className="bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-black text-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-full">
          <FaCar className="text-4xl mb-4 text-white" />
          <h3 className="text-xl font-bold mb-2">Brand Expertise</h3>
          <p className="mb-4 text-gray-300">We specialize in a wide range of car brands, providing expert knowledge and services for all your automotive needs.</p>
        </div>
        <div className="md:col-span-2">
          <div className="relative h-96 md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/Rectangle 148 (1).png"
              alt="Luxury car interior details"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="relative h-96 md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/Rectangle 150.png"
              alt="Modern luxury car interior steering"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="bg-black text-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-full">
          <FaHeadset className="text-4xl mb-4 text-white" />
          <h3 className="text-xl font-bold mb-2">Free Support</h3>
          <p className="mb-4 text-gray-300">Our dedicated team is always ready to assist you with any questions or concerns about your vehicle.</p>
          <Link href="/contact">
          <button className="mt-auto bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default OurServices;