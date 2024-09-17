import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Find your dream car
            </h1>
            <p className="hero-description">
              Discover the perfect vehicle that matches your style, performance needs, and budget. Our collection awaits your exploration.
            </p>
            <Link href="/cars" className="hero-button">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <Image
          src="/images/white-midsize-city-suv-family-black-background-3d-rendering_101266-20790-removebg-preview 1.png"
          alt="Audi electric supercar concept"
          layout="fill"
          objectFit="contain"
          objectPosition="right bottom"
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default HeroSection;