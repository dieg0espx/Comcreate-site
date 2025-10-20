import React from 'react'
import { motion } from 'framer-motion'

function FeaturedSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="w-full mt-24 px-4 py-16 bg-[#14121c] rounded-2xl">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.span 
          className="bg-[#181626] text-gray-300 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest inline-block"
          variants={headerVariants}
        >
          FEATURES
        </motion.span>
        <motion.h2 
          className="text-4xl md:text-6xl font-extrabold text-white"
          variants={headerVariants}
        >
          Digital solutions tailored<br className="hidden md:block" /> to your growth
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20"
          variants={containerVariants}
        >
          {/* High-Performance Websites */}
          <motion.div 
            className="flex items-start gap-4"
            variants={itemVariants}
          >
            <div className="text-blue-400 mt-1">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z"/></svg>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">High-Performance<br />Websites</h3>
              <p className="text-gray-400 mt-2 text-base">Speed, design, and UX — everything optimized to convert visitors into loyal clients.</p>
            </div>
          </motion.div>
          {/* Data-Driven SEO */}
          <motion.div 
            className="flex items-start gap-4"
            variants={itemVariants}
          >
            <div className="text-blue-400 mt-1">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M9 9h6v6H9z"/></svg>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">Data-Driven SEO</h3>
              <p className="text-gray-400 mt-2 text-base">From keywords to backlinks, we engineer visibility that grows with your brand.</p>
            </div>
          </motion.div>
          {/* Scalable Ad Campaigns */}
          <motion.div 
            className="flex items-start gap-4"
            variants={itemVariants}
          >
            <div className="text-blue-400 mt-1">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M7 7v10"/></svg>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">Scalable Ad Campaigns</h3>
              <p className="text-gray-400 mt-2 text-base">Whether you&apos;re starting small or scaling big, our ad systems flex to your goals.</p>
            </div>
          </motion.div>
          {/* Real Human Support */}
          <motion.div 
            className="flex items-start gap-4"
            variants={itemVariants}
          >
            <div className="text-blue-400 mt-1">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15a4 4 0 0 0 8 0"/><path d="M6 15v-2a6 6 0 0 1 12 0v2"/></svg>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">Real Human Support</h3>
              <p className="text-gray-400 mt-2 text-base">Our experts are with you at every step — strategy, execution, and growth tracking.</p>
            </div>
          </motion.div>
          {/* Unlimited Creative Potential */}
          <motion.div 
            className="flex items-start gap-4"
            variants={itemVariants}
          >
            <div className="text-blue-400 mt-1">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18.364 5.636a6 6 0 0 0-8.485 8.485l8.485 8.485a6 6 0 0 0 8.485-8.485l-8.485-8.485z"/></svg>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">Unlimited Creative<br />Potential</h3>
              <p className="text-gray-400 mt-2 text-base">Custom design, bold branding, and storytelling that makes your business unforgettable.</p>
            </div>
          </motion.div>
          {/* Free Setup & Optimization */}
          <motion.div 
            className="flex items-start gap-4"
            variants={itemVariants}
          >
            <div className="text-blue-400 mt-1">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 12.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">Free Setup & Optimization</h3>
              <p className="text-gray-400 mt-2 text-base">We don&apos;t just launch. We launch right — optimized, branded, and ready to perform.</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default FeaturedSection