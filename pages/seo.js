import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Head from 'next/head'
import ContactPopup from '../components/ContactPopup'

function SEO() {
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
      category: "LOCAL OPTIMIZATION",
      title: "Local SEO",
      description: "Dominate your local market with targeted local SEO strategies. We optimize your Google Business Profile, build local citations, and create location-specific content that drives foot traffic and phone calls.",
      features: [
        "Google Business Profile optimization",
        "Local keyword research and targeting",
        "Citation building and management",
        "Local content creation",
        "Review management strategy",
        "Local link building campaigns"
      ],
      icon: "📍",
      gradient: "bg-gradient-to-br from-green-500/80 to-emerald-600/60",
      popular: true
    },
    {
      id: 2,
      category: "ON-PAGE OPTIMIZATION",
      title: "Technical SEO",
      description: "Fix technical issues that prevent search engines from properly crawling and indexing your site. We optimize site speed, mobile responsiveness, and technical architecture for maximum visibility.",
      features: [
        "Site speed optimization",
        "Mobile-first optimization",
        "Technical SEO audits",
        "Schema markup implementation",
        "Core Web Vitals improvement",
        "Crawlability and indexing fixes"
      ],
      icon: "⚡",
      gradient: "bg-gradient-to-br from-blue-500/80 to-purple-600/60",
      popular: false
    },
    {
      id: 3,
      category: "CONTENT STRATEGY",
      title: "Content Optimization",
      description: "Create and optimize content that ranks higher and converts better. Our content strategies combine keyword research with user intent to drive qualified traffic and engagement.",
      features: [
        "Keyword research and strategy",
        "Content gap analysis",
        "On-page content optimization",
        "Meta tags and descriptions",
        "Internal linking strategy",
        "Content performance tracking"
      ],
      icon: "📝",
      gradient: "bg-gradient-to-br from-purple-500/80 to-pink-600/60",
      popular: false
    },
    {
      id: 4,
      category: "AUTHORITY BUILDING",
      title: "Link Building & Outreach",
      description: "Build domain authority with high-quality backlinks from relevant, authoritative websites. Our white-hat link building strategies improve rankings while maintaining search engine compliance.",
      features: [
        "High-quality backlink acquisition",
        "Competitor link analysis",
        "Guest posting and outreach",
        "Digital PR campaigns",
        "Broken link building",
        "Link audit and disavow"
      ],
      icon: "🔗",
      gradient: "bg-gradient-to-br from-orange-500/80 to-red-600/60",
      popular: false
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "SEO Audit & Analysis",
      description: "We conduct a comprehensive audit of your website, analyzing technical issues, content gaps, and competitive landscape to identify opportunities."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Based on our findings, we create a custom SEO strategy tailored to your business goals, target audience, and competitive market."
    },
    {
      step: "03",
      title: "Implementation & Optimization",
      description: "Our team implements on-page optimizations, technical fixes, and content improvements while monitoring performance and making data-driven adjustments."
    },
    {
      step: "04",
      title: "Monitoring & Reporting",
      description: "We provide detailed monthly reports showing ranking improvements, traffic growth, and conversion metrics with ongoing optimization recommendations."
    }
  ];

  return (
    <>
      <Head>
        <title>SEO Services & Optimization | Comcreate</title>
        <meta name="description" content="Professional SEO services that drive organic traffic and improve search rankings. Local SEO, technical optimization, content strategy, and link building services." />
        <meta name="keywords" content="SEO services, search engine optimization, local SEO, technical SEO, content optimization, link building, organic traffic, search rankings" />
        <meta property="og:title" content="SEO Services & Optimization | Comcreate" />
        <meta property="og:description" content="Professional SEO services that drive organic traffic and improve search rankings. Local SEO, technical optimization, and more." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO Services & Optimization | Comcreate" />
        <meta name="twitter:description" content="Professional SEO services that drive organic traffic and improve search rankings. Local SEO, technical optimization, and more." />
      </Head>
      <div className="min-h-screen bg-black text-white py-16">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-6">
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent text-lg font-semibold">
              SEO & SEARCH OPTIMIZATION
            </span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Dominate Search Results with{" "}
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              Strategic SEO
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            From local search dominance to technical optimization, we deliver SEO strategies that increase organic traffic, improve rankings, and drive qualified leads to your business.
          </p>
          <motion.button 
            className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsContactPopupOpen(true)}
          >
            Get SEO Audit
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
              Our SEO Services
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive SEO solutions designed to improve your search visibility, drive organic traffic, and grow your business online.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Local SEO - Large Featured Card */}
            <motion.div 
              className="lg:col-span-8 bg-[#181626] rounded-3xl overflow-hidden relative group hover:transform hover:scale-[1.01] transition-all duration-500 border border-gray-800/50 hover:border-green-500/30"
              variants={cardVariants}
            >
              <span className="absolute top-4 right-4 bg-fuchsia-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                MOST POPULAR
              </span>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="p-8 lg:p-10 relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center border border-green-500/20">
                      <span className="text-3xl">{services[0].icon}</span>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-green-400 tracking-wider mb-1">
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
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="bg-green-500/10 border border-green-500/20 text-green-400 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300 group"
                  onClick={() => setIsContactPopupOpen(true)}
                >
                  Get Started 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>

            {/* Technical SEO - Tall Card */}
            <motion.div 
              className="lg:col-span-4 bg-[#181626] rounded-3xl overflow-hidden relative group hover:transform hover:scale-[1.02] transition-all duration-500 border border-gray-800/50 hover:border-blue-500/30"
              variants={cardVariants}
            >
              <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500/5 rounded-full -translate-y-10 -translate-x-10"></div>
              
              <div className="p-6 relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 mb-4">
                  <span className="text-2xl">{services[1].icon}</span>
                </div>
                
                <div className="text-xs font-semibold text-blue-400 tracking-wider mb-1">
                  {services[1].category}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{services[1].title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm flex-grow">{services[1].description}</p>
                
                <div className="space-y-2 mb-6">
                  {services[1].features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-400 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group text-sm mt-auto"
                  onClick={() => setIsContactPopupOpen(true)}
                >
                  Get Started 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>

            {/* Content Optimization - Medium Card */}
            <motion.div 
              className="lg:col-span-6 bg-[#181626] rounded-3xl overflow-hidden relative group hover:transform hover:scale-[1.02] transition-all duration-500 border border-gray-800/50 hover:border-purple-500/30"
              variants={cardVariants}
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-purple-500/5 rounded-full -translate-y-14 translate-x-14"></div>
              
              <div className="p-6 lg:p-8 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center border border-purple-500/20">
                    <span className="text-xl">{services[2].icon}</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-purple-400 tracking-wider">
                      {services[2].category}
                    </div>
                    <h3 className="text-xl font-bold text-white">{services[2].title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">{services[2].description}</p>
                
                <div className="grid grid-cols-1 gap-2 mb-6">
                  {services[2].features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-purple-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-400 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="bg-purple-500/10 border border-purple-500/20 text-purple-400 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group text-sm"
                  onClick={() => setIsContactPopupOpen(true)}
                >
                  Get Started 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>

            {/* Link Building - Medium Card */}
            <motion.div 
              className="lg:col-span-6 bg-[#181626] rounded-3xl overflow-hidden relative group hover:transform hover:scale-[1.02] transition-all duration-500 border border-gray-800/50 hover:border-orange-500/30"
              variants={cardVariants}
            >
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="p-6 lg:p-8 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/20">
                    <span className="text-xl">{services[3].icon}</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-orange-400 tracking-wider">
                      {services[3].category}
                    </div>
                    <h3 className="text-xl font-bold text-white">{services[3].title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">{services[3].description}</p>
                
                <div className="grid grid-cols-1 gap-2 mb-6">
                  {services[3].features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-orange-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-400 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group text-sm"
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
              Our SEO Process
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A data-driven methodology that delivers measurable results and sustainable organic growth for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={cardVariants}
              >
                <div className="bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <span className="text-green-400 font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SEO Tools & Technologies Section */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SEO Tools & Technologies
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We use industry-leading SEO tools and platforms to analyze, optimize, and track your search performance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Google Analytics", icon: "📊", color: "orange" },
              { name: "Search Console", icon: "🔍", color: "blue" },
              { name: "SEMrush", icon: "📈", color: "orange" },
              { name: "Ahrefs", icon: "🔗", color: "orange" },
              { name: "Screaming Frog", icon: "🐸", color: "green" },
              { name: "GTMetrix", icon: "⚡", color: "green" },
              { name: "Moz Pro", icon: "📊", color: "blue" },
              { name: "Schema Markup", icon: "🏗️", color: "purple" },
              { name: "PageSpeed Insights", icon: "🚀", color: "green" },
              { name: "Google My Business", icon: "📍", color: "red" },
              { name: "Hotjar", icon: "🎯", color: "orange" },
              { name: "Yoast SEO", icon: "🎯", color: "green" }
            ].map((tool, index) => (
              <motion.div 
                key={index}
                className="bg-[#181626] rounded-2xl p-6 text-center border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 group"
                variants={cardVariants}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <div className="text-white font-semibold text-sm">{tool.name}</div>
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
              Why Choose Our SEO Services?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We deliver measurable SEO results through proven strategies, advanced tools, and transparent reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📈",
                title: "Proven Results",
                description: "Our SEO strategies have helped businesses achieve 300%+ increases in organic traffic and first-page rankings for competitive keywords.",
                color: "green"
              },
              {
                icon: "🎯",
                title: "Data-Driven Approach",
                description: "Every SEO decision is backed by comprehensive data analysis, competitor research, and performance metrics for optimal results.",
                color: "blue"
              },
              {
                icon: "🏆",
                title: "White-Hat Techniques",
                description: "We use only Google-approved, ethical SEO practices that provide long-term, sustainable rankings without penalties.",
                color: "yellow"
              },
              {
                icon: "📱",
                title: "Mobile-First SEO",
                description: "Our strategies prioritize mobile optimization, ensuring your site ranks well in mobile search results where most traffic comes from.",
                color: "purple"
              },
              {
                icon: "🔍",
                title: "Local SEO Expertise",
                description: "Specialized in local SEO with proven success helping businesses dominate local search results and Google Maps rankings.",
                color: "red"
              },
              {
                icon: "📊",
                title: "Transparent Reporting",
                description: "Monthly detailed reports showing ranking improvements, traffic growth, and ROI with clear insights and next steps.",
                color: "cyan"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-[#181626] rounded-2xl p-8 border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 group"
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
              Industries We Optimize
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From local businesses to enterprise companies, we&apos;ve delivered SEO success across diverse industries and competitive markets.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "E-commerce", icon: "🛒", description: "Online stores & marketplaces" },
              { name: "Healthcare", icon: "🏥", description: "Medical practices & clinics" },
              { name: "Real Estate", icon: "🏠", description: "Property & rental platforms" },
              { name: "Legal", icon: "⚖️", description: "Law firms & legal services" },
              { name: "Automotive", icon: "🚗", description: "Dealerships & auto services" },
              { name: "Home Services", icon: "🔧", description: "Contractors & service providers" },
              { name: "Restaurant", icon: "🍽️", description: "Food & hospitality" },
              { name: "Technology", icon: "💻", description: "SaaS & software companies" },
              { name: "Finance", icon: "💰", description: "Banking & investment firms" },
              { name: "Education", icon: "🎓", description: "Schools & online learning" }
            ].map((industry, index) => (
              <motion.div 
                key={index}
                className="bg-[#181626] rounded-2xl p-6 text-center border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 group"
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
              Got questions? We&apos;ve got answers. Here are the most common questions about our SEO services.
            </p>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                {[
                  {
                    question: "How long does it take to see SEO results?",
                    answer: "SEO is a long-term strategy. You&apos;ll typically see initial improvements in 3-6 months, with significant results in 6-12 months. Timeline depends on competition, current site condition, and target keywords."
                  },
                  {
                    question: "Do you guarantee first page rankings?",
                    answer: "While we can&apos;t guarantee specific rankings due to Google&apos;s changing algorithms, we do guarantee measurable improvements in organic traffic, visibility, and search performance using proven strategies."
                  },
                  {
                    question: "What&apos;s included in your SEO audit?",
                    answer: "Our comprehensive SEO audit includes technical analysis, on-page optimization review, content assessment, backlink profile analysis, competitor research, and actionable recommendations."
                  }
                ].map((faq, index) => (
                  <motion.div 
                    key={`left-faq-${index}`}
                    className="bg-[#181626] rounded-2xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-300"
                    variants={cardVariants}
                  >
                    <button
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <h3 className="text-white font-bold text-lg pr-4">{faq.question}</h3>
                      <div className="flex-shrink-0">
                        <svg 
                          className={`w-5 h-5 text-green-400 transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : 'rotate-0'}`}
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
                    question: "Do you handle local SEO?",
                    answer: "Yes! Local SEO is one of our specialties. We optimize your Google Business Profile, build local citations, create location-specific content, and help you dominate local search results."
                  },
                  {
                    question: "Can you help with existing website penalties?",
                    answer: "Absolutely. We conduct penalty assessments, identify the causes, and implement recovery strategies including disavowing bad links, content improvements, and technical fixes to restore rankings."
                  },
                  {
                    question: "What makes your SEO different?",
                    answer: "Our approach combines technical expertise with content strategy and data-driven insights. We focus on sustainable, white-hat techniques that deliver long-term results, not quick fixes."
                  }
                ].map((faq, index) => {
                  const rightColumnIndex = index + 3;
                  return (
                    <motion.div 
                      key={`right-faq-${index}`}
                      className="bg-[#181626] rounded-2xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-300"
                      variants={cardVariants}
                    >
                      <button
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                        onClick={() => setOpenFAQ(openFAQ === rightColumnIndex ? null : rightColumnIndex)}
                      >
                        <h3 className="text-white font-bold text-lg pr-4">{faq.question}</h3>
                        <div className="flex-shrink-0">
                          <svg 
                            className={`w-5 h-5 text-green-400 transform transition-transform duration-300 ${openFAQ === rightColumnIndex ? 'rotate-180' : 'rotate-0'}`}
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
          className="text-center bg-[#181626] rounded-2xl p-12 mx-4"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s boost your organic traffic and improve your search rankings. Get a free SEO audit and custom strategy today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactPopupOpen(true)}
            >
              Get Free SEO Audit
            </motion.button>
            <motion.button 
              className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactPopupOpen(true)}
            >
              Schedule Consultation
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

export default SEO 