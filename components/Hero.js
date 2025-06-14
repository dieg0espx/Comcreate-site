import React from 'react'
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { GlobeDemo } from './ui/globe';

// Dynamically import the GlobeDemoClient component with no SSR
const GlobeDemoClient = dynamic(
  () => import('../components/ui/globe-demo-client'),
  { ssr: false }
);

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.5,
        duration: 1.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 1.2,
        duration: 1.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25,
        mass: 1.5,
        delay: 2.2,
        duration: 2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 1.2,
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const globeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 1.5, // Increased delay to render after text
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <div className="flex flex-row items-center justify-center w-full -mb-[100px]">
      {/* Left Side: Content */}
      <motion.div 
        className="flex flex-col justify-center basis-1/2 px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <motion.button 
          className="mb-6 px-4 py-2 rounded-full bg-[#181626] text-white text-xs font-semibold tracking-wider flex items-center gap-2 w-max hover:bg-[#252238] transition-colors"
          variants={buttonVariants}
          whileHover="hover"
        >
          SAVE 15% ON DOMAIN <span className="ml-2 bg-fuchsia-500 rounded-full w-5 h-5 flex items-center justify-center text-white">→</span>
        </motion.button> */}

        <motion.h1 
          className="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight"
          variants={itemVariants}
        >
          Ignite your brand with next-gen{" "}
          <motion.span 
            className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-400 bg-clip-text text-transparent"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Digital Power
          </motion.span>
          <br />
          Web, SEO & Ads
        </motion.h1>

        <motion.p 
          className="text-lg text-gray-400 mb-2"
          variants={itemVariants}
        >
          Your business deserves more than clicks — it needs conversion, impact, and a digital edge.
        </motion.p>

        <motion.p 
          className="text-lg text-gray-400 mb-8"
          variants={itemVariants}
        >
          Work with the team rewriting what success looks like online.
        </motion.p>

        <motion.div 
          className="flex gap-4"
          variants={itemVariants}
        >
          <motion.button 
            className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
            variants={buttonVariants}
            whileHover="hover"
          >
            Get Started
          </motion.button>
          <motion.a 
            href="#" 
            className="flex items-center text-blue-400 text-lg font-semibold hover:text-blue-300 transition-colors"
            variants={buttonVariants}
            whileHover="hover"
          >
            <span className="mr-2">🎧</span> Support Center
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right Side: Globe */}
      <div className="basis-1/2 flex items-center justify-center relative">
        <GlobeDemoClient />
      </div>
    </div>
  )
}

export default Hero