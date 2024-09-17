"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import "./Navbar.css";
const Navbar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <div className="logo-container">
            <Image
              src="/images/Modrino-removebg-preview 1 (1).png"
              className="logo-image"
              alt="Modrino Logo"
              width={200}
              height={80}
            />
          </div>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="menu-button"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="menu-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`} id="navbar-dropdown">
          <ul className="navbar-links">
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/about" className="nav-link">About</Link></li>
            <li><Link href="/services" className="nav-link">Services</Link></li>
            <li><Link href="/contact" className="nav-link">Contact</Link></li>
            {!session && (
              <li><Link href="/login" className="nav-link">Login</Link></li>
            )}
          </ul>
        </div>

        {session && (
          <div className="user-profile">
            <div className="profile-image-container">
              <Link href="/profile">
                <Image
                  src={session.user.image || "/default-avatar.png"}
                  alt="User's profile"
                  width={40}
                  height={40}
                  className="profile-image"
                />
              </Link>
            </div>
            <div className="user-name">
              <span>{session.user.name}</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;