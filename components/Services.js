import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="w-full flex flex-col items-center justify-center mt-12 py-16 relative z-99 bg-black md:bg-transparent">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Web Design Card */}
        <Link href="/webdesign">
          <motion.div 
            className="bg-[#181626] rounded-2xl p-8 flex flex-col gap-4 relative shadow-lg cursor-pointer hover:bg-[#1f1d35] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            variants={cardVariants}
          >
            <div className="text-blue-400 text-3xl mb-2">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </div>
            <h3 className="text-white text-2xl font-bold">Web Design</h3>
            <p className="text-gray-400">Modern, responsive websites designed to engage and convert your audience.</p>
            <div className="text-blue-400 font-semibold flex items-center gap-1 mt-auto">Learn more <span>→</span></div>
          </motion.div>
        </Link>
        {/* SEO Strategy Card */}
        <Link href="/seo">
          <motion.div 
            className="bg-[#181626] rounded-2xl p-8 flex flex-col gap-4 relative shadow-lg cursor-pointer hover:bg-[#1f1d35] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            variants={cardVariants}
          >
            <span className="absolute top-4 right-4 bg-fuchsia-500 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
            <div className="text-blue-400 text-3xl mb-2">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/></svg>
            </div>
            <h3 className="text-white text-2xl font-bold">SEO Strategy</h3>
            <p className="text-gray-400">Boost your visibility with strategies that drive organic traffic and long-term growth.</p>
            <div className="text-blue-400 font-semibold flex items-center gap-1 mt-auto">Learn more <span>→</span></div>
          </motion.div>
        </Link>
        {/* Digital Ads Card */}
        <Link href="/ads">
          <motion.div 
            className="bg-[#181626] rounded-2xl p-8 flex flex-col gap-4 relative shadow-lg cursor-pointer hover:bg-[#1f1d35] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            variants={cardVariants}
          >
            <div className="text-blue-400 text-3xl mb-2">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v-2a4 4 0 014-4h8a4 4 0 014 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <h3 className="text-white text-2xl font-bold">Digital Ads</h3>
            <p className="text-gray-400">Targeted campaigns across Google and social platforms that deliver real results.</p>
            <div className="text-blue-400 font-semibold flex items-center gap-1 mt-auto">Learn more <span>→</span></div>
          </motion.div>
        </Link>
        {/* Branding Card */}
        <Link href="/branding">
          <motion.div 
            className="bg-[#181626] rounded-2xl p-8 flex flex-col gap-4 relative shadow-lg cursor-pointer hover:bg-[#1f1d35] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            variants={cardVariants}
          >
            <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">BEST VALUE</span>
            <div className="text-blue-400 text-3xl mb-2">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="4"/><rect x="4" y="10" width="16" height="4"/><rect x="4" y="16" width="16" height="4"/></svg>
            </div>
            <h3 className="text-white text-2xl font-bold">Branding</h3>
            <p className="text-gray-400">From logos to voice — build a brand identity that stands out and connects.</p>
            <div className="text-blue-400 font-semibold flex items-center gap-1 mt-auto">Learn more <span>→</span></div>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  )
}

export default Services