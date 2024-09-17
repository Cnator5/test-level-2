import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCar, FaHeadset } from 'react-icons/fa';
import "./OurServices.css";
const OurServices = () => (
  <section className="services-section">
    <div className="container">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <FaCar className="service-icon" />
          <h3 className="service-title">Brand Expertise</h3>
          <p className="service-description">We specialize in a wide range of car brands, providing expert knowledge and services for all your automotive needs.</p>
        </div>
        <div className="wide-card">
          <div className="image-container">
            <Image
              src="/images/Rectangle 148 (1).png"
              alt="Luxury car interior details"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="wide-card">
          <div className="image-container">
            <Image
              src="/images/Rectangle 150.png"
              alt="Modern luxury car interior steering"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="service-card">
          <FaHeadset className="service-icon" />
          <h3 className="service-title">Free Support</h3>
          <p className="service-description">Our dedicated team is always ready to assist you with any questions or concerns about your vehicle.</p>
          <Link href="/contact">
            <button className="contact-button">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default OurServices;