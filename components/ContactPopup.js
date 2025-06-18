import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

function ContactPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#14121c] rounded-2xl p-6 md:p-8 w-full max-w-[700px] relative overflow-hidden my-8"
            onClick={e => e.stopPropagation()}
          >
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#003cc7]/10 to-[#700f59]/10 pointer-events-none" />
            
            {/* Close button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes className="w-6 h-6" />
            </motion.button>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative max-h-[calc(100vh-4rem)] overflow-y-auto pr-2"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-2xl md:text-3xl font-bold text-white mb-2 sticky top-0  py-2 z-10"
              >
                Get in Touch
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-gray-400 mb-6"
              >
                We&apos;d love to hear from you. Choose your preferred way to reach us.
              </motion.p>

              {/* Quick Contact Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 mb-8"
              >
                <motion.a 
                  href="tel:+16199550105" 
                  className="group flex-1 flex items-center gap-3 px-4 py-3 rounded-xl overflow-hidden transition-all duration-300 bg-gradient-to-r from-[#003cc7] to-[#003cc7]/80 hover:from-[#700f59] hover:to-[#700f59]/80 hover:shadow-lg hover:shadow-[#700f59]/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaPhone className="text-white text-lg transition-transform duration-300 rotate-90" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">Call Us</span>
                    <span className="text-white font-medium">619-955-0105</span>
                  </div>
                </motion.a>
                <motion.a 
                  href="mailto:sales@comcreate.org" 
                  className="group flex-1 flex items-center gap-3 px-4 py-3 rounded-xl overflow-hidden transition-all duration-300 bg-gradient-to-r from-[#003cc7] to-[#003cc7]/80 hover:from-[#700f59] hover:to-[#700f59]/80 hover:shadow-lg hover:shadow-[#700f59]/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="text-white text-lg group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">Email Us</span>
                    <span className="text-white font-medium">sales@comcreate.org</span>
                  </div>
                </motion.a>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="relative mb-8"
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700/50"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[#14121c] text-gray-400">Or send us a message</span>
                </div>
              </motion.div>
              
              <motion.form 
                variants={itemVariants}
                onSubmit={handleSubmit} 
                className="space-y-4 pb-4"
              >
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
                  >
                    {error}
                  </motion.div>
                )}
                
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-sm"
                  >
                    Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1725] border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1725] border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1725] border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 resize-none disabled:opacity-50"
                    placeholder="How can we help you?"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-xl bg-[#700f59] text-white font-medium transition-all duration-200 flex items-center justify-center gap-2 group border border-transparent hover:bg-white hover:border-white hover:text-[#700f59] disabled:opacity-50 disabled:cursor-not-allowed"
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && (
                    <FaPaperPlane className="text-white/80 group-hover:text-[#700f59] group-hover:translate-x-1 transition-all duration-200" />
                  )}
                </motion.button>
              </motion.form>

             
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ContactPopup;