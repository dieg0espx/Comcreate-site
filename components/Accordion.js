"use client";

import { FaChevronDown } from 'react-icons/fa';

export default function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border border-[#191a23] rounded-2xl mb-4 overflow-hidden">
      <button
        className="w-full px-8 py-6 text-left flex justify-between items-center bg-[#191a23] hover:bg-[#1f202d] transition-colors duration-200"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title}`}
      >
        <span className="font-semibold text-white text-lg">{title}</span>
        <FaChevronDown
          className={`transform transition-transform duration-200 text-blue-400 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        id={`accordion-content-${title}`}
        className={`overflow-hidden transition-all duration-200 ease-in-out bg-[#191a23] ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-8 py-6 text-gray-400">
          {children}
        </div>
      </div>
    </div>
  );
} 