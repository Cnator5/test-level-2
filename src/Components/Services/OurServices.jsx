import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCar, FaHeadset } from 'react-icons/fa';

const OurServices = () => (
  <section style={{backgroundColor: '#f3f4f6', padding: '4rem 0'}}>
    <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 1rem'}}>
      <h2 style={{fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', color: '#1f2937', marginBottom: '3rem'}}>Our Services</h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem'}}>
        <div style={{backgroundColor: 'black', color: 'white', borderRadius: '0.75rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%'}}>
          <FaCar style={{fontSize: '2.25rem', marginBottom: '1rem'}} />
          <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Brand Expertise</h3>
          <p style={{marginBottom: '1rem', color: '#d1d5db'}}>We specialize in a wide range of car brands, providing expert knowledge and services for all your automotive needs.</p>
        </div>
        <div style={{gridColumn: 'span 2'}}>
          <div style={{position: 'relative', height: '400px', borderRadius: '0.75rem', overflow: 'hidden'}}>
            <Image
              src="/images/Rectangle 148 (1).png"
              alt="Luxury car interior details"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div style={{gridColumn: 'span 2'}}>
          <div style={{position: 'relative', height: '400px', borderRadius: '0.75rem', overflow: 'hidden'}}>
            <Image
              src="/images/Rectangle 150.png"
              alt="Modern luxury car interior steering"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div style={{backgroundColor: 'black', color: 'white', borderRadius: '0.75rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%'}}>
          <FaHeadset style={{fontSize: '2.25rem', marginBottom: '1rem'}} />
          <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Free Support</h3>
          <p style={{marginBottom: '1rem', color: '#d1d5db'}}>Our dedicated team is always ready to assist you with any questions or concerns about your vehicle.</p>
          <Link href="/contact">
            <button style={{marginTop: 'auto', backgroundColor: '#2563eb', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '9999px', border: 'none', cursor: 'pointer'}}>
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default OurServices;