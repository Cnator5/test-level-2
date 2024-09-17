// components/Navbar.js
"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import styles from '../Navbar/Navbar.module.css';

const Navbar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.navbarLogo}>
          <div className={styles.logoContainer}>
            <Image
              src="/images/Modrino-removebg-preview 1 (1).png"
              alt="Modrino Logo"
              width={200}
              height={80}
            />
          </div>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.menuButton}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={`${styles.navbarMenu} ${isMenuOpen ? styles.navbarMenuOpen : ''}`}>
          <button className={styles.closeButton} onClick={() => setIsMenuOpen(false)}>×</button>
          <ul className={styles.navbarLinks}>
            <li><Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="/services" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Services</Link></li>
            <li><Link href="/contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            {!session && (
              <li><Link href="/login" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Login</Link></li>
            )}
          </ul>
        </div>

        {session && (
          <div className={styles.userProfile}>
            <div className={styles.profileImageContainer}>
              <Link href="/profile">
                <Image
                  src={session.user.image || "/default-avatar.png"}
                  alt="User's profile"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
            <div className={styles.userName}>
              <span>{session.user.name}</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;