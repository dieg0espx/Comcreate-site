import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Head from 'next/head'
import ContactPopup from '../components/ContactPopup'

function Ads() {
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
      category: "SEARCH ADVERTISING",
      title: "Google Ads",
      description: "Reach customers when they&apos;re actively searching for your products or services. Our Google Ads campaigns deliver qualified leads and maximize your return on ad spend with targeted keywords and compelling ad copy.",
      features: [
        "Search campaigns optimization",
        "Shopping ads for e-commerce",
        "Display network advertising",
        "YouTube video advertising",
        "Local campaigns for stores",
        "Performance tracking & optimization"
      ],
      icon: "🔍",
      gradient: "bg-gradient-to-br from-blue-500/80 to-green-600/60",
      popular: true
    },
    {
      id: 2,
      category: "SOCIAL MEDIA ADS",
      title: "Facebook & Instagram Ads",
      description: "Connect with your audience where they spend their time. We create engaging social media campaigns that build brand awareness, drive website traffic, and generate leads through Meta&apos;s powerful advertising platform.",
      features: [
        "Facebook feed and story ads",
        "Instagram photo and video ads",
        "Carousel and collection ads",
        "Lead generation campaigns",
        "Retargeting and lookalike audiences",
        "Conversion tracking and optimization"
      ],
      icon: "📱",
      gradient: "bg-gradient-to-br from-purple-500/80 to-pink-600/60",
      popular: false
    },
    {
      id: 3,
      category: "PROFESSIONAL NETWORK",
      title: "LinkedIn Ads",
      description: "Target professionals and decision-makers in your industry. Our LinkedIn advertising strategies help B2B companies generate high-quality leads and build brand authority in professional networks.",
      features: [
        "Sponsored content campaigns",
        "Message ads and InMail",
        "Dynamic and lead gen forms",
        "Account-based marketing",
        "Professional targeting options",
        "B2B lead generation focus"
      ],
      icon: "💼",
      gradient: "bg-gradient-to-br from-blue-500/80 to-cyan-600/60",
      popular: false
    },
    {
      id: 4,
      category: "VIDEO & EMERGING",
      title: "YouTube & TikTok Ads",
      description: "Capture attention with video advertising on the platforms where your audience watches content. We create compelling video campaigns that drive engagement and conversions across YouTube and TikTok.",
      features: [
        "YouTube video ad campaigns",
        "TikTok advertising campaigns",
        "Video content optimization",
        "Audience targeting strategies",
        "Creative testing and optimization",
        "Cross-platform campaign management"
      ],
      icon: "🎥",
      gradient: "bg-gradient-to-br from-red-500/80 to-orange-600/60",
      popular: false
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Strategy & Research",
      description: "We analyze your business goals, target audience, and competitors to develop a comprehensive advertising strategy that maximizes your budget and ROI."
    },
    {
      step: "02", 
      title: "Campaign Setup",
      description: "Our team creates and configures your campaigns across chosen platforms, setting up proper tracking, audiences, and optimization parameters for success."
    },
    {
      step: "03",
      title: "Creative Development",
      description: "We design compelling ad creatives, write persuasive copy, and develop video content that resonates with your audience and drives action."
    },
    {
      step: "04",
      title: "Optimization & Reporting",
      description: "Continuous monitoring, A/B testing, and data-driven optimizations ensure your campaigns perform at their best with detailed monthly reporting."
    }
  ];

  return (
    <>
      <Head>
        <title>Digital Advertising Services | Google, Facebook & Instagram Ads | Comcreate</title>
        <meta name="description" content="Professional digital advertising services across Google Ads, Facebook, Instagram, LinkedIn, YouTube, and TikTok. Drive qualified traffic and maximize ROI with targeted ad campaigns." />
        <meta name="keywords" content="digital advertising, Google Ads, Facebook ads, Instagram ads, LinkedIn ads, YouTube ads, TikTok ads, PPC campaigns, social media advertising" />
        <meta property="og:title" content="Digital Advertising Services | Google, Facebook & Instagram Ads | Comcreate" />
        <meta property="og:description" content="Professional digital advertising services across Google Ads, Facebook, Instagram, LinkedIn, YouTube, and TikTok. Drive qualified traffic and maximize ROI." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Advertising Services | Google, Facebook & Instagram Ads | Comcreate" />
        <meta name="twitter:description" content="Professional digital advertising services across Google Ads, Facebook, Instagram, LinkedIn, YouTube, and TikTok. Drive qualified traffic and maximize ROI." />
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
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent text-lg font-semibold">
              DIGITAL ADVERTISING & PPC
            </span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Drive Results with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              Targeted Advertising
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            From Google search campaigns to social media advertising, we create data-driven ad campaigns that reach your ideal customers and deliver measurable results across all major platforms.
          </p>
          <motion.button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsContactPopupOpen(true)}
          >
            Get Free Ad Audit
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
              Our Advertising Platforms
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We manage campaigns across all major advertising platforms to reach your audience wherever they are online.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Google Ads - Large Featured Card */}
            <motion.div 
              className="lg:col-span-8 bg-[#181626] rounded-3xl overflow-hidden relative group hover:transform hover:scale-[1.01] transition-all duration-500 border border-gray-800/50 hover:border-blue-500/30"
              variants={cardVariants}
            >
              <span className="absolute top-4 right-4 bg-fuchsia-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                MOST POPULAR
              </span>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="p-8 lg:p-10 relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20">
                      <span className="text-3xl">{services[0].icon}</span>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-blue-400 tracking-wider mb-1">
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
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
                  onClick={() => setIsContactPopupOpen(true)}
                >
                  Get Started 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>

            {/* Facebook & Instagram - Tall Card */}
            <motion.div 
              className="lg:col-span-4 bg-[#181626] rounded-3xl overflow-hidden relative group hover:transform hover:scale-[1.02] transition-all duration-500 border border-gray-800/50 hover:border-purple-500/30"
              variants={cardVariants}
            >
              <div className="absolute top-0 left-0 w-20 h-20 bg-purple-500/5 rounded-full -translate-y-10 -translate-x-10"></div>
              
              <div className="p-6 relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center border border-purple-500/20 mb-4">
                  <span className="text-2xl">{services[1].icon}</span>
                </div>
                
                <div className="text-xs font-semibold text-purple-400 tracking-wider mb-1">
                  {services[1].category}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{services[1].title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm flex-grow">{services[1].description}</p>
                
                <div className="space-y-2 mb-6">
                  {services[1].features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-purple-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-400 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="bg-purple-500/10 border border-purple-500/20 text-purple-400 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group text-sm mt-auto"
                  onClick={() => setIsContactPopupOpen(true)}
                >
                  Get Started 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>

            {/* LinkedIn Ads - Medium Card */}
            <motion.div 
              className="lg:col-span-6 bg-[#181626] rounded-3xl overflow-hidden relative group hover:transform hover:scale-[1.02] transition-all duration-500 border border-gray-800/50 hover:border-cyan-500/30"
              variants={cardVariants}
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/5 rounded-full -translate-y-14 translate-x-14"></div>
              
              <div className="p-6 lg:p-8 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center border border-cyan-500/20">
                    <span className="text-xl">{services[2].icon}</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-cyan-400 tracking-wider">
                      {services[2].category}
                    </div>
                    <h3 className="text-xl font-bold text-white">{services[2].title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">{services[2].description}</p>
                
                <div className="grid grid-cols-1 gap-2 mb-6">
                  {services[2].features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-400 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group text-sm"
                  onClick={() => setIsContactPopupOpen(true)}
                >
                  Get Started 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>

            {/* YouTube & TikTok - Medium Card */}
            <motion.div 
              className="lg:col-span-6 bg-[#181626] rounded-3xl overflow-hidden relative group hover:transform hover:scale-[1.02] transition-all duration-500 border border-gray-800/50 hover:border-red-500/30"
              variants={cardVariants}
            >
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-500/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="p-6 lg:p-8 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center border border-red-500/20">
                    <span className="text-xl">{services[3].icon}</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-red-400 tracking-wider">
                      {services[3].category}
                    </div>
                    <h3 className="text-xl font-bold text-white">{services[3].title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">{services[3].description}</p>
                
                <div className="grid grid-cols-1 gap-2 mb-6">
                  {services[3].features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-red-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-400 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-red-500/20 hover:border-red-500/40 transition-all duration-300 group text-sm"
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
              Our Advertising Process
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A proven approach that maximizes your advertising budget and delivers consistent, measurable results across all platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={cardVariants}
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <span className="text-blue-400 font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ad Platforms Section */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advertising Platforms We Master
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We&apos;re certified experts across all major advertising platforms, ensuring your campaigns reach the right audience at the right time.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Google Ads", icon: "🔍", color: "blue" },
              { name: "Facebook Ads", icon: "📘", color: "blue" },
              { name: "Instagram Ads", icon: "📸", color: "purple" },
              { name: "LinkedIn Ads", icon: "💼", color: "blue" },
              { name: "YouTube Ads", icon: "📺", color: "red" },
              { name: "TikTok Ads", icon: "🎵", color: "black" },
              { name: "Twitter Ads", icon: "🐦", color: "blue" },
              { name: "Pinterest Ads", icon: "📌", color: "red" },
              { name: "Snapchat Ads", icon: "👻", color: "yellow" },
              { name: "Microsoft Ads", icon: "🔷", color: "blue" },
              { name: "Amazon Ads", icon: "📦", color: "orange" },
              { name: "Reddit Ads", icon: "🤖", color: "orange" }
            ].map((platform, index) => (
              <motion.div 
                key={index}
                className="bg-[#181626] rounded-2xl p-6 text-center border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 group"
                variants={cardVariants}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {platform.icon}
                </div>
                <div className="text-white font-semibold text-sm">{platform.name}</div>
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
              Why Choose Our Advertising Services?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We deliver exceptional ROI through strategic campaign management, advanced targeting, and continuous optimization across all platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Precision Targeting",
                description: "Advanced audience targeting and segmentation ensures your ads reach the most qualified prospects, reducing waste and maximizing conversions.",
                color: "blue"
              },
              {
                icon: "📊",
                title: "Data-Driven Optimization",
                description: "Continuous A/B testing, performance analysis, and real-time optimizations keep your campaigns performing at peak efficiency.",
                color: "green"
              },
              {
                icon: "💰",
                title: "Maximum ROI Focus",
                description: "Every campaign is optimized for return on investment, with detailed tracking and attribution to prove advertising effectiveness.",
                color: "yellow"
              },
              {
                icon: "🚀",
                title: "Multi-Platform Expertise",
                description: "Certified professionals manage campaigns across all major platforms, ensuring cohesive messaging and optimal budget allocation.",
                color: "purple"
              },
              {
                icon: "📱",
                title: "Creative Excellence",
                description: "Compelling ad creatives, copy, and video content designed to capture attention and drive action across all platforms and devices.",
                color: "pink"
              },
              {
                icon: "📈",
                title: "Transparent Reporting",
                description: "Detailed monthly reports with clear metrics, insights, and recommendations so you always know how your campaigns are performing.",
                color: "cyan"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-[#181626] rounded-2xl p-8 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 group"
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
              Industries We Advertise For
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From B2B to e-commerce, we&apos;ve created successful advertising campaigns across diverse industries and market verticals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "E-commerce", icon: "🛒", description: "Online stores & marketplaces" },
              { name: "SaaS & Tech", icon: "💻", description: "Software & technology" },
              { name: "Healthcare", icon: "🏥", description: "Medical & wellness" },
              { name: "Real Estate", icon: "🏠", description: "Property & investments" },
              { name: "Finance", icon: "💰", description: "Banking & fintech" },
              { name: "Education", icon: "🎓", description: "Schools & e-learning" },
              { name: "Legal Services", icon: "⚖️", description: "Law firms & attorneys" },
              { name: "Home Services", icon: "🔧", description: "Contractors & repairs" },
              { name: "Automotive", icon: "🚗", description: "Dealers & services" },
              { name: "Restaurant", icon: "🍽️", description: "Food & delivery" }
            ].map((industry, index) => (
              <motion.div 
                key={index}
                className="bg-[#181626] rounded-2xl p-6 text-center border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 group"
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
              Got questions? We&apos;ve got answers. Here are the most common questions about our digital advertising services.
            </p>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                {[
                  {
                    question: "Which advertising platform is best for my business?",
                    answer: "The best platform depends on your target audience, business goals, and budget. Google Ads is excellent for capturing high-intent searches, while Facebook and Instagram are great for brand awareness and engagement. We&apos;ll analyze your business to recommend the optimal platform mix."
                  },
                  {
                    question: "How much should I spend on advertising?",
                    answer: "Ad spend varies by industry, competition, and goals. We typically recommend starting with a test budget of $1,000-$5,000/month to gather data, then scaling based on performance. We&apos;ll help determine the right budget for your specific situation."
                  },
                  {
                    question: "How quickly will I see results from ads?",
                    answer: "Unlike SEO, advertising can drive immediate traffic and results. You&apos;ll typically see initial data within 24-48 hours, with meaningful insights and optimizations possible within the first week of campaign launch."
                  }
                ].map((faq, index) => (
                  <motion.div 
                    key={`left-faq-${index}`}
                    className="bg-[#181626] rounded-2xl border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300"
                    variants={cardVariants}
                  >
                    <button
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <h3 className="text-white font-bold text-lg pr-4">{faq.question}</h3>
                      <div className="flex-shrink-0">
                        <svg 
                          className={`w-5 h-5 text-blue-400 transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : 'rotate-0'}`}
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
                    question: "Do you provide creative design services?",
                    answer: "Yes! Our team creates compelling ad creatives including images, videos, copy, and landing pages. We handle everything from concept to execution, ensuring your ads look professional and drive results."
                  },
                  {
                    question: "How do you measure advertising success?",
                    answer: "We track comprehensive metrics including impressions, clicks, conversions, cost-per-acquisition, return on ad spend (ROAS), and lifetime customer value. Monthly reports show exactly how your campaigns are performing and contributing to business growth."
                  },
                  {
                    question: "Can you work with my existing marketing team?",
                    answer: "Absolutely! We collaborate seamlessly with in-house marketing teams, providing specialized advertising expertise while integrating with your overall marketing strategy and brand guidelines."
                  }
                ].map((faq, index) => {
                  const rightColumnIndex = index + 3;
                  return (
                    <motion.div 
                      key={`right-faq-${index}`}
                      className="bg-[#181626] rounded-2xl border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300"
                      variants={cardVariants}
                    >
                      <button
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                        onClick={() => setOpenFAQ(openFAQ === rightColumnIndex ? null : rightColumnIndex)}
                      >
                        <h3 className="text-white font-bold text-lg pr-4">{faq.question}</h3>
                        <div className="flex-shrink-0">
                          <svg 
                            className={`w-5 h-5 text-blue-400 transform transition-transform duration-300 ${openFAQ === rightColumnIndex ? 'rotate-180' : 'rotate-0'}`}
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
            Ready to Amplify Your Reach?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s create advertising campaigns that drive real results. Get a free audit and custom strategy across all major platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactPopupOpen(true)}
            >
              Get Free Ad Audit
            </motion.button>
            <motion.button 
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactPopupOpen(true)}
            >
              Schedule Strategy Call
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

export default Ads