import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#070410] via-[#0a0820] to-[#0f0c2e] border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center">
              <img 
                src="/wide-logo.png" 
                alt="Comcreate Logo" 
                className="mr-3 w-[80%] my-5"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transform your digital presence with cutting-edge web design, SEO, advertising, and branding solutions that drive real results.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <FaPhone className="text-blue-400 group-hover:text-blue-300 transition-colors" size={16} />
                <a href="tel:+16199550105" className="text-sm hover:text-blue-400 transition-colors">
                  (619) 955-0105
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <FaEnvelope className="text-blue-400 group-hover:text-blue-300 transition-colors" size={16} />
                <a href="mailto:sales@comcreate.org" className="text-sm hover:text-blue-400 transition-colors">
                  sales@comcreate.org
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-blue-400" size={16} />
                <span className="text-sm">San Diego, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg mb-6 relative">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/webdesign" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link href="/seo" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  SEO & Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/ads" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Digital Advertising
                </Link>
              </li>
              <li>
                <Link href="/branding" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Branding & Identity
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg mb-6 relative">
              Company
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <a href="https://calendly.com/analytics-comcreate/30min" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Free Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg mb-6 relative">
              Connect
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></span>
            </h3>
            
            {/* Social Media */}
            <div className="flex flex-wrap gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                  <FaFacebook className="text-white group-hover:text-white" size={18} />
                </div>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-all duration-300 hover:scale-110">
                  <FaTwitter className="text-white group-hover:text-white" size={18} />
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                  <FaLinkedin className="text-white group-hover:text-white" size={18} />
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110">
                  <FaInstagram className="text-white group-hover:text-white" size={18} />
                </div>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110">
                  <FaYoutube className="text-white group-hover:text-white" size={18} />
                </div>
              </a>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-gray-300 text-sm">Stay updated with our latest insights</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Comcreate. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-gray-400">|</span>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer