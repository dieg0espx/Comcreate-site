import React from 'react'
import { motion } from 'framer-motion'

function ReviewsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const reviewVariants = {
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

  const starVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
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

  return (
    <div className="w-full mt-24 px-4 py-16">
      <motion.div 
        className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-16 items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Left: Reviews Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 w-full"
          variants={containerVariants}
        >
          {/* Review 1 */}
          <motion.div 
            className="bg-[#181626] rounded-2xl p-6 shadow-lg"
            variants={reviewVariants}
          >
            <div className="flex mb-4">
              {Array(5).fill(0).map((_, i) => (
                <motion.svg 
                  key={i} 
                  width="22" 
                  height="22" 
                  fill="#e600a3" 
                  viewBox="0 0 24 24"
                  custom={i}
                  variants={starVariants}
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </motion.svg>
              ))}
            </div>
            <p className="text-gray-200 mb-4">Comcreate didn&apos;t just build our site — they built our brand. Our traffic tripled in 2 months!</p>
            <div className="text-white font-bold">Elena R.<br /><span className="font-normal text-gray-400">Founder</span></div>
          </motion.div>
          {/* Review 2 */}
          <motion.div 
            className="bg-[#181626] rounded-2xl p-6 shadow-lg"
            variants={reviewVariants}
          >
            <div className="flex mb-4">
              {Array(5).fill(0).map((_, i) => (
                <motion.svg 
                  key={i} 
                  width="22" 
                  height="22" 
                  fill="#e600a3" 
                  viewBox="0 0 24 24"
                  custom={i}
                  variants={starVariants}
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </motion.svg>
              ))}
            </div>
            <p className="text-gray-200 mb-4">We launched a full ad campaign with Comcreate and saw a 4x return in 3 weeks. Unreal.</p>
            <div className="text-white font-bold">Tara L.<br /><span className="font-normal text-gray-400">Owner</span></div>
          </motion.div>
          {/* Review 3 */}
          <motion.div 
            className="bg-[#181626] rounded-2xl p-6 shadow-lg"
            variants={reviewVariants}
          >
            <div className="flex mb-4">
              {Array(5).fill(0).map((_, i) => (
                <motion.svg 
                  key={i} 
                  width="22" 
                  height="22" 
                  fill="#e600a3" 
                  viewBox="0 0 24 24"
                  custom={i}
                  variants={starVariants}
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </motion.svg>
              ))}
            </div>
            <p className="text-gray-200 mb-4">Their SEO team is next level. We&apos;re ranking top 3 for every keyword that matters.</p>
            <div className="text-white font-bold">Marcus T.<br /><span className="font-normal text-gray-400">Marketing Lead</span></div>
          </motion.div>
          {/* Review 4 */}
          <motion.div 
            className="bg-[#181626] rounded-2xl p-6 shadow-lg"
            variants={reviewVariants}
          >
            <div className="flex mb-4">
              {Array(5).fill(0).map((_, i) => (
                <motion.svg 
                  key={i} 
                  width="22" 
                  height="22" 
                  fill="#e600a3" 
                  viewBox="0 0 24 24"
                  custom={i}
                  variants={starVariants}
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </motion.svg>
              ))}
            </div>
            <p className="text-gray-200 mb-4">Professional, fast, and creative — our brand finally looks and feels like it should</p>
            <div className="text-white font-bold">Daniel K.<br /><span className="font-normal text-gray-400">CEO</span></div>
          </motion.div>
        </motion.div>
        {/* Right: Heading and Button */}
        <motion.div 
          className="flex-1 flex flex-col items-start justify-center max-w-xl"
          variants={contentVariants}
        >
          <motion.span 
            className="bg-[#181626] text-gray-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest"
            variants={contentVariants}
          >
            REVIEWS
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
            variants={contentVariants}
          >
            What our clients say<br />fuels what we create
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-400 mb-8"
            variants={contentVariants}
          >
            From idea to execution, our partners trust Comcreate to deliver beyond expectations every time. Their success stories are our proudest proof.
          </motion.p>
          <motion.button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition"
            variants={contentVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More Reviews
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ReviewsSection