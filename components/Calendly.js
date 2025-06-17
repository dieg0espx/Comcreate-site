"use client";

import { useEffect } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Calendly({ url = "https://calendly.com/comcreate/30min" }) {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="w-full px-0 bg-[#14121c] rounded-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="w-full py-10 md:py-20 px-4 md:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
            {/* Left Column - Text Content */}
            <motion.div className="space-y-4 md:space-y-6" variants={containerVariants}>
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
                variants={itemVariants}
              >
                Schedule a Meeting with Our Experts
              </motion.h2>
              <motion.p 
                className="text-base md:text-lg text-gray-300"
                variants={itemVariants}
              >
                Book a free consultation with our team of digital marketing professionals. 
                We&#39;ll help you understand how we can transform your online presence and 
                drive real business growth.
              </motion.p>
              <motion.div 
                className="space-y-3 md:space-y-4"
                variants={containerVariants}
              >
                <motion.div 
                  className="flex items-center gap-3"
                  variants={itemVariants}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#003cc7] to-[#700f59]"></div>
                  <span className="text-gray-300">30-minute free consultation</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  variants={itemVariants}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#003cc7] to-[#700f59]"></div>
                  <span className="text-gray-300">Personalized strategy discussion</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  variants={itemVariants}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#003cc7] to-[#700f59]"></div>
                  <span className="text-gray-300">No-obligation assessment</span>
                </motion.div>
              </motion.div>

              {/* Contact Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6"
                variants={containerVariants}
              >
                <motion.a 
                  href="tel:+16199550105" 
                  className="group relative flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 rounded-full overflow-hidden transition-all duration-300 bg-[#003cc7] hover:bg-[#700f59] hover:shadow-lg hover:shadow-[#700f59]/20"
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  <div className="relative flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaPhone className="text-white text-base md:text-lg transition-transform duration-300 rotate-90" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs md:text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">Call Us</span>
                      <span className="text-sm md:text-base text-white font-medium">619-955-0105</span>
                    </div>
                  </div>
                </motion.a>
                <motion.a 
                  href="mailto:sales@comcreate.org" 
                  className="group relative flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 rounded-full overflow-hidden transition-all duration-300 bg-[#003cc7] hover:bg-[#700f59] hover:shadow-lg hover:shadow-[#700f59]/20"
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  <div className="relative flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaEnvelope className="text-white text-base md:text-lg group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs md:text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">Email Us</span>
                      <span className="text-sm md:text-base text-white font-medium">sales@comcreate.org</span>
                    </div>
                  </div>
                </motion.a>
              </motion.div>

              <p className="text-gray-400 text-sm mb-4">
                Can&apos;t find a time that works for you?
              </p>
            </motion.div>

            {/* Right Column - Calendly Widget */}
            <motion.div 
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] bg-white/5 rounded-2xl p-2 md:p-4"
              variants={itemVariants}
            >
              <div 
                className="calendly-inline-widget w-full h-full"
                data-url={url}
                style={{ minWidth: '280px' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 