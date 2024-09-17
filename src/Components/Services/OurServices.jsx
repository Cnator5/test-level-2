'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCar, FaHeadset } from 'react-icons/fa';
import styles from '../Services/OurServices.module.css';
import HeroSection from './../HeroSection';
const OurServices = () => (
    <>
    <HeroSection/>
  <section className={styles.servicesSection}>
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Our Services</h2>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <FaCar className={styles.serviceIcon} />
          <h3 className={styles.serviceTitle}>Brand Expertise</h3>
          <p className={styles.serviceDescription}>We specialize in a wide range of car brands, providing expert knowledge and services for all your automotive needs.</p>
        </div>
        <div className={styles.wideCard}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/Rectangle 148 (1).png"
              alt="Luxury car interior details"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.wideCard}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/Rectangle 150.png"
              alt="Modern luxury car interior steering"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.serviceCard}>
          <FaHeadset className={styles.serviceIcon} />
          <h3 className={styles.serviceTitle}>Free Support</h3>
          <p className={styles.serviceDescription}>Our dedicated team is always ready to assist you with any questions or concerns about your vehicle.</p>
          <Link href="/contact">
            <button className={styles.contactButton}>
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
  </>
);

export default OurServices;