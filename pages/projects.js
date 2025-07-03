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
      category: "E-COMMERCE",
      title: "TechFlow Electronics Store",
      description: "TechFlow Electronics came to us with a legacy e-commerce platform that was hemorrhaging customers at checkout. Their conversion rate had plummeted to just 1.2%, and mobile users were abandoning their carts at an alarming 89% rate. The outdated interface, slow loading times, and confusing navigation were costing them thousands in lost revenue daily.",
      image: "/placeholder-project-1.jpg",
      liveUrl: "https://techflow-demo.com",
      gradient: "bg-gradient-to-br from-green-500/80 to-green-700/60",
      metrics: [
        { label: "Sales Increase", value: "+147%", icon: "📈" },
        { label: "Conversion Rate", value: "+89%", icon: "🎯" },
        { label: "Mobile Traffic", value: "+203%", icon: "📱" },
        { label: "Sales Increase", value: "+147%", icon: "📈" },
        { label: "Conversion Rate", value: "+89%", icon: "🎯" },
        { label: "Mobile Traffic", value: "+203%", icon: "📱" }
      ],
      bullets: [
        "Streamlined checkout process",
        "Advanced product filtering with real-time",
        "Intelligent product recommendations",
        "Mobile-first responsive design",
        "Secure payment gateways",
        "Inventory management systems",
        "Powerful analytics"
      ]
    },
    {
      id: 2,
      category: "SAAS PLATFORM", 
      title: "CloudSync Business Dashboard",
      description: "Modern SaaS platform with real-time analytics, user management, and seamless integrations for growing businesses.",
      image: "/placeholder-project-2.jpg",
      liveUrl: "https://cloudsync-demo.com",
      gradient: "bg-gradient-to-br from-purple-500/80 to-pink-600/60",
      metrics: [
        { label: "User Retention", value: "+156%", icon: "👥" },
        { label: "Revenue Growth", value: "+234%", icon: "💰" },
        { label: "Load Speed", value: "-67%", icon: "⚡" }
      ],
      
    },
    {
      id: 3,
      category: "HEALTHCARE",
      title: "MediCare Patient Portal", 
      description: "HIPAA-compliant patient portal with appointment scheduling, secure messaging, and telehealth integration.",
      image: "/placeholder-project-3.jpg",
      liveUrl: "https://medicare-portal-demo.com",
      gradient: "bg-gradient-to-br from-blue-500/80 to-cyan-600/60",
      metrics: [
        { label: "Patient Satisfaction", value: "+178%", icon: "❤️" },
        { label: "Appointment Bookings", value: "+267%", icon: "📅" },
        { label: "Support Tickets", value: "-45%", icon: "🎫" }
      ],
   
    },
    {
      id: 4,
      category: "RESTAURANT",
      title: "Bella Vista Fine Dining",
      description: "Elegant restaurant website with online reservations, menu showcase, and integrated delivery system.",
      image: "/placeholder-project-4.jpg",
      liveUrl: "https://bellavista-demo.com",
      gradient: "bg-gradient-to-br from-orange-500/80 to-red-600/60", 
      metrics: [
        { label: "Online Orders", value: "+189%", icon: "🍽️" },
        { label: "Reservations", value: "+134%", icon: "📞" },
        { label: "Customer Reviews", value: "+98%", icon: "⭐" }
      ],
      
    },
    {
      id: 5,
      category: "FINTECH",
      title: "CryptoTrade Investment Platform",
      description: "Secure cryptocurrency trading platform with real-time market data, portfolio management, and advanced analytics.",
      image: "/placeholder-project-5.jpg",
      liveUrl: "https://cryptotrade-demo.com",
      gradient: "bg-gradient-to-br from-yellow-500/80 to-orange-600/60",
      metrics: [
        { label: "Trading Volume", value: "+312%", icon: "📊" },
        { label: "User Signups", value: "+245%", icon: "🔐" },
        { label: "Transaction Speed", value: "-58%", icon: "⚡" }
      ],
      
    },
    {
      id: 6,
      category: "EDUCATION", 
      title: "EduLearn Online Academy",
      description: "Interactive learning management system with video courses, progress tracking, and certification programs.",
      image: "/placeholder-project-6.jpg",
      liveUrl: "https://edulearn-demo.com",
      gradient: "bg-gradient-to-br from-indigo-500/80 to-purple-600/60",
      metrics: [
        { label: "Course Completion", value: "+167%", icon: "🎓" },
        { label: "Student Engagement", value: "+201%", icon: "📚" },
        { label: "Revenue Growth", value: "+178%", icon: "💼" }
      ],
     
    },
    {
      id: 7,
      category: "REAL ESTATE",
      title: "PrimeLiving Property Search", 
      description: "PrimeLiving Real Estate was losing potential clients to competitors with more advanced online property search capabilities. ",
      image: "/placeholder-project-7.jpg",
      liveUrl: "https://primeliving-demo.com",
      gradient: "bg-gradient-to-br from-cyan-500/80 to-blue-600/60",
      metrics: [
        { label: "Lead Generation", value: "+198%", icon: "🏠" },
        { label: "Property Views", value: "+156%", icon: "👁️" },
        { label: "Contact Forms", value: "+123%", icon: "📞" }
      ],
     
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 lg:px-8">
      <div className="mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their digital presence and achieve measurable results that drive growth.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Featured Project - Takes up 2 columns on desktop */}
          <motion.div 
            className="lg:col-span-2 lg:row-span-2"
            variants={cardVariants}
          >
            <div className="bg-[#181626] rounded-2xl overflow-hidden h-full flex flex-col min-h-[600px] lg:min-h-[700px] relative group hover:transform hover:scale-[1.02] transition-transform duration-300">
              {/* Project Image */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <div className={`absolute inset-0 ${projects[0].gradient} opacity-90`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                  {projects[0].category}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl opacity-50">🖥️</div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-4 md:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                    {projects[0].title}
                  </h2>
                                     <div className="text-gray-400 text-lg mb-6 leading-relaxed">
                     {projects[0].description.split('\n\n').map((paragraph, index) => (
                       <p key={index} className={index > 0 ? "mt-4" : ""}>
                         {paragraph}
                       </p>
                     ))}
                   </div>

                   {/* Key Features */}
                   {projects[0].bullets && (
                     <div className="mb-8">
                       <h4 className="text-white font-semibold mb-4 text-lg">Key Features:</h4>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                         {projects[0].bullets.map((bullet, index) => (
                           <div key={index} className="flex items-start gap-3">
                             <span className="text-blue-400 mt-1 text-sm">•</span>
                             <span className="text-gray-300 text-base">{bullet}</span>
                           </div>
                         ))}
                       </div>
                     </div>
                   )}
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {projects[0].metrics.map((metric, index) => (
                      <div key={index} className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">{metric.icon}</div>
                        <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                        <div className="text-sm text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <button 
                    onClick={() => window.open(projects[0].liveUrl, '_blank')}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-colors flex items-center gap-2 group w-full justify-center md:w-auto md:justify-start"
                  >
                    View Live Site 
                    <span className="group-hover:translate-x-1 transition-transform">🚀</span>
                  </button>
                </div>
              </div>
            </div>
            
          </motion.div>

          {/* Regular Projects */}
          {projects.slice(1, 6).map((project, index) => (
            <motion.div 
              key={project.id}
              variants={cardVariants}
              className={index === 0 || index === 1 ? "lg:row-span-1" : ""}
            >
              <div className="bg-[#181626] rounded-2xl overflow-hidden h-full flex flex-col min-h-[500px] relative group hover:transform hover:scale-[1.02] transition-transform duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 ${project.gradient} opacity-90`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                    {project.category}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-50">💻</div>
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

                    {/* Key Features */}
                    {project.bullets && (
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
                    )}
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-1 gap-2 mb-6">
                      {project.metrics.slice(0, 2).map((metric, index) => (
                        <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                          <span className="text-sm text-gray-400 flex items-center gap-2">
                            <span>{metric.icon}</span>
                            {metric.label}
                          </span>
                          <span className="font-bold text-white">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <button 
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-colors flex items-center gap-2 group w-full justify-center md:w-auto md:justify-start"
                    >
                      View Live Site 
                      <span className="group-hover:translate-x-1 transition-transform">🚀</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom row - spans full width on larger screens */}
          <motion.div 
            className="lg:col-span-3"
            variants={cardVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.slice(5).map((project) => (
                <div key={project.id} className="bg-[#181626] rounded-2xl overflow-hidden flex flex-col min-h-[500px] relative group hover:transform hover:scale-[1.02] transition-transform duration-300">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 ${project.gradient} opacity-90`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                      {project.category}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-50">📱</div>
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

                      {/* Key Features */}
                      {project.bullets && (
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
                      )}
                      
                      {/* Metrics */}
                      <div className="grid grid-cols-1 gap-2 mb-6">
                        {project.metrics.slice(0, 2).map((metric, index) => (
                          <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                            <span className="text-sm text-gray-400 flex items-center gap-2">
                              <span>{metric.icon}</span>
                              {metric.label}
                            </span>
                            <span className="font-bold text-white">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <button 
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-colors flex items-center gap-2 group w-full justify-center md:w-auto md:justify-start"
                      >
                        View Live Site 
                        <span className="group-hover:translate-x-1 transition-transform">🚀</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects