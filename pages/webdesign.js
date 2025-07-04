import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Head from 'next/head'
import ContactPopup from '../components/ContactPopup'

function WebDesign() {
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
      category: "CUSTOM DEVELOPMENT",
      title: "Full Stack Development",
      description: "Complete custom websites built from scratch using modern technologies like React, Next.js, Node.js, and more. Perfect for businesses that need unique functionality and complete control over their digital presence.",
      features: [
        "Custom user interfaces and experiences",
        "Advanced functionality and integrations",
        "Scalable architecture and databases",
        "API development and third-party integrations",
        "Performance optimization",
        "SEO-friendly structure"
      ],
      icon: "💻",
      gradient: "bg-gradient-to-br from-blue-500/80 to-purple-600/60",
      popular: false
    },
    {
      id: 2,
      category: "E-COMMERCE PLATFORM",
      title: "Shopify Development",
      description: "Professional Shopify stores that convert visitors into customers. From theme customization to custom apps, we create e-commerce experiences that drive sales and growth.",
      features: [
        "Custom Shopify theme development",
        "App integrations and custom apps",
        "Payment gateway setup",
        "Inventory management systems",
        "Multi-channel selling setup",
        "Conversion rate optimization"
      ],
      icon: "🛍️",
      gradient: "bg-gradient-to-br from-green-500/80 to-emerald-600/60",
      popular: true
    },
    {
      id: 3,
      category: "NO-CODE PLATFORM",
      title: "Webflow Development",
      description: "Stunning, responsive websites built on Webflow&apos;s powerful platform. Perfect for businesses that want beautiful design with easy content management and fast deployment.",
      features: [
        "Responsive design systems",
        "Custom animations and interactions",
        "CMS setup and content management",
        "SEO optimization",
        "Form integrations",
        "Fast loading and hosting"
      ],
      icon: "🎨",
      gradient: "bg-gradient-to-br from-purple-500/80 to-pink-600/60",
      popular: false
    },
    {
      id: 4,
      category: "CMS PLATFORMS",
      title: "WordPress & Others",
      description: "Professional websites on popular content management systems. Whether you need WordPress, Squarespace, Wix, or another platform, we deliver results that work for your business.",
      features: [
        "Custom theme development",
        "Plugin setup and customization",
        "E-commerce integration",
        "Security and performance optimization",
        "Content migration",
        "Training and support"
      ],
      icon: "🔧",
      gradient: "bg-gradient-to-br from-orange-500/80 to-red-600/60",
      popular: false
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and technical requirements to create the perfect roadmap for your project."
    },
    {
      step: "02", 
      title: "Design & Planning",
      description: "Our team creates wireframes, mockups, and prototypes that bring your vision to life before any code is written."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your website using best practices, ensuring it&apos;s fast, secure, and works perfectly across all devices and browsers."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "After thorough testing, we launch your site and provide ongoing support to ensure it continues to perform at its best."
    }
  ];

  return (
    <>
      <Head>
        <title>Web Design & Development Services | Comcreate</title>
        <meta name="description" content="Professional web design and development services. We create custom websites, Shopify stores, Webflow sites, and more. Transform your vision into digital reality." />
        <meta name="keywords" content="web design, web development, custom websites, Shopify development, Webflow design, responsive design, e-commerce development, full stack development" />
        <meta property="og:title" content="Web Design & Development Services | Comcreate" />
        <meta property="og:description" content="Professional web design and development services. We create custom websites, Shopify stores, Webflow sites, and more." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Design & Development Services | Comcreate" />
        <meta name="twitter:description" content="Professional web design and development services. We create custom websites, Shopify stores, Webflow sites, and more." />
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
            WEB DESIGN & DEVELOPMENT
          </span>
        </motion.div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Transform Your Vision Into{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
            Digital Reality
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                     From custom code to popular platforms like Shopify and Webflow, we create websites that don&apos;t just look amazing — they drive results, engage users, and grow your business.
        </p>
        <motion.button 
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsContactPopupOpen(true)}
        >
          Start Your Project
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
            Our Web Development Services
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the perfect solution for your business needs, from completely custom development to powerful platform-based solutions.
          </p>
        </div>

                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
           {/* Full Stack Development - Large Featured Card */}
           <motion.div 
             className="lg:col-span-8 bg-[#181626] rounded-3xl overflow-hidden relative group hover:transform hover:scale-[1.01] transition-all duration-500 border border-gray-800/50 hover:border-blue-500/30"
             variants={cardVariants}
           >
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-16 translate-x-16"></div>
             <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 rounded-full translate-y-12 -translate-x-12"></div>
             
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

           {/* Shopify Development - Tall Card */}
           <motion.div 
             className="lg:col-span-4 bg-[#181626] rounded-3xl overflow-hidden relative group hover:transform hover:scale-[1.02] transition-all duration-500 border border-gray-800/50 hover:border-green-500/30"
             variants={cardVariants}
           >
             <span className="absolute top-4 right-4 bg-fuchsia-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
               MOST POPULAR
             </span>
             
             <div className="absolute top-0 left-0 w-20 h-20 bg-green-500/5 rounded-full -translate-y-10 -translate-x-10"></div>
             
             <div className="p-6 relative z-10 h-full flex flex-col">
               <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center border border-green-500/20 mb-4">
                 <span className="text-2xl">{services[1].icon}</span>
               </div>
               
               <div className="text-xs font-semibold text-green-400 tracking-wider mb-1">
                 {services[1].category}
               </div>
               <h3 className="text-xl font-bold text-white mb-4">{services[1].title}</h3>
               <p className="text-gray-400 mb-6 leading-relaxed text-sm flex-grow">{services[1].description}</p>
               
               <div className="space-y-2 mb-6">
                 {services[1].features.slice(0, 4).map((feature, index) => (
                   <div key={index} className="flex items-center gap-2">
                     <div className="w-1 h-1 bg-green-400 rounded-full flex-shrink-0"></div>
                     <span className="text-gray-400 text-xs">{feature}</span>
                   </div>
                 ))}
               </div>

               <button 
                 className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300 group text-sm mt-auto"
                 onClick={() => setIsContactPopupOpen(true)}
               >
                 Get Started 
                 <span className="group-hover:translate-x-1 transition-transform">→</span>
               </button>
             </div>
           </motion.div>

           {/* Webflow Development - Medium Card */}
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

           {/* WordPress & Others - Medium Card */}
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
            Our Development Process
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A proven methodology that ensures your project is delivered on time, on budget, and exceeds your expectations.
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

      {/* Technologies Section */}
      <motion.div 
        className="mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technologies & Tools We Master
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We use cutting-edge technologies and proven tools to build fast, secure, and scalable websites.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "React", icon: "⚛️", color: "blue" },
            { name: "Next.js", icon: "🔺", color: "gray" },
            { name: "Node.js", icon: "🟢", color: "green" },
            { name: "Shopify", icon: "🛍️", color: "green" },
            { name: "Webflow", icon: "🎨", color: "purple" },
            { name: "WordPress", icon: "📝", color: "blue" },
            { name: "TypeScript", icon: "📘", color: "blue" },
            { name: "Tailwind", icon: "🎯", color: "cyan" },
            { name: "MongoDB", icon: "🍃", color: "green" },
            { name: "PostgreSQL", icon: "🐘", color: "blue" },
            { name: "AWS", icon: "☁️", color: "orange" },
            { name: "Vercel", icon: "▲", color: "gray" }
          ].map((tech, index) => (
            <motion.div 
              key={index}
              className="bg-[#181626] rounded-2xl p-6 text-center border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 group"
              variants={cardVariants}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <div className="text-white font-semibold text-sm">{tech.name}</div>
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
            Why Choose Comcreate?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                         We don&apos;t just build websites — we create digital experiences that drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "⚡",
              title: "Lightning Fast Performance",
              description: "Optimized for speed with 99.9% uptime, ensuring your visitors never wait and search engines love your site.",
              color: "yellow"
            },
            {
              icon: "🔒",
              title: "Security First Approach",
              description: "Built with enterprise-level security, SSL certificates, and regular updates to keep your business safe.",
              color: "green"
            },
            {
              icon: "📱",
              title: "Mobile-First Design",
              description: "Every website is designed for mobile first, ensuring perfect experiences across all devices and screen sizes.",
              color: "blue"
            },
            {
              icon: "🎯",
              title: "SEO Optimized",
              description: "Built-in SEO best practices, meta optimization, and structured data to help you rank higher on Google.",
              color: "purple"
            },
            {
              icon: "🚀",
              title: "Scalable Architecture",
              description: "Future-proof solutions that grow with your business, handling traffic spikes and new features seamlessly.",
              color: "cyan"
            },
            {
              icon: "🎨",
              title: "Custom Design",
              description: "Unique designs tailored to your brand, never using templates or cookie-cutter solutions.",
              color: "pink"
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
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From startups to enterprise companies, we&apos;ve helped businesses across diverse industries establish their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { name: "E-commerce", icon: "🛒", description: "Online stores & marketplaces" },
            { name: "Healthcare", icon: "🏥", description: "Medical practices & clinics" },
            { name: "Real Estate", icon: "🏠", description: "Property & rental platforms" },
            { name: "Finance", icon: "💰", description: "Banking & investment firms" },
            { name: "Education", icon: "🎓", description: "Schools & online learning" },
            { name: "Technology", icon: "💻", description: "SaaS & software companies" },
            { name: "Restaurant", icon: "🍽️", description: "Food & hospitality" },
            { name: "Professional", icon: "💼", description: "Legal & consulting firms" },
            { name: "Non-Profit", icon: "❤️", description: "Charities & foundations" },
            { name: "Entertainment", icon: "🎭", description: "Media & creative agencies" }
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
            Got questions? We&apos;ve got answers. Here are the most common questions about our web design services.
          </p>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              {[
                {
                  question: "How long does it take to build a website?",
                  answer: "Timeline depends on complexity. Simple websites take 2-4 weeks, while custom e-commerce or complex applications can take 6-12 weeks. We&apos;ll provide a detailed timeline during our consultation."
                },
                {
                  question: "Will my website be mobile-friendly?",
                  answer: "Absolutely. All our websites are built mobile-first and fully responsive, ensuring they look and function perfectly on all devices, from smartphones to desktop computers."
                },
                {
                  question: "What if I need changes after launch?",
                                      answer: "We include a revision period post-launch, and offer flexible maintenance plans for ongoing updates. We&apos;re here to support your website&apos;s evolution as your business grows."
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
                  question: "Do you provide ongoing maintenance?",
                  answer: "Yes! We offer comprehensive maintenance packages including security updates, content updates, performance monitoring, and technical support to keep your site running smoothly."
                },
                {
                  question: "Can you help with SEO?",
                  answer: "Yes, we build SEO best practices into every website, including optimized code, meta tags, structured data, and fast loading speeds. We also offer dedicated SEO services for ongoing optimization."
                },
                {
                  question: "Do you work with existing brands?",
                  answer: "Definitely! We can work with your existing brand guidelines and assets, or help refresh your brand identity as part of the website design process."
                }
              ].map((faq, index) => {
                const rightColumnIndex = index + 3; // Offset by number of left column items
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
          Ready to Build Something Amazing?
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss your project and find the perfect solution for your business needs. Get a free consultation and quote today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsContactPopupOpen(true)}
          >
            Start Your Project
          </motion.button>
          <motion.button 
            className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsContactPopupOpen(true)}
          >
            Get Free Quote
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

export default WebDesign 