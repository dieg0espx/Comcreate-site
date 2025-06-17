import React, { useState } from 'react'
import Accordion from './Accordion'
import { motion } from 'framer-motion'

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What kind of website does my business need?",
      answer: "The type of website your business needs depends on your goals, target audience, and industry. We offer custom solutions ranging from simple landing pages to complex e-commerce platforms, all optimized for performance and user experience."
    },
    {
      question: "Why should I choose Comcreate for SEO and digital ads?",
      answer: "We combine data-driven strategies with creative excellence to deliver measurable results. Our team stays ahead of industry trends and algorithm updates, ensuring your campaigns remain effective and competitive."
    },
    {
      question: "How do I switch from my current agency or provider?",
      answer: "Switching to Comcreate is seamless. We handle the transition process, including account transfers, strategy alignment, and performance monitoring. Our team ensures no disruption to your ongoing campaigns."
    },
    {
      question: "What happens if I already have a website or marketing plan?",
      answer: "We'll analyze your existing assets and strategies to identify opportunities for improvement. Whether you need a complete overhaul or targeted enhancements, we'll create a customized plan to elevate your digital presence."
    },
    {
      question: "What's the difference between web design and branding?",
      answer: "Web design focuses on creating functional, user-friendly websites, while branding encompasses your entire visual identity and messaging strategy. We offer both services to ensure a cohesive and impactful online presence."
    },
    {
      question: "How do I manage my services and track results with Comcreate?",
      answer: "You'll have access to our client portal where you can monitor performance metrics, request changes, and communicate with our team. We also provide regular reports and strategy sessions to ensure you're always informed and in control."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is tailored to your specific needs and goals. We offer flexible packages for web design, SEO, and digital advertising, with options for both small businesses and enterprise clients. Contact us for a custom quote."
    },
    {
      question: "How long does it take to see results?",
      answer: "Results vary by service and goals. Web design projects typically launch within 4-8 weeks, while SEO results usually show significant improvement within 3-6 months. Digital advertising can show immediate results, with optimization ongoing."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide comprehensive ongoing support for all our services. This includes regular maintenance, updates, performance monitoring, and dedicated account management to ensure your digital presence remains optimal."
    },
    {
      question: "Can you help with local SEO?",
      answer: "Absolutely! We specialize in local SEO strategies that help businesses dominate their local market. This includes Google Business Profile optimization, local citations, and targeted content strategies for your specific location."
    },
    {
      question: "What makes your web design different?",
      answer: "Our web design combines stunning aesthetics with performance optimization. We focus on creating fast, mobile-responsive sites that convert visitors into customers, backed by data-driven design decisions and user experience best practices."
    },
    {
      question: "How do you measure success?",
      answer: "We use a comprehensive set of KPIs tailored to your goals, including traffic metrics, conversion rates, ROI, and engagement statistics. You'll receive regular reports and insights to track progress and make informed decisions."
    }
  ];

  // Split FAQs into two columns
  const midPoint = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midPoint);
  const rightColumn = faqs.slice(midPoint);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const columnVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="w-full px-0 py-16">
      <motion.div 
        className="flex flex-col items-center w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.span 
          className="bg-[#181626] text-gray-300 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-widest"
          variants={headerVariants}
        >
          GOT QUESTIONS?
        </motion.span>
        <motion.h2 
          className="text-4xl md:text-6xl font-extrabold text-white mb-12 text-center"
          variants={headerVariants}
        >
          Frequently Asked<br />Questions
        </motion.h2>
        <motion.div 
          className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8"
          variants={containerVariants}
        >
          <motion.div 
            className="space-y-4"
            variants={columnVariants}
          >
            {leftColumn.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Accordion 
                  title={faq.question}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                >
                  {faq.answer}
                </Accordion>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="space-y-4"
            variants={columnVariants}
          >
            {rightColumn.map((faq, index) => (
              <motion.div
                key={index + midPoint}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Accordion 
                  title={faq.question}
                  isOpen={openIndex === index + midPoint}
                  onToggle={() => handleToggle(index + midPoint)}
                >
                  {faq.answer}
                </Accordion>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default FaqSection