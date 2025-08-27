import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaComments } from 'react-icons/fa'
import Calendly from '../components/Calendly'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Contact Us | Get in Touch with Comcreate Digital Agency</title>
        <meta name="description" content="Contact Comcreate for all your digital marketing needs. Schedule a free consultation, call us, or send an email. We're here to help grow your business online." />
        <meta name="keywords" content="contact comcreate, digital marketing consultation, free consultation, web design contact, SEO contact, digital advertising contact" />
        <meta property="og:title" content="Contact Us | Get in Touch with Comcreate Digital Agency" />
        <meta property="og:description" content="Contact Comcreate for all your digital marketing needs. Schedule a free consultation, call us, or send an email." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Get in Touch with Comcreate Digital Agency" />
        <meta name="twitter:description" content="Contact Comcreate for all your digital marketing needs. Schedule a free consultation, call us, or send an email." />
      </Head>
      <div className="text-white">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent text-lg font-semibold">
              GET IN TOUCH
            </span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Start Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
              Digital Journey
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to transform your online presence? We&apos;re here to help you grow your business with innovative digital solutions. Schedule a free consultation or reach out today.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <motion.a 
              href="tel:+16199550105"
              className="bg-[#181626] rounded-3xl p-8 text-center border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 group block"
              variants={cardVariants}
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                <FaPhone className="text-blue-400 text-2xl rotate-90" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Call Us</h3>
              <p className="text-gray-400 mb-4">Speak directly with our experts</p>
              <div className="text-blue-400 font-semibold text-lg">619-955-0105</div>
              <p className="text-gray-500 text-sm mt-2">Available Mon-Fri, 9AM-6PM PST</p>
            </motion.a>

            {/* Email */}
            <motion.a 
              href="mailto:sales@comcreate.org"
              className="bg-[#181626] rounded-3xl p-8 text-center border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300 group block"
              variants={cardVariants}
            >
              <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email Us</h3>
              <p className="text-gray-400 mb-4">Send us a detailed message</p>
              <div className="text-cyan-400 font-semibold text-lg">sales@comcreate.org</div>
              <p className="text-gray-500 text-sm mt-2">We respond within 24 hours</p>
            </motion.a>

            {/* Schedule */}
            <motion.div 
              className="bg-[#181626] rounded-3xl p-8 text-center border border-gray-800/50 hover:border-teal-500/30 transition-all duration-300 group"
              variants={cardVariants}
            >
              <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                <FaCalendarAlt className="text-teal-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Schedule Meeting</h3>
              <p className="text-gray-400 mb-4">Book a free consultation</p>
              <div className="text-teal-400 font-semibold text-lg">30-Min Free Call</div>
              <p className="text-gray-500 text-sm mt-2">Choose your perfect time slot</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-[#181626] rounded-3xl p-8 border border-gray-800/50"
              variants={cardVariants}
            >
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-400">
                  Fill out the form below and we&apos;ll get back to you within 24 hours with a personalized response.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="(619) 555-0105"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-white mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="web-design">Web Design & Development</option>
                    <option value="seo">SEO Strategy</option>
                    <option value="digital-ads">Digital Advertising</option>
                    <option value="branding">Branding & Identity</option>
                    <option value="consultation">General Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div 
                    className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm mt-1">We'll get back to you within 24 hours.</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div 
                    className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="font-semibold">Error sending message</p>
                    <p className="text-sm mt-1">Please try again or contact us directly.</p>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:shadow-2xl hover:shadow-blue-500/25'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

            {/* Info & FAQ */}
            <motion.div 
              className="space-y-8"
              variants={cardVariants}
            >
              {/* Business Info */}
              <div className="bg-[#181626] rounded-3xl p-8 border border-gray-800/50">
                <h3 className="text-xl font-bold text-white mb-6">Business Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 flex-shrink-0 mt-1">
                      <FaMapMarkerAlt className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Location</h4>
                      <p className="text-gray-400 text-sm">San Diego, California, USA</p>
                      <p className="text-gray-400 text-sm">Serving clients worldwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center border border-cyan-500/20 flex-shrink-0 mt-1">
                      <FaClock className="text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                      <p className="text-gray-400 text-sm">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                      <p className="text-gray-400 text-sm">Weekend: By appointment only</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal-500/10 rounded-xl flex items-center justify-center border border-teal-500/20 flex-shrink-0 mt-1">
                      <FaComments className="text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Response Time</h4>
                      <p className="text-gray-400 text-sm">Email responses within 24 hours</p>
                      <p className="text-gray-400 text-sm">Phone calls answered during business hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick FAQ */}
              <div className="bg-[#181626] rounded-3xl p-8 border border-gray-800/50">
                <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">How quickly can you start my project?</h4>
                    <p className="text-gray-400 text-sm">Most projects can begin within 1-2 weeks after our initial consultation and agreement on project scope.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Do you offer free consultations?</h4>
                    <p className="text-gray-400 text-sm">Yes! We provide 30-minute free consultations to discuss your needs and how we can help achieve your goals.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">What&apos;s included in your services?</h4>
                    <p className="text-gray-400 text-sm">We offer comprehensive digital solutions including web design, SEO, digital advertising, and branding. Each service includes strategy, implementation, and ongoing support.</p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Do you work with small businesses?</h4>
                    <p className="text-gray-400 text-sm">Absolutely! We work with businesses of all sizes, from startups to enterprise companies, providing scalable solutions that fit your budget and goals.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Calendly Section */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Schedule Your Free Consultation
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Book a 30-minute call with our digital marketing experts to discuss your project and get personalized recommendations.
            </p>
          </div>
          
          <Calendly url="https://calendly.com/analytics-comcreate/30min" />
        </motion.div>

        {/* Services CTA */}
        <motion.div 
          className="text-center bg-[#181626] rounded-2xl p-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their online presence with our expert digital marketing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="tel:+16199550105"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now: 619-955-0105
            </motion.a>
            <motion.a 
              href="mailto:sales@comcreate.org"
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Contact