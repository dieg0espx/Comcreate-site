import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Head from 'next/head'
import ContactPopup from '../components/ContactPopup'

function Branding() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

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

  const services = [
    {
      id: 1,
      category: "BRAND IDENTITY",
      title: "Logo & Visual Identity",
      description: "Create a memorable brand identity that captures your essence and resonates with your audience. From logo design to comprehensive visual systems, we craft identities that stand the test of time and drive recognition.",
      features: [
        "Custom logo design & variations",
        "Brand color palette & typography",
        "Visual identity guidelines",
        "Business card & stationery design",
        "Social media brand assets",
        "Brand style guide creation"
      ],
      icon: "🎨",
      gradient: "bg-gradient-to-br from-purple-500/80 to-pink-600/60",
      popular: true
    },
    {
      id: 2,
      category: "BRAND STRATEGY",
      title: "Brand Positioning & Strategy",
      description: "Develop a compelling brand strategy that defines your unique market position, target audience, and competitive advantage. We help you craft a brand story that connects emotionally with your customers.",
      features: [
        "Brand positioning & messaging",
        "Target audience research",
        "Competitive analysis & differentiation",
        "Brand voice & tone development",
        "Brand architecture planning",
        "Go-to-market strategy"
      ],
      icon: "🎯",
      gradient: "bg-gradient-to-br from-cyan-500/80 to-purple-600/60",
      popular: false
    },
    {
      id: 3,
      category: "BRAND EXPERIENCE",
      title: "Brand Guidelines & Systems",
      description: "Establish comprehensive brand guidelines and systems that ensure consistent brand application across all touchpoints. From digital to print, maintain brand integrity at every interaction.",
      features: [
        "Comprehensive brand guidelines",
        "Digital brand asset libraries",
        "Print & packaging guidelines",
        "Photography & imagery style",
        "Brand application examples",
        "Team training & brand education"
      ],
      icon: "📋",
      gradient: "bg-gradient-to-br from-indigo-500/80 to-purple-600/60",
      popular: false
    },
    {
      id: 4,
      category: "BRAND EVOLUTION",
      title: "Rebranding & Refresh",
      description: "Revitalize your existing brand with strategic rebranding or refresh initiatives. Whether you need a complete overhaul or subtle evolution, we guide your brand transformation journey.",
      features: [
        "Brand audit & assessment",
        "Rebranding strategy & planning",
        "Logo redesign & modernization",
        "Brand migration & rollout",
        "Stakeholder communication",
        "Brand relaunch campaigns"
      ],
      icon: "🔄",
      gradient: "bg-gradient-to-br from-pink-500/80 to-purple-600/60",
      popular: false
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "We dive deep into your business, industry, competitors, and target audience to understand what makes your brand unique and how to position it effectively."
    },
    {
      step: "02", 
      title: "Strategy & Positioning",
      description: "Develop a comprehensive brand strategy including positioning, messaging, personality, and voice that resonates with your ideal customers and differentiates you from competitors."
    },
    {
      step: "03",
      title: "Design & Creation",
      description: "Bring your brand to life through visual identity design, logo creation, color palettes, typography, and all the creative assets that will represent your brand."
    },
    {
      step: "04",
      title: "Implementation & Guidelines",
      description: "Create comprehensive brand guidelines and oversee the implementation across all touchpoints, ensuring consistency and providing ongoing support for your team."
    }
  ];

  return (
    <>
      <Head>
        <title>Branding & Brand Identity Services | Logo Design & Brand Strategy | Comcreate</title>
        <meta name="description" content="Professional branding services including logo design, brand identity, visual systems, and brand strategy. Build a memorable brand that stands out and connects with your audience." />
        <meta name="keywords" content="branding services, logo design, brand identity, visual identity, brand strategy, brand positioning, rebranding, brand guidelines, brand refresh" />
        <meta property="og:title" content="Branding & Brand Identity Services | Logo Design & Brand Strategy | Comcreate" />
        <meta property="og:description" content="Professional branding services including logo design, brand identity, visual systems, and brand strategy. Build a memorable brand that stands out." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Branding & Brand Identity Services | Logo Design & Brand Strategy | Comcreate" />
        <meta name="twitter:description" content="Professional branding services including logo design, brand identity, visual systems, and brand strategy. Build a memorable brand that stands out." />
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
            <span className="bg-gradient-to-r from-purple-400 via-magenta-500 to-pink-400 bg-clip-text text-transparent text-lg font-semibold">
              BRANDING & BRAND IDENTITY
            </span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Build a Brand That{" "}
            <span className="bg-gradient-to-r from-purple-400 via-magenta-500 to-pink-400 bg-clip-text text-transparent">
              Stands Out & Connects
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            From logos to comprehensive brand strategies, we create memorable brand identities that resonate with your audience, differentiate you from competitors, and drive business growth.
          </p>
          <motion.button 
            className="bg-gradient-to-r from-purple-500 to-magenta-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsContactPopupOpen(true)}
          >
            Start Your Brand Journey
          </motion.button>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Branding Services
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive branding solutions that cover every aspect of your brand identity, from strategy and positioning to visual design and implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Logo & Visual Identity - Large Featured Card */}
            <motion.div 
              className="lg:col-span-8 bg-[#181626] rounded-3xl overflow-hidden relative group hover:transform hover:scale-[1.01] transition-all duration-500 border border-gray-800/50 hover:border-purple-500/30"
              variants={cardVariants}
            >
              <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                BEST VALUE
              </span>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="p-8 lg:p-10 relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center border border-purple-500/20">
                      <span className="text-3xl">{services[0].icon}</span>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-purple-400 tracking-wider mb-1">
                        {services[0].category}
                      </div>
                      <h3 className="text-3xl font-bold text-white">{services[0].title}</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed text-lg">{services[0].description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {services[0].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="bg-purple-500/10 border border-purple-500/20 text-purple-400 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
                  onClick={() => setIsContactPopupOpen(true)}
                >
                  Get Started 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>

            {/* Brand Strategy - Tall Card */}
            <motion.div 
              className="lg:col-span-4 bg-[#181626] rounded-3xl overflow-hidden relative group hover:transform hover:scale-[1.02] transition-all duration-500 border border-gray-800/50 hover:border-cyan-500/30"
              variants={cardVariants}
            >
              <div className="absolute top-0 left-0 w-20 h-20 bg-cyan-500/5 rounded-full -translate-y-10 -translate-x-10"></div>
              
              <div className="p-6 relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center border border-cyan-500/20 mb-4">
                  <span className="text-2xl">{services[1].icon}</span>
                </div>
                
                <div className="text-xs font-semibold text-cyan-400 tracking-wider mb-1">
                  {services[1].category}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{services[1].title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm flex-grow">{services[1].description}</p>
                
                <div className="space-y-2 mb-6">
                  {services[1].features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-400 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group text-sm mt-auto"
                  onClick={() => setIsContactPopupOpen(true)}
                >
                  Get Started 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>

            {/* Brand Guidelines - Medium Card */}
            <motion.div 
              className="lg:col-span-6 bg-[#181626] rounded-3xl overflow-hidden relative group hover:transform hover:scale-[1.02] transition-all duration-500 border border-gray-800/50 hover:border-indigo-500/30"
              variants={cardVariants}
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-indigo-500/5 rounded-full -translate-y-14 translate-x-14"></div>
              
              <div className="p-6 lg:p-8 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center border border-indigo-500/20">
                    <span className="text-xl">{services[2].icon}</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-indigo-400 tracking-wider">
                      {services[2].category}
                    </div>
                    <h3 className="text-xl font-bold text-white">{services[2].title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">{services[2].description}</p>
                
                <div className="grid grid-cols-1 gap-2 mb-6">
                  {services[2].features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-indigo-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-400 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 group text-sm"
                  onClick={() => setIsContactPopupOpen(true)}
                >
                  Get Started 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>

            {/* Rebranding - Medium Card */}
            <motion.div 
              className="lg:col-span-6 bg-[#181626] rounded-3xl overflow-hidden relative group hover:transform hover:scale-[1.02] transition-all duration-500 border border-gray-800/50 hover:border-pink-500/30"
              variants={cardVariants}
            >
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="p-6 lg:p-8 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center border border-pink-500/20">
                    <span className="text-xl">{services[3].icon}</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-pink-400 tracking-wider">
                      {services[3].category}
                    </div>
                    <h3 className="text-xl font-bold text-white">{services[3].title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">{services[3].description}</p>
                
                <div className="grid grid-cols-1 gap-2 mb-6">
                  {services[3].features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-pink-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-400 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="bg-pink-500/10 border border-pink-500/20 text-pink-400 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-pink-500/20 hover:border-pink-500/40 transition-all duration-300 group text-sm"
                  onClick={() => setIsContactPopupOpen(true)}
                >
                  Get Started 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Branding Process
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A strategic approach that ensures your brand resonates with your audience and stands out in the marketplace through thoughtful research, planning, and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={cardVariants}
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-magenta-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                  <span className="text-purple-400 font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Brand Elements Section */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Brand Elements We Create
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Every aspect of your brand identity designed to work together harmoniously and create a cohesive brand experience across all touchpoints.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Logo Design", icon: "🏷️", color: "purple" },
              { name: "Color Palette", icon: "🎨", color: "magenta" },
              { name: "Typography", icon: "✍️", color: "purple" },
              { name: "Business Cards", icon: "💳", color: "pink" },
              { name: "Website Design", icon: "💻", color: "purple" },
              { name: "Social Media", icon: "📱", color: "magenta" },
              { name: "Packaging", icon: "📦", color: "pink" },
              { name: "Signage", icon: "🪧", color: "purple" },
              { name: "Brochures", icon: "📄", color: "magenta" },
              { name: "Brand Guidelines", icon: "📋", color: "pink" },
              { name: "Photography", icon: "📸", color: "purple" },
              { name: "Brand Voice", icon: "🗣️", color: "magenta" }
            ].map((element, index) => (
              <motion.div 
                key={index}
                className="bg-[#181626] rounded-2xl p-6 text-center border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 group"
                variants={cardVariants}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {element.icon}
                </div>
                <div className="text-white font-semibold text-sm">{element.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Branding Services?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We combine strategic thinking with creative excellence to build brands that not only look amazing but also drive business results and customer loyalty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Strategic Foundation",
                description: "Every brand we create is built on solid strategic foundations, ensuring your brand positioning, messaging, and visual identity align with your business goals and resonate with your target audience.",
                color: "purple"
              },
              {
                icon: "✨",
                title: "Creative Excellence",
                description: "Our award-winning design team brings years of experience and creative innovation to every project, ensuring your brand stands out in a crowded marketplace with distinctive and memorable design.",
                color: "magenta"
              },
              {
                icon: "🔄",
                title: "Comprehensive Approach",
                description: "From initial strategy to final implementation, we handle every aspect of your brand development, ensuring consistency and cohesion across all brand touchpoints and applications.",
                color: "pink"
              },
              {
                icon: "📊",
                title: "Data-Driven Insights",
                description: "We use market research, competitor analysis, and customer insights to inform our creative decisions, ensuring your brand resonates with your audience and differentiates from competitors.",
                color: "purple"
              },
              {
                icon: "🤝",
                title: "Collaborative Process",
                description: "We work closely with you throughout the entire process, ensuring your vision, values, and personality are authentically reflected in every aspect of your brand identity and strategy.",
                color: "magenta"
              },
              {
                icon: "🚀",
                title: "Future-Focused Design",
                description: "We create timeless brands that can evolve and grow with your business, ensuring your brand identity remains relevant and impactful for years to come while maintaining its core essence.",
                color: "pink"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-[#181626] rounded-2xl p-8 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 group"
                variants={cardVariants}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industries Section */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Brand For
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From startups to established enterprises, we&apos;ve created powerful brand identities across diverse industries, understanding the unique challenges and opportunities in each sector.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Technology", icon: "💻", description: "Software & SaaS companies" },
              { name: "Healthcare", icon: "🏥", description: "Medical & wellness brands" },
              { name: "Finance", icon: "💰", description: "Banking & fintech startups" },
              { name: "E-commerce", icon: "🛒", description: "Online retail brands" },
              { name: "Food & Beverage", icon: "🍽️", description: "Restaurants & food brands" },
              { name: "Fashion", icon: "👗", description: "Clothing & lifestyle brands" },
              { name: "Real Estate", icon: "🏠", description: "Property & development" },
              { name: "Education", icon: "🎓", description: "Schools & e-learning" },
              { name: "Professional Services", icon: "⚖️", description: "Law & consulting firms" },
              { name: "Non-Profit", icon: "❤️", description: "Charitable organizations" }
            ].map((industry, index) => (
              <motion.div 
                key={index}
                className="bg-[#181626] rounded-2xl p-6 text-center border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 group"
                variants={cardVariants}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-xs">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Got questions about our branding process? Here are the most common questions about creating a powerful brand identity that drives business growth.
            </p>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                {[
                  {
                    question: "How long does the branding process take?",
                    answer: "A comprehensive branding project typically takes 6-10 weeks, depending on the scope and complexity. This includes discovery, strategy development, design creation, revisions, and final delivery with brand guidelines."
                  },
                  {
                    question: "What&apos;s included in a complete brand identity package?",
                    answer: "Our complete package includes logo design with variations, color palette, typography selection, business card design, letterhead, brand guidelines document, and digital assets for web and social media use."
                  },
                  {
                    question: "Do you provide brand strategy or just design?",
                    answer: "We provide both! Our process starts with comprehensive brand strategy including positioning, messaging, target audience definition, and competitive analysis before moving into visual design and identity creation."
                  }
                ].map((faq, index) => (
                  <motion.div 
                    key={`left-faq-${index}`}
                    className="bg-[#181626] rounded-2xl border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300"
                    variants={cardVariants}
                  >
                    <button
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <h3 className="text-white font-bold text-lg pr-4">{faq.question}</h3>
                      <div className="flex-shrink-0">
                        <svg 
                          className={`w-5 h-5 text-purple-400 transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : 'rotate-0'}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut"
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {[
                  {
                    question: "Can you help rebrand an existing business?",
                    answer: "Absolutely! We specialize in rebranding projects and understand the unique challenges of evolving an existing brand. We&apos;ll audit your current brand, develop a migration strategy, and ensure a smooth transition to your new identity."
                  },
                  {
                    question: "How much does professional branding cost?",
                    answer: "Branding investment varies based on scope and complexity. Our packages start at $3,000 for basic identity design and go up to $15,000+ for comprehensive brand strategy and identity systems. We&apos;ll provide a detailed quote based on your specific needs."
                  },
                  {
                    question: "Will I own all the rights to my brand design?",
                    answer: "Yes! Upon final payment, you receive complete ownership and copyright of all brand assets, including source files, variations, and usage guidelines. You&apos;ll have full rights to use your brand however you need."
                  }
                ].map((faq, index) => {
                  const rightColumnIndex = index + 3;
                  return (
                    <motion.div 
                      key={`right-faq-${index}`}
                      className="bg-[#181626] rounded-2xl border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300"
                      variants={cardVariants}
                    >
                      <button
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                        onClick={() => setOpenFAQ(openFAQ === rightColumnIndex ? null : rightColumnIndex)}
                      >
                        <h3 className="text-white font-bold text-lg pr-4">{faq.question}</h3>
                        <div className="flex-shrink-0">
                          <svg 
                            className={`w-5 h-5 text-purple-400 transform transition-transform duration-300 ${openFAQ === rightColumnIndex ? 'rotate-180' : 'rotate-0'}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      {openFAQ === rightColumnIndex && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-[#181626] rounded-2xl p-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Brand?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s create a brand identity that tells your story, connects with your audience, and drives your business forward. Start your brand journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="bg-gradient-to-r from-purple-500 to-magenta-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactPopupOpen(true)}
            >
              Start Your Brand Journey
            </motion.button>
            <motion.button 
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactPopupOpen(true)}
            >
              Schedule Brand Consultation
            </motion.button>
          </div>
        </motion.div>

        <ContactPopup 
          isOpen={isContactPopupOpen} 
          onClose={() => setIsContactPopupOpen(false)} 
        />
      </div>
    </>
  )
}

export default Branding