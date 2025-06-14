"use client";

import { FaGlobe, FaComments, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Top blue bar */}
      <div className="hidden lg:flex bg-[linear-gradient(90deg,rgba(0,60,199,1)_0%,rgba(112,15,89,1)_100%)] text-white font-md justify-between items-center px-6 py-1 text-sm">
        <div className="truncate">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor .
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FaGlobe className="text-white" />
            <span>English</span>
          </div>
          <div className="flex items-center gap-2">
            <FaComments className="text-white" />
            <span>Live Chat</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-white" />
            <span>+1 234 567 890</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-[#070410] flex justify-between items-center py-4">
        <div className="flex items-center justify-between w-full px-10">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="mr-2"
            />
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex gap-6 lg:gap-10 text-sm lg:text-md font-medium text-white/90 absolute left-1/2 transform -translate-x-1/2">
            <Link 
              href="/home" 
              className={`relative py-2 whitespace-nowrap hover:text-white transition-colors duration-300 ${
                isActive('/home') ? 'text-white' : ''
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#003cc7] to-[#700f59] transform scale-x-0 transition-transform duration-300 ${
                isActive('/home') ? 'scale-x-100' : 'group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              href="#" 
              className={`relative py-2 whitespace-nowrap hover:text-white transition-colors duration-300 ${
                isActive('#') ? 'text-white' : ''
              }`}
            >
              About Us
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#003cc7] to-[#700f59] transform scale-x-0 transition-transform duration-300 ${
                isActive('#') ? 'scale-x-100' : 'group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              href="#" 
              className={`relative py-2 whitespace-nowrap hover:text-white transition-colors duration-300 ${
                isActive('#') ? 'text-white' : ''
              }`}
            >
              Services
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#003cc7] to-[#700f59] transform scale-x-0 transition-transform duration-300 ${
                isActive('#') ? 'scale-x-100' : 'group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              href="/contact" 
              className={`relative py-2 whitespace-nowrap hover:text-white transition-colors duration-300 ${
                isActive('/contact') ? 'text-white' : ''
              }`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#003cc7] to-[#700f59] transform scale-x-0 transition-transform duration-300 ${
                isActive('/contact') ? 'scale-x-100' : 'group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              href="#" 
              className={`relative py-2 whitespace-nowrap hover:text-white transition-colors duration-300 ${
                isActive('#') ? 'text-white' : ''
              }`}
            >
              Pricing
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#003cc7] to-[#700f59] transform scale-x-0 transition-transform duration-300 ${
                isActive('#') ? 'scale-x-100' : 'group-hover:scale-x-100'
              }`}></span>
            </Link>
          </nav>

          {/* Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <button className="group px-4 lg:px-6 py-2 rounded-full border-2 border-blue-400 text-white text-sm lg:text-base font-md bg-transparent hover:border-transparent transition-all duration-300 whitespace-nowrap relative overflow-hidden">
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#003cc7] to-[#700f59] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group px-4 lg:px-6 py-2 rounded-full bg-white text-[#0a071a] text-sm lg:text-base font-md transition-all duration-300 whitespace-nowrap relative overflow-hidden">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#003cc7] to-[#700f59] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-[#0a071a] z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!isMenuOpen}
      >
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <FaTimes size={24} />
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          <nav className="flex flex-col items-center gap-8 text-lg font-medium text-white/90 w-full">
            <Link 
              href="/home" 
              className={`relative py-2 w-full text-center hover:text-white transition-colors duration-300 ${
                isActive('/home') ? 'text-white' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#003cc7] to-[#700f59] transform scale-x-0 transition-transform duration-300 ${
                isActive('/home') ? 'scale-x-100' : 'group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              href="#" 
              className={`relative py-2 w-full text-center hover:text-white transition-colors duration-300 ${
                isActive('#') ? 'text-white' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#003cc7] to-[#700f59] transform scale-x-0 transition-transform duration-300 ${
                isActive('#') ? 'scale-x-100' : 'group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              href="#" 
              className={`relative py-2 w-full text-center hover:text-white transition-colors duration-300 ${
                isActive('#') ? 'text-white' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#003cc7] to-[#700f59] transform scale-x-0 transition-transform duration-300 ${
                isActive('#') ? 'scale-x-100' : 'group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              href="/contact" 
              className={`relative py-2 w-full text-center hover:text-white transition-colors duration-300 ${
                isActive('/contact') ? 'text-white' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#003cc7] to-[#700f59] transform scale-x-0 transition-transform duration-300 ${
                isActive('/contact') ? 'scale-x-100' : 'group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              href="#" 
              className={`relative py-2 w-full text-center hover:text-white transition-colors duration-300 ${
                isActive('#') ? 'text-white' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#003cc7] to-[#700f59] transform scale-x-0 transition-transform duration-300 ${
                isActive('#') ? 'scale-x-100' : 'group-hover:scale-x-100'
              }`}></span>
            </Link>
          </nav>
          <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-xs">
            <button className="group w-full px-6 py-3 rounded-full border-2 border-blue-400 text-white text-lg font-md bg-transparent hover:border-transparent transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#003cc7] to-[#700f59] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group w-full px-6 py-3 rounded-full bg-white text-[#0a071a] text-lg font-md transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#003cc7] to-[#700f59] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 