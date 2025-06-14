import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function AgencySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const statVariants = {
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

  return (
    <div className="w-full mt-24 px-0 py-16 bg-[#14121c] rounded-2xl">
      <motion.div 
        className="flex flex-col-reverse md:flex-row items-center gap-12 w-full px-4 md:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Left: Astronaut Emoji */}
        <motion.div 
          className="flex-shrink-0 flex items-center justify-center w-full md:w-1/2"
          variants={imageVariants}
        >
          <Image
            src="/astronaut.png"
            alt="Astronaut"
            width={500}
            height={500}
            className="w-full h-[500px] object-contain"
          />
        </motion.div>
        {/* Right: Content */}
        <motion.div 
          className="flex-1 flex flex-col items-start max-w-xl"
          variants={containerVariants}
        >
          <motion.span 
            className="text-gray-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest"
            variants={contentVariants}
          >
            COMCREATE
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
            variants={contentVariants}
          >
            Launch your own agency<br />with expert guidance
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-400 mb-8"
            variants={contentVariants}
          >
            Thinking of starting your own web, SEO, or ad agency?<br />Comcreate offers tailored consulting to help you build, scale, and succeed. Learn from those who&apos;ve launched hundreds.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 w-full"
            variants={containerVariants}
          >
            {/* Stat 1 */}
            <motion.div 
              className="bg-green-900/80 rounded-2xl p-6 flex flex-col items-start min-w-[180px]"
              variants={statVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-green-400 text-3xl mb-2">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M9 9h6v6H9z"/></svg>
              </div>
              <div className="text-green-400 text-2xl font-bold">80%</div>
              <div className="text-gray-200 text-base mt-2">launch their agency<br />within 3 months.</div>
            </motion.div>
            {/* Stat 2 */}
            <motion.div 
              className="bg-orange-900/80 rounded-2xl p-6 flex flex-col items-start min-w-[180px]"
              variants={statVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-orange-400 text-3xl mb-2">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a10 10 0 0 1 0 20"/></svg>
              </div>
              <div className="text-orange-400 text-2xl font-bold">95% report</div>
              <div className="text-gray-200 text-base mt-2">increased clarity and confidence<br />after just one session.</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AgencySection