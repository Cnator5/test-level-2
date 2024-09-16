"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="https://cdn.motor1.com/images/mgl/MkO9NN/s2/future-supercars.webp"
              className="w-full h-full object-cover"
              alt="Modrino Logo"
              width={40}
              height={40}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold">MODRINO</span>
            <span className='text-xs'>Your Dream Car</span>
          </div>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link href="/" className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                Contact
              </Link>
            </li>
            {!session && (
              <li>
                <Link href="/login" className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>

        {session && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Link href="/profile">
                <Image
                  src={session.user.image || "/default-avatar.png"}
                  alt="User's profile"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <span className="text-sm font-medium">{session.user.name}</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;