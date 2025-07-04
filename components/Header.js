"use client";

import { FaGlobe, FaComments, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import ContactPopup from './ContactPopup';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  const handleContactClick = () => {
    setIsContactPopupOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Top blue bar */}
      <div className="hidden lg:flex bg-[linear-gradient(90deg,rgba(0,60,199,1)_0%,rgba(112,15,89,1)_100%)] text-white font-md justify-between items-center py-1 text-sm">
        <div className="max-w-[1440px] mx-auto w-full px-10 flex justify-between items-center">
          <div className="truncate">
            Get a FREE site audit scheduling a call with our team.
          </div>
          <div className="flex items-center gap-4">
            {/* <div className="flex items-center gap-2">
              <FaGlobe className="text-white" />
              <span>English</span>
            </div>
            <div className="flex items-center gap-2">
              <FaComments className="text-white" />
              <span>Live Chat</span>
            </div> */}
            <div className="flex items-center gap-2">
              <FaPhone className="text-white rotate-90" />
              <a href="tel:+16199550105" className="text-white hover:text-blue-300 transition-colors duration-200">
                <span>619-955-0105</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-[#070410] flex justify-between items-center py-4 ">
        <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto px-10">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex gap-4 lg:gap-6 text-sm lg:text-md font-medium text-white/90 absolute left-1/2 transform -translate-x-1/2">
            <Link 
              href="/" 
              className={`group relative py-2 px-4 whitespace-nowrap hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 ${
                isActive('/') ? 'text-white bg-white/10' : ''
              }`}
            >
              <span className="relative z-10">Home</span>
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4 ${
                isActive('/') ? 'w-3/4' : ''
              }`}></span>
            </Link>
            
            <Link 
              href="/webdesign" 
              className={`group relative py-2 px-4 whitespace-nowrap hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 ${
                isActive('/webdesign') ? 'text-white bg-white/10' : ''
              }`}
            >
              <span className="relative z-10">Web Design</span>
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4 ${
                isActive('/webdesign') ? 'w-3/4' : ''
              }`}></span>
            </Link>
            
            <Link 
              href="/seo" 
              className={`group relative py-2 px-4 whitespace-nowrap hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 ${
                isActive('/seo') ? 'text-white bg-white/10' : ''
              }`}
            >
              <span className="relative z-10">SEO</span>
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4 ${
                isActive('/seo') ? 'w-3/4' : ''
              }`}></span>
            </Link>
            
            <Link 
              href="/ads" 
              className={`group relative py-2 px-4 whitespace-nowrap hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 ${
                isActive('/ads') ? 'text-white bg-white/10' : ''
              }`}
            >
              <span className="relative z-10">Advertising</span>
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4 ${
                isActive('/ads') ? 'w-3/4' : ''
              }`}></span>
            </Link>
            
            <Link 
              href="/branding" 
              className={`group relative py-2 px-4 whitespace-nowrap hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 ${
                isActive('/branding') ? 'text-white bg-white/10' : ''
              }`}
            >
              <span className="relative z-10">Branding</span>
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4 ${
                isActive('/branding') ? 'w-3/4' : ''
              }`}></span>
            </Link>
            
            <Link 
              href="/contact" 
              className={`group relative py-2 px-4 whitespace-nowrap hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 ${
                isActive('/contact') ? 'text-white bg-white/10' : ''
              }`}
            >
              <span className="relative z-10">Contact</span>
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4 ${
                isActive('/contact') ? 'w-3/4' : ''
              }`}></span>
            </Link>
          </nav>

          {/* Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {/* <button className="group px-4 lg:px-6 py-2 rounded-full border-2 border-blue-400 text-white text-sm lg:text-base font-md bg-transparent hover:border-transparent transition-all duration-300 whitespace-nowrap relative overflow-hidden">
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button> */}
            <button 
              onClick={handleContactClick}
              className="group px-4 lg:px-6 py-2 rounded-full bg-white text-[#0a071a] text-sm lg:text-base font-md transition-all duration-300 whitespace-nowrap relative overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Us</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
          <nav className="flex flex-col items-center gap-6 text-lg font-medium text-white/90 w-full max-w-sm">
            <Link 
              href="/" 
              className={`group relative py-3 px-6 w-full text-center hover:text-white transition-all duration-300 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/20 ${
                isActive('/') ? 'text-white bg-white/10 border-white/40' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">🏠 Home</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-[#003cc7]/20 to-[#700f59]/20 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                isActive('/') ? 'opacity-100' : ''
              }`}></div>
            </Link>
            
            <Link 
              href="/webdesign" 
              className={`group relative py-3 px-6 w-full text-center hover:text-white transition-all duration-300 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20 ${
                isActive('/webdesign') ? 'text-white bg-white/10 border-white/40' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">🎨 Web Design</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                isActive('/webdesign') ? 'opacity-100' : ''
              }`}></div>
            </Link>
            
            <Link 
              href="/seo" 
              className={`group relative py-3 px-6 w-full text-center hover:text-white transition-all duration-300 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/10 hover:shadow-lg hover:shadow-green-500/20 ${
                isActive('/seo') ? 'text-white bg-white/10 border-white/40' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">📈 SEO</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                isActive('/seo') ? 'opacity-100' : ''
              }`}></div>
            </Link>
            
            <Link 
              href="/ads" 
              className={`group relative py-3 px-6 w-full text-center hover:text-white transition-all duration-300 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/10 hover:shadow-lg hover:shadow-red-500/20 ${
                isActive('/ads') ? 'text-white bg-white/10 border-white/40' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">📱 Advertising</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                isActive('/ads') ? 'opacity-100' : ''
              }`}></div>
            </Link>
            
            <Link 
              href="/branding" 
              className={`group relative py-3 px-6 w-full text-center hover:text-white transition-all duration-300 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/10 hover:shadow-lg hover:shadow-pink-500/20 ${
                isActive('/branding') ? 'text-white bg-white/10 border-white/40' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">✨ Branding</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                isActive('/branding') ? 'opacity-100' : ''
              }`}></div>
            </Link>
            
            <Link 
              href="/contact" 
              className={`group relative py-3 px-6 w-full text-center hover:text-white transition-all duration-300 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20 ${
                isActive('/contact') ? 'text-white bg-white/10 border-white/40' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">📞 Contact</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                isActive('/contact') ? 'opacity-100' : ''
              }`}></div>
            </Link>
          </nav>
          <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-sm">
            <button 
              onClick={handleContactClick}
              className="group w-full px-8 py-4 rounded-2xl bg-white text-white text-lg font-semibold transition-all duration-300 relative overflow-hidden border-2 border-transparent hover:border-white/30 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                📞 Get Free Consultation
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </button>
          </div>
        </div>
      </div>
      <ContactPopup isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} />
    </header>
  );
} 