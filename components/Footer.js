

import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="bg-black py-16 px-4 md:px-16">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      {/* Left: Logo and Contact Icons */}
      <div className="flex flex-col items-start gap-10 min-w-[320px]">
        <div className="flex items-center gap-4">
          {/* Logo (replace src with your logo path) */}
          <div className="flex items-center justify-center">
            <Image src="/logo-footer.png" alt="Logo" width={200} height={100} />
          </div>
        </div>
        <div className="flex gap-8">
          {/* Phone Icon */}
          <div className="flex items-center justify-center">
            <svg width="20" height="20" fill="none" stroke="#3b82f6" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V21a1 1 0 0 1-1.09 1A19.91 19.91 0 0 1 3 5.09 1 1 0 0 1 4 4h4.09a1 1 0 0 1 1 .75l1.13 4.52a1 1 0 0 1-.29 1L8.21 11.79a16 16 0 0 0 6 6l1.52-1.52a1 1 0 0 1 1-.29l4.52 1.13a1 1 0 0 1 .75 1V21z"/></svg>
          </div>
          {/* Email Icon */}
          <div className="flex items-center justify-center">
            <svg width="20" height="20" fill="none" stroke="#3b82f6" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
          </div>
          {/* Chat Icon */}
          <div className="flex items-center justify-center">
            <svg width="20" height="20" fill="none" stroke="#3b82f6" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
        </div>
      </div>
      {/* Right: Links */}
      <div className="flex flex-1 flex-col md:flex-row gap-12 w-full justify-end px-4 md:px-0">
        {/* Quick Links */}
        <div>
          <h4 className="text-gray-400 text-sm font-semibold mb-6 tracking-widest">QUICK LINKS</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-white text-xl font-normal hover:text-blue-400">Solutions</a></li>
            <li><a href="#" className="text-white text-xl font-normal hover:text-blue-400">Company</a></li>
            <li><a href="#" className="text-white text-xl font-normal hover:text-blue-400">Contact</a></li>
            <li><a href="#" className="text-white text-xl font-normal hover:text-blue-400">Blog</a></li>
          </ul>
        </div>
        {/* Template */}
        <div>
          <h4 className="text-gray-400 text-sm font-semibold mb-6 tracking-widest">TEMPLATE</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-white text-xl font-normal hover:text-blue-400">Licensing</a></li>
            <li><a href="#" className="text-white text-xl font-normal hover:text-blue-400">Style Guide</a></li>
            <li><a href="#" className="text-white text-xl font-normal hover:text-blue-400">Changelog</a></li>
            <li><a href="#" className="text-white text-xl font-normal hover:text-blue-400">Instructions</a></li>
          </ul>
        </div>
        {/* Social */}
        <div>
          <h4 className="text-gray-400 text-sm font-semibold mb-6 tracking-widest">SOCIAL</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-white text-xl font-normal hover:text-blue-400">Facebook</a></li>
            <li><a href="#" className="text-white text-xl font-normal hover:text-blue-400">Twitter</a></li>
            <li><a href="#" className="text-white text-xl font-normal hover:text-blue-400">YouTube</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer