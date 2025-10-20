"use client";

import { FaGlobe, FaComments, FaPhone, FaBars, FaTimes, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
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
            Get a free site audit by scheduling a call with our team.
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

          {/* Advanced Mobile menu button */}
          <button 
            className="md:hidden relative p-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/20 backdrop-blur-sm hover:from-blue-600/30 hover:to-purple-600/30 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
              {/* Animated Hamburger Lines */}
              <span className={`block absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
              <span className={`block absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
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
              href="/projects" 
              className={`group relative py-2 px-4 whitespace-nowrap hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 ${
                isActive('/projects') ? 'text-white bg-white/10' : ''
              }`}
            >
              <span className="relative z-10">Projects</span>
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4 ${
                isActive('/projects') ? 'w-3/4' : ''
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

      {/* Advanced Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-50 transform transition-all duration-500 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!isMenuOpen}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#070410] via-[#0a0820] to-[#0f0c2e] overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
          <div className={`absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl transition-all duration-1000 ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl transition-all duration-1000 delay-200 ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl transition-all duration-1000 delay-400 ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
          
          {/* Floating geometric shapes
          <div className={`absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full transition-all duration-1000 delay-300 ${isMenuOpen ? 'translate-y-0 opacity-60' : '-translate-y-10 opacity-0'}`}></div>
          <div className={`absolute top-32 left-16 w-3 h-3 bg-purple-400 rounded-full transition-all duration-1000 delay-500 ${isMenuOpen ? 'translate-y-0 opacity-60' : '-translate-y-10 opacity-0'}`}></div>
          <div className={`absolute bottom-40 right-12 w-2 h-2 bg-cyan-400 rounded-full transition-all duration-1000 delay-700 ${isMenuOpen ? 'translate-y-0 opacity-60' : 'translate-y-10 opacity-0'}`}></div>
          <div className={`absolute bottom-20 left-20 w-5 h-5 bg-pink-400 rounded-full transition-all duration-1000 delay-600 ${isMenuOpen ? 'translate-y-0 opacity-60' : 'translate-y-10 opacity-0'}`}></div> */}
        </div>

        {/* Close button with advanced styling */}
        <button 
          className="fixed top-6 right-6 z-[100] p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:rotate-90 group"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
          style={{ position: 'fixed' }}
        >
          <FaTimes size={20} className="text-white group-hover:text-blue-300 transition-colors duration-300" />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Main Menu Content */}
        <div className="relative z-10 h-full overflow-y-auto py-20 px-6">
          {/* Logo and Brand */}
          <div className={`flex items-center justify-center mb-8 transition-all duration-700 delay-200 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <img
              src="/wide-logo.png"
              alt="Comcreate Logo"
              className="w-[50%] my-0"
            />
          </div>

          {/* Main Navigation */}
          <nav className="space-y-3 mb-8">
            <div className={`text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 transition-all duration-700 delay-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              Services
            </div>
            {[
              { href: '/', label: 'Home', icon: '🏠', gradient: 'from-blue-500 to-cyan-500', delay: 'delay-300', desc: 'Our homepage' },
              { href: '/webdesign', label: 'Web Design', icon: '🎨', gradient: 'from-purple-500 to-blue-500', delay: 'delay-400', desc: 'Custom websites & development' },
              { href: '/seo', label: 'SEO Services', icon: '📈', gradient: 'from-green-500 to-blue-500', delay: 'delay-500', desc: 'Search engine optimization' },
              { href: '/ads', label: 'Digital Advertising', icon: '📱', gradient: 'from-red-500 to-orange-500', delay: 'delay-600', desc: 'Google, Facebook & social ads' },
              { href: '/branding', label: 'Brand Identity', icon: '✨', gradient: 'from-purple-500 to-pink-500', delay: 'delay-700', desc: 'Logos & brand design' },
              { href: '/projects', label: 'Our Projects', icon: '💼', gradient: 'from-indigo-500 to-purple-500', delay: 'delay-750', desc: 'View our portfolio' },
              { href: '/contact', label: 'Contact Us', icon: '📞', gradient: 'from-cyan-500 to-blue-500', delay: 'delay-800', desc: 'Get in touch today' },
            ].map((item, index) => (
              <Link 
                key={item.href}
                href={item.href}
                className={`group block transition-all duration-700 ${item.delay} ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className={`flex items-center p-3 rounded-xl border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300 hover:scale-102 hover:shadow-lg group-hover:bg-white/5 ${
                  isActive(item.href) ? 'bg-white/10 border-white/30' : ''
                }`}>
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white text-sm">{item.icon}</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white text-sm font-semibold group-hover:text-blue-300 transition-colors duration-300">
                      {item.label}
                    </h3>
                    <p className="text-white/60 text-xs truncate">{item.desc}</p>
                  </div>
                  
                  <div className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 text-sm">
                    →
                  </div>
                </div>
              </Link>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="space-y-3 mb-8">
            <div className={`text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 transition-all duration-700 delay-900 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              Quick Actions
            </div>
            <div className={`grid grid-cols-2 gap-3 transition-all duration-700 delay-1000 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <a href="https://calendly.com/analytics-comcreate/30min" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-xl border border-white/10 hover:border-green-400/30 hover:bg-green-500/10 transition-all duration-300 text-center">
                <div className="text-lg mb-1">📅</div>
                <div className="text-white text-xs font-medium">Book Call</div>
                <div className="text-white/60 text-xs">Free consultation</div>
              </a>
              <Link href="/projects" className="group p-3 rounded-xl border border-white/10 hover:border-purple-400/30 hover:bg-purple-500/10 transition-all duration-300 text-center" onClick={() => setIsMenuOpen(false)}>
                <div className="text-lg mb-1">💼</div>
                <div className="text-white text-xs font-medium">Portfolio</div>
                <div className="text-white/60 text-xs">Our work</div>
              </Link>
            </div>
          </div>



          {/* Contact Information */}
          <div className="space-y-3 mb-8">
            <div className={`text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 transition-all duration-700 delay-1100 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              Contact Info
            </div>
            <div className={`space-y-2 transition-all duration-700 delay-1200 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <a href="tel:+16199550105" className="flex items-center p-2 rounded-lg hover:bg-white/5 transition-colors group">
                <FaPhone className="text-blue-400 mr-3" size={14} />
                <div>
                  <div className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors">(619) 955-0105</div>
                  <div className="text-white/60 text-xs">Call us anytime</div>
                </div>
              </a>
              <a href="mailto:sales@comcreate.org" className="flex items-center p-2 rounded-lg hover:bg-white/5 transition-colors group">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="text-purple-400 mr-3">
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                </svg>
                <div>
                  <div className="text-white text-sm font-medium group-hover:text-purple-300 transition-colors">sales@comcreate.org</div>
                  <div className="text-white/60 text-xs">Email support</div>
                </div>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-3 mb-8">
            <div className={`text-xs font-semibold text-white/60 uppercase tracking-wider mb-3 transition-all duration-700 delay-1300 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              Follow Us
            </div>
            <div className={`flex justify-center space-x-4 transition-all duration-700 delay-1400 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {[
                { href: "https://facebook.com", icon: <FaFacebook />, color: "hover:text-blue-500", bg: "hover:bg-blue-500/20" },
                { href: "https://twitter.com", icon: <FaTwitter />, color: "hover:text-sky-400", bg: "hover:bg-sky-500/20" },
                { href: "https://linkedin.com", icon: <FaLinkedin />, color: "hover:text-blue-600", bg: "hover:bg-blue-600/20" },
                { href: "https://instagram.com", icon: <FaInstagram />, color: "hover:text-pink-500", bg: "hover:bg-pink-500/20" },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/70 transition-all duration-300 hover:scale-110 ${social.color} ${social.bg}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-700 delay-1500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button 
              onClick={handleContactClick}
              className="group w-full p-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 relative overflow-hidden"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-lg">🚀</span>
                <span>Get Free Consultation</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
      <ContactPopup isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} />
    </header>
  );
} 