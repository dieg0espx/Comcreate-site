import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

function Projects() {
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

  const projects = [
    {
      id: 1,
      category: "LANDSCAPING",
      title: "EM Landscape Design",
      description: "EM Landscape Design needed a site that matched their image and effectively converted visitors into leads. We built a clean, fast, conversion-focused website that highlights their credibility. Combined with targeted Meta and Google Ads campaigns, the site has closed over $300,000 in new revenue from leads driven through our system.",
      liveUrl: "https://www.emlandscapedesign.com/",
      gradient: "bg-gradient-to-br from-green-500/80 to-green-700/60",
      services: ["Website", "Ads"],
      bullets: [
        "Credibility-focused content and visuals",
        "High-converting lead forms",
        "Meta Ads Manager campaigns",
        "Strong Google Ads performance"
      ]
    },
    {
      id: 2,
      category: "FITNESS", 
      title: "Jake Rath",
      description: "Jake, an extremely talented fitness coach, needed a full website build to make it easy for clients to access his coaching and meal plans. He wanted a professional online presence that clearly showcased his skills as an athlete and coach. We delivered a clean, easy-to-use site designed to highlight his expertise and convert visitors into clients.",
      liveUrl: "https://jake-rath.vercel.app/",
      gradient: "bg-gradient-to-br from-purple-500/80 to-pink-600/60",
      services: ["Website"],
      bullets: [
        "Mobile-friendly, modern design",
        "Clear service and plan pages",
        "Easy navigation for coaching and meal plans",
        "Athlete-focused visuals and branding",
        "Simple contact and sign-up forms"
      ]
    },
    {
      id: 3,
      category: "CHIROPRACTIC", 
      title: "Hansen Chiropractic",
      description: "Hansen Chiropractic needed a full website revamp to showcase Dr. Hansen's expertise and earn the trust of new patients. We created a modern, easy-to-use website that clearly explains who Dr. Hansen is and what he offers. Built-in SEO now brings in steady, high-quality leads from local searches.",
      liveUrl: "https://www.hansenchiropracticaz.com/",
      gradient: "bg-gradient-to-br from-blue-500/80 to-cyan-600/60",
      services: ["Website", "SEO"],
      bullets: [
        "Mobile-friendly, clean design",
        "Service pages that explain treatments clearly",
        "Trust-building bio and testimonials",
        "SEO-optimized for local patients",
        "Simple contact and appointment forms"
      ]
    },
    {
      id: 4,
      category: "HOME SERVICES",
      title: "4 Corners",
      description: "4 Corners needed a complete website redesign and rebranding to better fit their style and stand out in the home services market. Their old site lacked a clear theme and didn't connect well with customers. We delivered a modern, professional look tailored to their ideal style, helping them build trust and attract the right clients. SEO work ensures they show up in local searches and generate quality leads.",
      liveUrl: "https://4corners-site.vercel.app/home",
      gradient: "bg-gradient-to-br from-orange-500/80 to-red-600/60", 
      services: ["Website", "SEO"],
      bullets: [
        "Clean, mobile-friendly design",
        "Consistent, professional branding",
        "Service pages tailored to home services",
        "SEO-optimized for local visibility",
        "Simple, effective contact forms"
      ]
    },
    {
      id: 5,
      category: "CHILDCARE",
      title: "Casita Azul",
      description: "Casita Azul needed an easy-to-use website that builds trust and comfort for parents. Their goal was to make it simple for new clients to learn about their services and feel confident choosing them. We delivered a clean, welcoming site with SEO to attract organic traffic and ad campaigns to bring in new clients.",
      liveUrl: "https://www.casitaazulpdx.com/es",
      gradient: "bg-gradient-to-br from-yellow-500/80 to-orange-600/60",
      services: ["Website", "Ads"],
      bullets: [
        "Mobile-friendly, simple design",
        "Trust-building content for parents",
        "SEO-optimized for local searches",
        "Targeted ad campaigns for new clients",
        "Easy navigation and contact forms"
      ]
    },
    {
      id: 6,
      category: "WASTE MANAGEMENT", 
      title: "SD Dumps",
      description: "SD Dumps needed a new website and branding to make their service easy to understand and book. Their goal was a smooth, solid user experience that converts visitors into customers. We delivered a clean, easy-to-navigate site with a strong interface designed to drive bookings.",
      liveUrl: "https://sd-dumps-site.vercel.app/",
      gradient: "bg-gradient-to-br from-indigo-500/80 to-purple-600/60",
      services: ["Website", "Branding"],
      bullets: [
        "Mobile-friendly, modern design",
        "Smooth, user-friendly interface",
        "Clear service details",
        "Conversion-focused layout",
        "Consistent, professional branding"
      ]
    },
    {
      id: 7,
      category: "MEDICAL", 
      title: "V3 Biomedical",
      description: "V3 Biomedical needed a full website redesign and rebranding to match their ideal style in the medical market. Their old site didn't reflect their professionalism or connect well with clients. We created a modern, clean site with a new logo and branding tailored to the medical field, helping them build trust and stand out.",
      liveUrl: "https://v3-biomedical-jade.vercel.app/",
      gradient: "bg-gradient-to-br from-cyan-500/80 to-blue-600/60",
      services: ["Website", "Branding"],
      bullets: [
        "Clean, mobile-friendly design",
        "Professional, consistent branding",
        "Clear service pages for medical clients",
        "Trust-building content and visuals",
        "Easy navigation and contact forms"
      ]
    },
    {
      id: 8,
      category: "ROOFING",
      title: "King Roof",
      description: "King Roof needed a full website revamp to make it easy for customers to get quotes and drive more profitable leads. The old site was confusing and didn't support their sales process well. We built a clean, easy-to-navigate site with SEO to bring in organic traffic and a self-serve form to generate high-quality leads.",
      liveUrl: "https://www.kingroofco.com/",
      gradient: "bg-gradient-to-br from-gray-500/80 to-gray-700/60",
      services: ["Website", "SEO"],
      bullets: [
        "Mobile-friendly, streamlined design",
        "Clear service and quote request pages",
        "SEO-optimized for local roofing searches",
        "Self-serve form for easy lead capture",
        "Fast, user-friendly navigation"
      ]
    },
    {
      id: 9,
      category: "MEDICAL",
      title: "Reef Health",
      description: "Complete website build that matched their ideal style in the medical market. Their old look didn't reflect the level of professionalism or trust they wanted to convey. We delivered a modern, clean site with consistent, medical-focused branding to help them stand out and connect with clients.",
      liveUrl: "https://www.reefhealth.co/",
      imageUrl: "/sitesCapture/reef.png",
      gradient: "bg-gradient-to-br from-teal-500/80 to-green-600/60",
      services: ["Website"],
      bullets: [
        "Mobile-friendly, professional design",
        "Consistent, industry-specific branding",
        "Clear service and information pages",
        "Trust-building visuals and content",
        "Easy navigation and contact forms"
      ]
    },
    {
      id: 10,
      category: "BOAT CHARTERS",
      title: "Endless Wave Charters",
      description: "Endless Wave Charters needed a complete digital revamp with new branding, created a logo, a clear website, and running effective ads. Their old site didn't clearly show what they offered or make booking easy. We delivered a modern site with clear boat listings, an easy-to-use form, and ad campaigns designed to bring in profitable leads.",
      liveUrl: "https://www.endlesswavecharters.com/",
      gradient: "bg-gradient-to-br from-blue-500/80 to-indigo-600/60",
      services: ["Website", "Branding", "Ads"],
      bullets: [
        "Clean, mobile-friendly design",
        "Consistent, engaging branding",
        "Clear boat rental listings",
        "Easy-to-fill booking forms",
        "Targeted ad campaigns for lead generation"
      ]
    },
    {
      id: 11,
      category: "MEDICAL",
      title: "Cosent",
      description: "Cosent needed a complete website and rebranding tailored to their ideal style in the medical market. Previously had no site, so this was a fresh build. We delivered a clean, modern website with consistent branding designed to build trust and clearly present their services.",
      liveUrl: "https://cosent-site.vercel.app/",
      gradient: "bg-gradient-to-br from-purple-500/80 to-pink-600/60",
      services: ["Website", "Branding"],
      bullets: [
        "Mobile-friendly, professional design",
        "Consistent, medical-focused branding",
        "Clear service and information pages",
        "Trust-building visuals and messaging",
        "Easy navigation and contact forms"
      ]
    },
    {
      id: 12,
      category: "CONSTRUCTION",
      title: "Bald Eagle Builders",
      description: "Bald Eagle Builders needed a revamped website to clearly show what they do and highlight their best projects. We created a clean, easy-to-use site that showcases their services and completed work.",
      liveUrl: "https://www.baldeaglebuilders.com/",
      gradient: "bg-gradient-to-br from-yellow-500/80 to-orange-600/60",
      services: ["Website"],
      bullets: [
        "Mobile-friendly design",
        "Clear service pages",
        "Project gallery",
        "Easy navigation and contact forms"
      ]
    },
    {
      id: 13,
      category: "SURF SHOP",
      title: "RS Surf",
      description: "This project needed a complete Shopify website revamp to match and support an already strong brand. The old site didn't reflect their brand or quality. We delivered a modern, user-friendly store that strengthens their digital presence and drives sales.",
      liveUrl: "https://rssurf.com",
      imageUrl: "/sitesCapture/rssurf.png",
      gradient: "bg-gradient-to-br from-blue-500/80 to-cyan-600/60",
      services: ["Website"],
      bullets: [
        "Clean, mobile-friendly Shopify design",
        "Strong brand visuals and messaging",
        "Easy-to-use product pages",
        "Smooth checkout experience",
        "Clear navigation and contact options"
      ]
    },
    {
      id: 14,
      category: "RETAIL",
      title: "House of Sacred Flame",
      description: "House of Sacred Flame needed their Shopify website completely redone to better showcase their products and improve the shopping experience. We delivered a modern, easy-to-use online store that highlights their brand and makes buying simple.",
      liveUrl: "https://houseofsacredflame.com/",
      imageUrl: "/sitesCapture/houseofscared.png",
      gradient: "bg-gradient-to-br from-red-500/80 to-pink-600/60",
      services: ["Website"],
      bullets: [
        "Clean, mobile-friendly Shopify design",
        "Easy-to-navigate product pages",
        "Smooth checkout experience",
        "Strong brand visuals",
        "Clear contact and support options"
      ]
    },
    {
      id: 15,
      category: "WASTE MANAGEMENT",
      title: "San Diego Dumpster Pros",
      description: "San Diego Dumpster Pros needed a new website, branding, and SEO to make their dumpster service easy to understand and book. They wanted a smooth, solid user experience that converts visitors into customers. We delivered a clean, easy-to-navigate site with a strong interface designed to drive bookings, along with SEO that brings in valuable organic traffic.",
      liveUrl: "https://dumpster-glass.vercel.app/",
      gradient: "bg-gradient-to-br from-green-500/80 to-blue-600/60",
      services: ["Website", "Branding", "SEO"],
      bullets: [
        "Mobile-friendly, modern design",
        "Clear service and booking pages",
        "Strong, consistent branding",
        "Smooth, user-friendly interface",
        "SEO-optimized for local traffic"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative py-32 px-4 lg:px-8 overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
            backgroundSize: '100px 100px, 150px 150px'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-20 w-5 h-5 bg-pink-400 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-24"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white mb-10 leading-none">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Digital
              </span>
              <br />
              <span className="text-white">Excellence</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-16 font-light">
              Transforming businesses through innovative web solutions that drive 
              <span className="text-blue-400 font-semibold"> measurable results</span> and 
              <span className="text-purple-400 font-semibold"> exceptional experiences</span>
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-6 rounded-2xl border border-blue-500/20">
                <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-300">Industries Served</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 p-6 rounded-2xl border border-purple-500/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">$300K+</div>
                <div className="text-gray-300">Revenue Generated</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 p-6 rounded-2xl border border-pink-500/20">
                <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* All Projects - Unified Grid */}
      <div className="px-4 lg:px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-purple-500"></div>
                <span className="text-purple-400 font-semibold text-xl">OUR PORTFOLIO</span>
                <div className="w-20 h-px bg-gradient-to-l from-transparent to-purple-500"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Complete
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Portfolio</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our diverse collection of successful digital transformations across various industries
              </p>
            </div>

            {/* Dynamic Projects Layout */}
            <motion.div 
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Row 1: Large Featured Card + Medium Card */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div 
                  variants={cardVariants}
                  className="lg:col-span-2 group"
                >
                  <div className="bg-gradient-to-br from-[#181626] to-[#1a1a2e] rounded-3xl overflow-hidden h-full flex flex-col min-h-[600px] relative hover:transform hover:scale-[1.02] transition-transform duration-300 border border-gray-800/30 shadow-2xl">
                    {/* Live Site Preview */}
                    <div className="relative h-64 overflow-hidden">
                      <div className={`absolute inset-0 ${projects[0].gradient} opacity-90`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white">
                        {projects[0].category}
                      </div>
                      <div className="absolute inset-0 overflow-hidden">
                        {projects[0].imageUrl ? (
                          <Image 
                            src={projects[0].imageUrl}
                            alt={projects[0].title}
                            fill
                            className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                            loading="lazy"
                          />
                        ) : (
                          <iframe 
                            src={projects[0].liveUrl}
                            className="opacity-80 hover:opacity-100 transition-opacity"
                            title={projects[0].title}
                            loading="lazy"
                            style={{ 
                              width: '400%', 
                              height: '400%', 
                              transform: 'scale(0.25)', 
                              transformOrigin: 'top left' 
                            }}
                          />
                        )}
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-8 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                          {projects[0].title}
                        </h3>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                          {projects[0].description}
                        </p>

                        {/* Services */}
                        <div className="mb-6">
                          <h5 className="text-white font-semibold mb-3 text-lg">Services:</h5>
                          <div className="flex flex-wrap gap-2">
                            {projects[0].services.map((service, index) => (
                              <span key={index} className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/30">
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Key Features */}
                        <div className="mb-8">
                          <h5 className="text-white font-semibold mb-4 text-lg">Key Features:</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {projects[0].bullets.map((bullet, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1 text-lg">→</span>
                                <span className="text-gray-300 text-base">{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <button 
                          onClick={() => window.open(projects[0].liveUrl, '_blank')}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-3 group w-full justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          View Live Site 
                          <span className="group-hover:translate-x-1 transition-transform text-xl">🚀</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  variants={cardVariants}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-[#181626] to-[#1a1a2e] rounded-2xl overflow-hidden h-full flex flex-col min-h-[600px] relative hover:transform hover:scale-[1.02] transition-transform duration-300 border border-gray-800/30 shadow-xl">
                    {/* Live Site Preview */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 ${projects[1].gradient} opacity-90`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                        {projects[1].category}
                      </div>
                      <div className="absolute inset-0 overflow-hidden">
                        {projects[1].imageUrl ? (
                          <Image 
                            src={projects[1].imageUrl}
                            alt={projects[1].title}
                            fill
                            className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                            loading="lazy"
                          />
                        ) : (
                          <iframe 
                            src={projects[1].liveUrl}
                            className="opacity-80 hover:opacity-100 transition-opacity"
                            title={projects[1].title}
                            loading="lazy"
                            style={{ 
                              width: '400%', 
                              height: '400%', 
                              transform: 'scale(0.25)', 
                              transformOrigin: 'top left' 
                            }}
                          />
                        )}
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">
                          {projects[1].title}
                        </h3>
                        <p className="text-gray-400 text-sm lg:text-base mb-4 leading-relaxed">
                          {projects[1].description}
                        </p>

                        {/* Services */}
                        <div className="mb-4">
                          <h5 className="text-white font-semibold mb-2 text-sm">Services:</h5>
                          <div className="flex flex-wrap gap-1">
                            {projects[1].services.map((service, index) => (
                              <span key={index} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Key Features */}
                        <div className="mb-6">
                          <h5 className="text-white font-semibold mb-3 text-sm">Key Features:</h5>
                          <div className="space-y-1">
                            {projects[1].bullets.slice(0, 4).map((bullet, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <span className="text-blue-400 mt-1 text-xs">•</span>
                                <span className="text-gray-300 text-xs">{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <button 
                          onClick={() => window.open(projects[1].liveUrl, '_blank')}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 group w-full justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          View Live Site 
                          <span className="group-hover:translate-x-1 transition-transform">🚀</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

                                    {/* Row 2: 3 Medium Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.slice(2, 5).map((project, index) => (
                          <motion.div 
                            key={project.id}
                            variants={cardVariants}
                            className="group"
                          >
                            <div className="bg-gradient-to-br from-[#181626] to-[#1a1a2e] rounded-2xl overflow-hidden h-full flex flex-col min-h-[500px] relative hover:transform hover:scale-[1.02] transition-transform duration-300 border border-gray-800/30 shadow-xl">
                              {/* Live Site Preview */}
                              <div className="relative h-48 overflow-hidden">
                                <div className={`absolute inset-0 ${project.gradient} opacity-90`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                                  {project.category}
                                </div>
                                <div className="absolute inset-0 overflow-hidden">
                                  {project.imageUrl ? (
                                    <Image 
                                      src={project.imageUrl}
                                      alt={project.title}
                                      fill
                                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                                      loading="lazy"
                                    />
                                  ) : (
                                    <iframe 
                                      src={project.liveUrl}
                                      className="opacity-80 hover:opacity-100 transition-opacity"
                                      title={project.title}
                                      loading="lazy"
                                      style={{ 
                                        width: '400%', 
                                        height: '400%', 
                                        transform: 'scale(0.25)', 
                                        transformOrigin: 'top left' 
                                      }}
                                    />
                                  )}
                                </div>
                              </div>
                      
                      {/* Project Content */}
                      <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm lg:text-base mb-4 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Services */}
                          <div className="mb-4">
                            <h5 className="text-white font-semibold mb-2 text-sm">Services:</h5>
                            <div className="flex flex-wrap gap-1">
                              {project.services.map((service, index) => (
                                <span key={index} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                                  {service}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Key Features */}
                          <div className="mb-6">
                            <h5 className="text-white font-semibold mb-3 text-sm">Key Features:</h5>
                            <div className="space-y-1">
                              {project.bullets.slice(0, 4).map((bullet, index) => (
                                <div key={index} className="flex items-start gap-2">
                                  <span className="text-blue-400 mt-1 text-xs">•</span>
                                  <span className="text-gray-300 text-xs">{bullet}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <button 
                            onClick={() => window.open(project.liveUrl, '_blank')}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 group w-full justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                          >
                            View Live Site 
                            <span className="group-hover:translate-x-1 transition-transform">🚀</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

                                    {/* Row 3: 2 Large Cards */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {projects.slice(5, 7).map((project, index) => (
                          <motion.div 
                            key={project.id}
                            variants={cardVariants}
                            className="group"
                          >
                            <div className="bg-gradient-to-br from-[#181626] to-[#1a1a2e] rounded-2xl overflow-hidden h-full flex flex-col min-h-[500px] relative hover:transform hover:scale-[1.02] transition-transform duration-300 border border-gray-800/30 shadow-xl">
                              {/* Live Site Preview */}
                              <div className="relative h-48 overflow-hidden">
                                <div className={`absolute inset-0 ${project.gradient} opacity-90`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                                  {project.category}
                                </div>
                                <div className="absolute inset-0 overflow-hidden">
                                  {project.imageUrl ? (
                                    <Image 
                                      src={project.imageUrl}
                                      alt={project.title}
                                      fill
                                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                                      loading="lazy"
                                    />
                                  ) : (
                                    <iframe 
                                      src={project.liveUrl}
                                      className="opacity-80 hover:opacity-100 transition-opacity"
                                      title={project.title}
                                      loading="lazy"
                                      style={{ 
                                        width: '400%', 
                                        height: '400%', 
                                        transform: 'scale(0.25)', 
                                        transformOrigin: 'top left' 
                                      }}
                                    />
                                  )}
                                </div>
                              </div>
                      
                      {/* Project Content */}
                      <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm lg:text-base mb-4 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Services */}
                          <div className="mb-4">
                            <h5 className="text-white font-semibold mb-2 text-sm">Services:</h5>
                            <div className="flex flex-wrap gap-1">
                              {project.services.map((service, index) => (
                                <span key={index} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                                  {service}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Key Features */}
                          <div className="mb-6">
                            <h5 className="text-white font-semibold mb-3 text-sm">Key Features:</h5>
                            <div className="space-y-1">
                              {project.bullets.slice(0, 4).map((bullet, index) => (
                                <div key={index} className="flex items-start gap-2">
                                  <span className="text-blue-400 mt-1 text-xs">•</span>
                                  <span className="text-gray-300 text-xs">{bullet}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <button 
                            onClick={() => window.open(project.liveUrl, '_blank')}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 group w-full justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                          >
                            View Live Site 
                            <span className="group-hover:translate-x-1 transition-transform">🚀</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

                                    {/* Row 4: 4 Medium Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {projects.slice(7, 11).map((project, index) => (
                          <motion.div 
                            key={project.id}
                            variants={cardVariants}
                            className="group"
                          >
                            <div className="bg-gradient-to-br from-[#181626] to-[#1a1a2e] rounded-xl overflow-hidden h-full flex flex-col min-h-[450px] relative hover:transform hover:scale-[1.02] transition-transform duration-300 border border-gray-800/30 shadow-lg">
                              {/* Live Site Preview */}
                              <div className="relative h-40 overflow-hidden">
                                <div className={`absolute inset-0 ${project.gradient} opacity-90`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-white">
                                  {project.category}
                                </div>
                                <div className="absolute inset-0 overflow-hidden">
                                  {project.imageUrl ? (
                                    <Image 
                                      src={project.imageUrl}
                                      alt={project.title}
                                      fill
                                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                                      loading="lazy"
                                    />
                                  ) : (
                                    <iframe 
                                      src={project.liveUrl}
                                      className="opacity-80 hover:opacity-100 transition-opacity"
                                      title={project.title}
                                      loading="lazy"
                                      style={{ 
                                        width: '400%', 
                                        height: '400%', 
                                        transform: 'scale(0.25)', 
                                        transformOrigin: 'top left' 
                                      }}
                                    />
                                  )}
                                </div>
                              </div>
                      
                      {/* Project Content */}
                      <div className="p-4 flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="text-base lg:text-lg font-bold text-white mb-2 leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-xs mb-3 leading-relaxed line-clamp-3">
                            {project.description}
                          </p>

                          {/* Services */}
                          <div className="mb-3">
                            <h5 className="text-white font-semibold mb-1 text-xs">Services:</h5>
                            <div className="flex flex-wrap gap-1">
                              {project.services.map((service, index) => (
                                <span key={index} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                                  {service}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Key Features */}
                          <div className="mb-4">
                            <h5 className="text-white font-semibold mb-2 text-xs">Key Features:</h5>
                            <div className="space-y-1">
                              {project.bullets.slice(0, 3).map((bullet, index) => (
                                <div key={index} className="flex items-start gap-2">
                                  <span className="text-blue-400 mt-1 text-xs">•</span>
                                  <span className="text-gray-300 text-xs line-clamp-1">{bullet}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <button 
                            onClick={() => window.open(project.liveUrl, '_blank')}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 group w-full justify-center text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
                          >
                            View Live Site 
                            <span className="group-hover:translate-x-1 transition-transform">🚀</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

                                    {/* Row 5: 4 Small Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {projects.slice(11).map((project, index) => (
                          <motion.div 
                            key={project.id}
                            variants={cardVariants}
                            className="group"
                          >
                            <div className="bg-gradient-to-br from-[#181626] to-[#1a1a2e] rounded-xl overflow-hidden h-full flex flex-col min-h-[400px] relative hover:transform hover:scale-[1.02] transition-transform duration-300 border border-gray-800/30 shadow-lg">
                              {/* Live Site Preview */}
                              <div className="relative h-32 overflow-hidden">
                                <div className={`absolute inset-0 ${project.gradient} opacity-90`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-white">
                                  {project.category}
                                </div>
                                <div className="absolute inset-0 overflow-hidden">
                                  {project.imageUrl ? (
                                    <Image 
                                      src={project.imageUrl}
                                      alt={project.title}
                                      fill
                                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                                      loading="lazy"
                                    />
                                  ) : (
                                    <iframe 
                                      src={project.liveUrl}
                                      className="opacity-80 hover:opacity-100 transition-opacity"
                                      title={project.title}
                                      loading="lazy"
                                      style={{ 
                                        width: '400%', 
                                        height: '400%', 
                                        transform: 'scale(0.25)', 
                                        transformOrigin: 'top left' 
                                      }}
                                    />
                                  )}
                                </div>
                              </div>
                      
                      {/* Project Content */}
                      <div className="p-4 flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="text-base lg:text-lg font-bold text-white mb-2 leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-xs mb-3 leading-relaxed line-clamp-2">
                            {project.description}
                          </p>

                          {/* Services */}
                          <div className="mb-3">
                            <h5 className="text-white font-semibold mb-1 text-xs">Services:</h5>
                            <div className="flex flex-wrap gap-1">
                              {project.services.map((service, index) => (
                                <span key={index} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                                  {service}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Key Features */}
                          <div className="mb-4">
                            <h5 className="text-white font-semibold mb-2 text-xs">Key Features:</h5>
                            <div className="space-y-1">
                              {project.bullets.slice(0, 2).map((bullet, index) => (
                                <div key={index} className="flex items-start gap-2">
                                  <span className="text-blue-400 mt-1 text-xs">•</span>
                                  <span className="text-gray-300 text-xs line-clamp-1">{bullet}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <button 
                            onClick={() => window.open(project.liveUrl, '_blank')}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 group w-full justify-center text-xs shadow-lg hover:shadow-xl transform hover:scale-105"
                          >
                            View Live Site 
                            <span className="group-hover:translate-x-1 transition-transform">🚀</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Projects