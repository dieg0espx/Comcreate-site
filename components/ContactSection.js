import React from 'react'
import { motion } from 'framer-motion'

function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  const cardVariants = {
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="w-full mt-24 px-0 py-16">
      <motion.div 
        className="flex flex-col items-center w-full px-4 md:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.span 
          className="bg-[#181626] text-gray-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest"
          variants={headerVariants}
        >
          GET IN TOUCH
        </motion.span>
        <motion.h2 
          className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-center"
          variants={headerVariants}
        >
          Have questions? Contact us<br />for expert advice
        </motion.h2>
        <motion.div 
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
          variants={containerVariants}
        >
          {/* Email Card */}
          <motion.div 
            className="bg-fuchsia-900/80 rounded-2xl p-8 flex flex-col items-start"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="bg-fuchsia-700 text-white rounded-full p-3 mb-4"
              variants={iconVariants}
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="4"/><path d="M2 6l10 7 10-7"/></svg>
            </motion.div>
            <div className="text-fuchsia-300 text-xl font-bold mb-1">Email us</div>
            <div className="text-gray-200 text-base mb-1">sales@comcreate.com</div>
          </motion.div>
          {/* Chat Card */}
          <motion.div 
            className="bg-blue-900/80 rounded-2xl p-8 flex flex-col items-start"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="bg-blue-600 text-white rounded-full p-3 mb-4"
              variants={iconVariants}
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="4"/><path d="M8 12h8M8 16h4"/></svg>
            </motion.div>
            <div className="text-blue-300 text-xl font-bold mb-1">Chat us</div>
            <div className="text-gray-200 text-base mb-1">Live Chat</div>
          </motion.div>
          {/* Call Card */}
          <motion.a 
            href="tel:+16199550105"
            className="bg-yellow-900/80 rounded-2xl p-8 flex flex-col items-start hover:bg-yellow-900/90 transition-colors duration-200"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="bg-yellow-500 text-white rounded-full p-3 mb-4"
              variants={iconVariants}
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72l.3 2.18a2 2 0 0 1-1.1 2.18l-2.2 1.1a16 16 0 0 0 6.29 6.29l1.1-2.2a2 2 0 0 1 2.18-1.1l2.18.3A2 2 0 0 1 21 14.91V19a2 2 0 0 1-2 2z"/></svg>
            </motion.div>
            <div className="text-yellow-300 text-xl font-bold mb-1">Call us</div>
            <div className="text-gray-200 text-base mb-1 hover:text-yellow-300 transition-colors duration-200">
              +1 619-955-0105
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ContactSection