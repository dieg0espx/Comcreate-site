import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function GrowthSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
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

  return (
    <div className="w-full mt-16 px-4">
      <motion.div 
        className="mx-auto flex flex-col md:flex-row items-center justify-center md:items-start gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Rocket */}
        <motion.div 
          className="flex-shrink-0 flex items-center justify-center w-full md:w-1/2"
          variants={imageVariants}
        >
          <Image 
            src="/rocket.png" 
            alt="Rocket" 
            width={500}
            height={500}
            className="w-full h-[500px] object-contain [mask-image:linear-gradient(to_right,black_80%,transparent)] [-webkit-mask-image:linear-gradient(to_right,black_80%,transparent)]"
          />
        </motion.div>
        {/* Content */}
        <motion.div 
          className="flex-1 flex flex-col items-start"
          variants={containerVariants}
        >
          <motion.span 
            className="bg-[#181626] text-gray-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest"
            variants={itemVariants}
          >
            COMCREATE
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
            variants={itemVariants}
          >
            Real growth tools for<br />real digital brands
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-400 mb-8 max-w-xl"
            variants={itemVariants}
          >
            We don&apos;t just deliver services — we build results.<br />
            From web to SEO to ads, Comcreate empowers creators, startups, and businesses to scale with confidence.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 w-full"
            variants={containerVariants}
          >
            {/* Card 1 */}
            <motion.div 
              className="bg-fuchsia-900/60 rounded-2xl p-8 flex flex-col items-start"
              variants={itemVariants}
            >
              <div className="text-fuchsia-400 text-3xl mb-2">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/></svg>
              </div>
              <div className="text-fuchsia-400 text-3xl font-bold">500 +</div>
              <div className="text-gray-300 text-base mt-2">brands launched<br />with us</div>
            </motion.div>
            {/* Card 2 */}
            <motion.div 
              className="bg-yellow-900/60 rounded-2xl p-8 flex flex-col items-start"
              variants={itemVariants}
            >
              <div className="text-yellow-300 text-3xl mb-2">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a10 10 0 0 1 0 20"/></svg>
              </div>
              <div className="text-yellow-300 text-3xl font-bold">1,000,000 +</div>
              <div className="text-gray-300 text-base mt-2">clicks generated<br />worldwide</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default GrowthSection