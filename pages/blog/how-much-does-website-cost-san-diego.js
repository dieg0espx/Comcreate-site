import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const faqs = [
  {
    question: 'How much should a small business spend on a website in San Diego?',
    answer: 'Most San Diego small businesses invest between $5,000 and $15,000 for a professionally designed website. This range gets you 5-10 pages, custom design, mobile responsiveness, basic SEO setup, and a content management system you can update yourself. If your budget is tight, a brochure site starting at $2,000 establishes a solid foundation you can build on later. The key is matching your investment to your revenue goals -- if your website is a primary lead source, investing at the higher end of this range typically delivers a strong return.'
  },
  {
    question: 'Is a professional website worth the investment?',
    answer: 'In nearly every case, yes. A professionally built website typically pays for itself within 6-12 months through increased leads, higher conversion rates, and better search visibility. Businesses with professional websites consistently report 2-3x more inquiries compared to DIY alternatives. Beyond lead generation, a professional site builds credibility -- 75% of consumers judge a company\'s legitimacy based on their website design. In a competitive market like San Diego, a polished online presence is not a luxury. It is a baseline expectation.'
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'Timelines vary by complexity. A simple brochure site takes 2-4 weeks. A small business website with custom design runs 4-8 weeks. Ecommerce sites typically take 6-12 weeks due to product setup, payment integration, and testing. Custom web applications can take 3-6 months or longer. The biggest variable is usually content -- how quickly you can provide copy, images, and feedback. Agencies that promise a custom site in one week are either cutting corners or redefining "custom."'
  },
  {
    question: 'What is the cheapest way to get a professional-looking website?',
    answer: 'The most affordable professional option is a brochure website from an agency, starting around $2,000-$3,000 in San Diego. This gets you custom design, mobile responsiveness, and basic SEO -- far better than what most businesses can achieve with a DIY builder for a similar time investment. If you are truly bootstrapping, a well-executed Squarespace or Wix site ($15-$50/month) is a respectable starting point. Just go in knowing that you will likely outgrow it within 12-18 months as your business scales.'
  },
  {
    question: 'Can I update the website myself after it is built?',
    answer: 'Absolutely. Any reputable agency builds your site on a content management system (CMS) that lets you update text, swap images, add blog posts, and manage basic content without touching code. At Comcreate, we include a training session with every project so you feel confident making updates on your own. For larger changes -- new pages, design modifications, or feature additions -- your agency should offer ongoing support, either through a maintenance plan or on an hourly basis.'
  },
  {
    question: 'Do I need SEO with my new website?',
    answer: 'A website without SEO is like opening a store with no sign on the door. Basic on-page SEO -- proper title tags, meta descriptions, heading structure, image optimization, and site speed -- should be included with any professional build. This is table stakes. For competitive San Diego markets (think "personal injury lawyer San Diego" or "best restaurant Gaslamp"), you will need ongoing SEO services to rank on the first page. Budget $500-$5,000/month depending on your market competitiveness and goals.'
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className="border border-white/10 rounded-xl overflow-hidden bg-[#181626]/40 hover:border-white/20 transition-colors duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
      >
        <span className="text-white font-semibold text-xs sm:text-sm md:text-base pr-3 sm:pr-4">{faq.question}</span>
        <span className={`text-blue-400 text-lg sm:text-xl flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-4 px-4 sm:pb-5 sm:px-5' : 'max-h-0'}`}>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  )
}

export default function BlogPost() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'How Much Does a Website Cost in San Diego? (2026 Guide)',
    description: 'San Diego website costs range from $2,000-$50,000+. Get transparent pricing by type, plus what affects cost. Free quote from Comcreate.',
    image: 'https://res.cloudinary.com/dku1gnuat/image/upload/v1774888144/Comcreate_Blog_1_Website_Cost_San_Diego_gmhjg1.webp',
    datePublished: '2026-03-28',
    dateModified: '2026-03-28',
    author: {
      '@type': 'Organization',
      name: 'Comcreate Digital',
      url: 'https://www.comcreate.org'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Comcreate Digital',
      url: 'https://www.comcreate.org',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.comcreate.org/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.comcreate.org/blog/how-much-does-website-cost-san-diego'
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <>
      <Head>
        <title>How Much Does a Website Cost in San Diego? (2026) | Comcreate</title>
        <meta name="description" content="San Diego website costs range from $2,000-$50,000+. Get transparent pricing by type, plus what affects cost. Free quote from Comcreate." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.comcreate.org/blog/how-much-does-website-cost-san-diego" />
        <meta property="og:title" content="How Much Does a Website Cost in San Diego? (2026)" />
        <meta property="og:description" content="San Diego website costs range from $2,000-$50,000+. Get transparent pricing by type, plus what affects cost. Free quote from Comcreate." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.comcreate.org/blog/how-much-does-website-cost-san-diego" />
        <meta property="og:image" content="https://res.cloudinary.com/dku1gnuat/image/upload/v1774888144/Comcreate_Blog_1_Website_Cost_San_Diego_gmhjg1.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How Much Does a Website Cost in San Diego? (2026)" />
        <meta name="twitter:description" content="San Diego website costs range from $2,000-$50,000+. Get transparent pricing by type, plus what affects cost." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dku1gnuat/image/upload/v1774888144/Comcreate_Blog_1_Website_Cost_San_Diego_gmhjg1.webp" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <motion.article
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Breadcrumb */}
        <motion.nav className="mb-6 sm:mb-8" variants={itemVariants}>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-300">Website Cost San Diego</span>
          </div>
        </motion.nav>

        {/* Header */}
        <motion.header className="mb-8 sm:mb-12" variants={itemVariants}>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
              Web Design
            </span>
            <span className="text-gray-500 text-xs sm:text-sm">March 28, 2026</span>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <span className="text-gray-500 text-xs sm:text-sm">12 min read</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
            How Much Does a Website Cost in San Diego?{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">(2026 Guide)</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
            It is the first question every business owner asks -- and the one most agencies dodge: &ldquo;How much is this going to cost me?&rdquo;
          </p>
        </motion.header>

        {/* Featured Image */}
        <motion.div className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-12 border border-white/10" variants={itemVariants}>
          <Image
            src="https://res.cloudinary.com/dku1gnuat/image/upload/v1774888144/Comcreate_Blog_1_Website_Cost_San_Diego_gmhjg1.webp"
            alt="How Much Does a Website Cost in San Diego"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </motion.div>

        {/* Content */}
        <motion.div className="prose-custom" variants={containerVariants}>

          {/* Intro */}
          <motion.div className="mb-8 sm:mb-12" variants={itemVariants}>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              The honest answer? A website in San Diego can cost anywhere from $500 for a bare-bones DIY setup to $50,000 or more for a fully custom web application. That is a wide range, and it is not helpful without context. So we are going to do what most agencies will not. We are going to break down every cost factor, every website type, and every hidden expense so you can walk into your next conversation with an agency -- ours or anyone else&apos;s -- armed with real numbers.
            </p>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              Whether you are a Pacific Beach surf shop launching your first site or a Sorrento Valley tech startup scaling your platform, this guide covers what San Diego businesses actually pay in 2026. No vague estimates. No bait-and-switch ranges.
            </p>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              And if you want a number specific to your project right now,{' '}
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors">get a free quote from Comcreate Digital</Link>{' '}
              or call us at{' '}
              <a href="tel:+16199550105" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">(619) 955-0105</a>.
              We will give you a transparent proposal -- usually within 48 hours.
            </p>
          </motion.div>

          {/* Quick Reference Table */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">Website Cost Overview: Quick Reference</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Before we dig into the details, here is a quick-reference table showing what San Diego businesses typically pay for different types of websites in 2026. These ranges reflect local market rates from established agencies -- not freelancers working out of coffee shops and not enterprise firms charging Silicon Valley prices.
            </p>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#181626]">
                    <th className="px-5 py-4 text-sm font-semibold text-white">Website Type</th>
                    <th className="px-5 py-4 text-sm font-semibold text-white">Price Range</th>
                    <th className="px-5 py-4 text-sm font-semibold text-white">Timeline</th>
                    <th className="px-5 py-4 text-sm font-semibold text-white">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ['Landing Page', '$500 - $2,000', '1-2 weeks', 'Ad campaigns, product launches, lead capture'],
                    ['Brochure Site (3-5 pages)', '$2,000 - $5,000', '2-4 weeks', 'New businesses, simple online presence'],
                    ['Small Business (5-10 pages)', '$5,000 - $15,000', '4-8 weeks', 'Established businesses, service providers'],
                    ['Ecommerce Store', '$5,000 - $25,000', '6-12 weeks', 'Retail, product-based businesses'],
                    ['Custom Web Application', '$15,000 - $50,000+', '3-6 months', 'SaaS, complex functionality, portals'],
                  ].map(([type, price, timeline, bestFor], i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="px-5 py-4 text-sm text-gray-300 font-medium">{type}</td>
                      <td className="px-5 py-4 text-sm text-blue-300 font-semibold">{price}</td>
                      <td className="px-5 py-4 text-sm text-gray-400">{timeline}</td>
                      <td className="px-5 py-4 text-sm text-gray-400">{bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-3">
              {[
                ['Landing Page', '$500 - $2,000', '1-2 weeks', 'Ad campaigns, product launches, lead capture'],
                ['Brochure Site (3-5 pages)', '$2,000 - $5,000', '2-4 weeks', 'New businesses, simple online presence'],
                ['Small Business (5-10 pages)', '$5,000 - $15,000', '4-8 weeks', 'Established businesses, service providers'],
                ['Ecommerce Store', '$5,000 - $25,000', '6-12 weeks', 'Retail, product-based businesses'],
                ['Custom Web Application', '$15,000 - $50,000+', '3-6 months', 'SaaS, complex functionality, portals'],
              ].map(([type, price, timeline, bestFor], i) => (
                <div key={i} className="p-4 rounded-xl border border-white/10 bg-[#181626]/30">
                  <h4 className="text-white font-semibold text-sm mb-1">{type}</h4>
                  <span className="text-blue-300 font-bold text-sm block mb-2">{price}</span>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500">
                    <span>{timeline}</span>
                    <span className="text-gray-700">&middot;</span>
                    <span>{bestFor}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4">
              These are project-based costs for design and development. They do not include ongoing expenses like hosting, maintenance, or marketing -- we cover those further down.
            </p>
            <p className="text-gray-400 text-sm mt-3">
              Keep in mind that the San Diego market sits roughly 10-15% above the national average for web design services. Our cost of living, talent pool, and business density all contribute to that. But you are also getting agencies with deep knowledge of the local market, which matters more than most people realize.
            </p>
          </motion.section>

          {/* Factors That Affect Cost */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Factors That Affect Website Cost</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              No two websites cost the same, and understanding what drives the price up or down gives you real negotiating power. Here are the factors that have the biggest impact on your final number.
            </p>

            <div className="space-y-5 sm:space-y-8">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Design Complexity</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  A website built from a pre-designed template with your brand colors and logo costs significantly less than a fully custom design created from scratch. Custom illustrations, animations, and interactive elements add to the investment. If your brand demands a unique visual identity -- and in competitive San Diego markets, it often does -- expect to pay more for design.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Number of Pages</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  This one is straightforward. More pages mean more design, more development, and more content. A five-page brochure site requires a fraction of the work that a 30-page service directory does.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Functionality and Features</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                  A static informational site is far simpler than one with appointment booking, customer portals, payment processing, membership areas, or real-time integrations. Every feature that requires custom development adds hours to the project. Common feature costs in San Diego:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    ['Contact forms and lead capture', '$200 - $500'],
                    ['Appointment/booking system', '$500 - $2,000'],
                    ['Ecommerce (basic)', '$1,000 - $5,000'],
                    ['Customer portal/login area', '$2,000 - $8,000'],
                    ['Custom API integrations', '$1,500 - $10,000+'],
                  ].map(([feature, cost], i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-[#181626]/60 border border-white/5 gap-2">
                      <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                      <span className="text-blue-300 text-xs sm:text-sm font-semibold whitespace-nowrap">{cost}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Content Creation</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  If you provide your own copy, photos, and videos, you save money. If the agency writes your content, takes professional photos, or produces video, that adds $1,000 to $5,000 or more. Good content is worth every dollar -- it is the single biggest factor in whether your site converts visitors into customers.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">SEO Setup</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Basic on-page SEO (title tags, meta descriptions, header structure, image optimization) should be standard with any professional build. Advanced SEO setup -- keyword research, content strategy, technical SEO, local SEO configuration -- adds $500 to $2,000 to the initial project.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Responsive and Mobile-First Design</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  In 2026, this is non-negotiable. Over 65% of San Diego web traffic comes from mobile devices. Any agency not building mobile-first is behind the curve. This should be included in every quote, not treated as an add-on.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">CMS and Technology Choice</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                  The platform your site is built on affects cost and long-term value:
                </p>
                <div className="space-y-3">
                  {[
                    ['WordPress', 'Most common, huge plugin ecosystem, moderate cost. Good for blogs and small business sites.'],
                    ['Shopify', 'Purpose-built for ecommerce, monthly fees apply, lower development cost for online stores.'],
                    ['Next.js', 'Modern framework, excellent performance and SEO, higher development cost but superior results. This is what we build with at Comcreate.'],
                    ['Webflow', 'Visual builder with clean code output, good for design-forward sites, moderate cost.'],
                  ].map(([name, desc], i) => (
                    <div key={i} className="p-3 sm:p-4 rounded-xl bg-[#181626]/40 border border-white/5">
                      <span className="text-white font-semibold text-sm sm:text-base">{name}:</span>{' '}
                      <span className="text-gray-400 text-xs sm:text-sm">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Timeline and Urgency</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Need it in two weeks instead of eight? Rush projects typically carry a 25-50% premium. Planning ahead saves money.
                </p>
              </div>
            </div>
          </motion.section>

          {/* DIY vs Professional */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">DIY Website Builders vs. Professional Agency</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              This is not a one-size-fits-all answer, and we are not going to pretend that every business needs a $10,000 website. Here is an honest comparison.
            </p>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto rounded-xl border border-white/10 mb-8">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[#181626]">
                    <th className="px-4 py-3 font-semibold text-white">Factor</th>
                    <th className="px-4 py-3 font-semibold text-white">DIY Builder</th>
                    <th className="px-4 py-3 font-semibold text-white">WordPress</th>
                    <th className="px-4 py-3 font-semibold text-white">Professional Agency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ['Upfront Cost', '$0 - $200', '$500 - $2,000', '$5,000 - $25,000+'],
                    ['Monthly Cost', '$15 - $50/mo', '$50 - $300/mo', 'Varies'],
                    ['Design Quality', 'Template-based', 'Flexible with themes', 'Fully custom'],
                    ['SEO Capability', 'Basic', 'Good with plugins', 'Advanced'],
                    ['Performance', 'Average', 'Variable', 'Optimized'],
                    ['Your Time', '20-60+ hours', '40-100+ hours', '5-10 hours'],
                    ['Scalability', 'Limited', 'Moderate', 'High'],
                  ].map(([factor, diy, wp, agency], i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 text-gray-300 font-medium">{factor}</td>
                      <td className="px-4 py-3 text-gray-400">{diy}</td>
                      <td className="px-4 py-3 text-gray-400">{wp}</td>
                      <td className="px-4 py-3 text-blue-300">{agency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-3 mb-8">
              {[
                ['Upfront Cost', '$0 - $200', '$500 - $2,000', '$5,000 - $25,000+'],
                ['Monthly Cost', '$15 - $50/mo', '$50 - $300/mo', 'Varies'],
                ['Design Quality', 'Template-based', 'Flexible with themes', 'Fully custom'],
                ['SEO Capability', 'Basic', 'Good with plugins', 'Advanced'],
                ['Performance', 'Average', 'Variable', 'Optimized'],
                ['Your Time', '20-60+ hours', '40-100+ hours', '5-10 hours'],
                ['Scalability', 'Limited', 'Moderate', 'High'],
              ].map(([factor, diy, wp, agency], i) => (
                <div key={i} className="p-4 rounded-xl border border-white/10 bg-[#181626]/30">
                  <h4 className="text-white font-semibold text-sm mb-3">{factor}</h4>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500 block mb-1">DIY</span>
                      <span className="text-gray-400">{diy}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block mb-1">WordPress</span>
                      <span className="text-gray-400">{wp}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block mb-1">Agency</span>
                      <span className="text-blue-300 font-medium">{agency}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="p-4 sm:p-6 rounded-xl border border-white/10 bg-[#181626]/40">
                <h3 className="text-white font-bold text-sm sm:text-base mb-4">When DIY makes sense</h3>
                <ul className="space-y-2">
                  {[
                    'You are testing a business idea and need a minimal online presence fast',
                    'Your budget is genuinely under $2,000 and you have time to invest',
                    'You enjoy the process and have some design sense',
                    'Your business does not depend heavily on online leads',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm">
                      <span className="text-gray-600 mt-1 sm:mt-1.5 flex-shrink-0 text-[8px] sm:text-xs">&#9679;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 sm:p-6 rounded-xl border border-blue-500/20 bg-blue-500/5">
                <h3 className="text-white font-bold text-sm sm:text-base mb-4">When a professional agency makes sense</h3>
                <ul className="space-y-2">
                  {[
                    'Your website is a primary source of leads or revenue',
                    'You need to stand out in a competitive San Diego market',
                    'You do not have 40-60 hours to spend learning and building',
                    'You need custom functionality, integrations, or ecommerce',
                    'SEO and search visibility are important to your growth',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm">
                      <span className="text-blue-400 mt-1 sm:mt-1.5 flex-shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10">
              <h3 className="text-white font-bold text-sm sm:text-base mb-2">The ROI perspective</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                A $10,000 website that generates 20 new leads per month at a $500 average customer value pays for itself in one month. A $30/month DIY site that generates 2 leads per month takes much longer to deliver the same return -- if it ever does. The question is not &ldquo;how much does it cost?&rdquo; but &ldquo;how much does it return?&rdquo;
              </p>
            </div>
          </motion.section>

          {/* Cost Breakdown by Type */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8">Website Cost Breakdown by Type</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-8 sm:mb-10 leading-relaxed">
              Let us look at each website type in detail so you know exactly what to expect.
            </p>

            {/* Brochure */}
            <div className="mb-8 sm:mb-12 p-5 sm:p-6 md:p-8 rounded-2xl border border-white/10 bg-[#181626]/30">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Brochure Website</h3>
                <span className="text-blue-300 font-bold text-base sm:text-lg">$2,000 - $5,000</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                A brochure site is your digital business card. It tells people who you are, what you do, and how to reach you.
              </p>
              <h4 className="text-white font-semibold text-sm sm:text-base mb-3">What is typically included:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                {[
                  '3-5 pages: Home, About, Services, Contact',
                  'Custom design based on your brand guidelines',
                  'Mobile-responsive layout for all devices',
                  'Basic SEO setup with title tags and meta descriptions',
                  'Contact form with email notifications',
                  'Google Analytics and Search Console integration',
                  'CMS access for basic text and image updates',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                <span>Timeline: <span className="text-gray-300">2-4 weeks</span></span>
                <span>Best for: <span className="text-gray-300">New businesses, professionals, referral-based businesses</span></span>
              </div>
            </div>

            {/* Small Business */}
            <div className="mb-8 sm:mb-12 p-5 sm:p-6 md:p-8 rounded-2xl border border-blue-500/20 bg-blue-500/5">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">Most Popular</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-4 mt-3">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Small Business Website</h3>
                <span className="text-blue-300 font-bold text-base sm:text-lg">$5,000 - $15,000</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                This is the sweet spot for most San Diego businesses. You get a site that looks professional, ranks in search, and actually generates leads.
              </p>
              <h4 className="text-white font-semibold text-sm sm:text-base mb-3">What is typically included:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                {[
                  '5-10 pages with dedicated service/product pages',
                  'Fully custom design tailored to your brand',
                  'Advanced SEO including keyword research and local SEO',
                  'Blog or content section for content marketing',
                  'Multiple lead capture points (forms, CTAs, live chat)',
                  'Integration with your tools (CRM, email, scheduling)',
                  'Performance optimization for fast load times',
                  'Training session on managing your site',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                <span>Timeline: <span className="text-gray-300">4-8 weeks</span></span>
                <span>Best for: <span className="text-gray-300">Restaurants, dental practices, law firms, HVAC, real estate, fitness studios</span></span>
              </div>
            </div>

            {/* Ecommerce */}
            <div className="mb-8 sm:mb-12 p-5 sm:p-6 md:p-8 rounded-2xl border border-white/10 bg-[#181626]/30">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Ecommerce Website</h3>
                <span className="text-blue-300 font-bold text-base sm:text-lg">$5,000 - $25,000</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                Selling products online requires a different level of infrastructure. Your site is not just a marketing tool -- it is your entire storefront.
              </p>
              <h4 className="text-white font-semibold text-sm sm:text-base mb-3">What is typically included:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                {[
                  'Product catalog with categories, filters, and search',
                  'Shopping cart and checkout with secure payments',
                  'Inventory management system',
                  'Shipping calculations and tax configuration',
                  'Customer accounts with order history',
                  'Email automation for abandoned carts and follow-ups',
                  'Mobile-optimized shopping experience',
                  'SSL certificate and PCI compliance',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                <span>Timeline: <span className="text-gray-300">6-12 weeks</span></span>
                <span>Best for: <span className="text-gray-300">Retailers, product businesses, subscription companies</span></span>
              </div>
            </div>

            {/* Custom Web App */}
            <div className="mb-8 sm:mb-12 p-5 sm:p-6 md:p-8 rounded-2xl border border-white/10 bg-[#181626]/30">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Custom Web Application</h3>
                <span className="text-blue-300 font-bold text-base sm:text-lg">$15,000 - $50,000+</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                This is where we move beyond &ldquo;website&rdquo; into &ldquo;software.&rdquo; If your project involves user dashboards, complex data processing, real-time features, or custom business logic, you are in web application territory.
              </p>
              <h4 className="text-white font-semibold text-sm sm:text-base mb-3">What is typically included:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                {[
                  'Custom architecture for your specific use case',
                  'User authentication and role-based access',
                  'Database design and management',
                  'API development and third-party integrations',
                  'Admin dashboard for managing data and users',
                  'Rigorous testing across devices and browsers',
                  'Security hardening and data protection',
                  'Deployment, DevOps setup, and documentation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                At Comcreate, we build custom web applications using Next.js deployed on Vercel. This stack delivers exceptional performance, built-in SEO advantages, and the scalability to grow with your business. Our{' '}
                <Link href="/projects" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors">portfolio of 21 completed projects</Link>{' '}
                includes several custom applications across different industries.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-4">
                <span>Timeline: <span className="text-gray-300">3-6 months</span></span>
                <span>Best for: <span className="text-gray-300">SaaS startups, proprietary tools, customer portals</span></span>
              </div>
            </div>
          </motion.section>

          {/* Ongoing Costs */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Ongoing Costs Most People Forget</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Your website&apos;s launch price is just the beginning. Here are the recurring costs every San Diego business owner should budget for.
            </p>

            <div className="space-y-4">
              {[
                { name: 'Domain Name', cost: '$10 - $20/year', desc: 'Your .com address. Premium domains (short, keyword-rich) can cost hundreds or thousands, but most businesses do fine with a standard registration.' },
                { name: 'Hosting', cost: '$10 - $50/month', desc: 'Where your website lives on the internet. Cheap shared hosting ($5-10/mo) works for small sites but slows down under traffic. Managed hosting provides better speed, security, and support.' },
                { name: 'SSL Certificate', cost: 'Included', desc: 'Most hosting providers and platforms include SSL (the padlock icon and "https") at no extra cost. If someone tries to charge you separately for this, ask questions.' },
                { name: 'Website Maintenance', cost: '$50 - $200/month', desc: 'Software updates, security patches, backups, uptime monitoring, and minor content changes. Skipping maintenance is like skipping oil changes.' },
                { name: 'Content & Blog Updates', cost: '$200 - $500/month', desc: 'Fresh content keeps your site relevant in search results. This covers 2-4 blog posts per month with basic SEO optimization.' },
                { name: 'SEO Services', cost: '$500 - $5,000/month', desc: 'For businesses that depend on search visibility, ongoing SEO is not optional. Local SEO for a single-location San Diego business might run $500-$1,500/month.' },
              ].map((item, i) => (
                <div key={i} className="p-4 sm:p-5 rounded-xl border border-white/10 bg-[#181626]/30">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                      <h3 className="text-white font-semibold text-sm sm:text-base">{item.name}</h3>
                      <span className="text-blue-300 text-xs sm:text-sm font-semibold">{item.cost}</span>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10">
              <p className="text-gray-300 text-xs sm:text-sm">
                <strong className="text-white">Total monthly ongoing cost for a typical small business:</strong>{' '}
                $100-$400 without SEO, $600-$2,000 with SEO services.
              </p>
            </div>
          </motion.section>

          {/* How to Get Best Value */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">How to Get the Best Value from a San Diego Agency</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              You do not have to be a web design expert to get a great result. You just have to be a prepared client.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {[
                { title: 'Define your goals before reaching out', desc: '"I need a website" is not a goal. "I need a website that generates 15 qualified leads per month for my plumbing business in North County" is a goal. The clearer you are, the more accurate your quote will be.' },
                { title: 'Prepare your content ahead of time', desc: 'Or at least have a plan. The single biggest cause of website project delays is waiting on content from the client. If you can provide your copy, photos, and brand assets upfront, you save time and money.' },
                { title: 'Ask what is included -- and what is not', desc: 'Does the quote include copywriting? SEO setup? Training? Post-launch support? How many revision rounds? These details matter more than the bottom-line number.' },
                { title: 'Check their portfolio', desc: 'Not just for pretty designs, but for results. Do their sites load fast? Are they mobile-friendly? Do they rank in search?' },
                { title: 'Ask about post-launch support', desc: 'What happens after your site goes live? Do they offer maintenance plans? How fast do they respond to issues? A great launch followed by radio silence is a common frustration.' },
                { title: 'Get 2-3 quotes, but do not just pick the cheapest', desc: 'The cheapest option almost always costs more in the long run -- through lost leads, redesign costs, or technical debt.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs sm:text-sm font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-sm sm:text-base mt-6 sm:mt-8 leading-relaxed">
              At Comcreate, we follow a transparent <strong className="text-white">4-step process</strong> -- Discovery, Design, Development, and Launch -- so you always know where your project stands and what comes next. No surprises, no scope creep, no mystery invoices.
            </p>
          </motion.section>

          {/* Why Local Matters */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">San Diego Web Design: What Makes Local Different?</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              You could hire an agency anywhere. So why work with a San Diego-based team?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                { title: 'Local market knowledge', desc: 'A San Diego agency understands that "Pacific Beach restaurant" and "La Jolla restaurant" target fundamentally different customers. We know the neighborhoods, the seasonal patterns, and the local search behavior.' },
                { title: 'Quality talent pool', desc: 'San Diego agencies charge more than shops in lower-cost markets, but that premium reflects access to experienced designers, developers, and strategists in one of the country\'s top tech hubs.' },
                { title: 'In-person meetings', desc: 'Not every project needs them, but the option to sit down, look at your site together, and hash out strategy face-to-face is something remote agencies cannot offer.' },
                { title: 'Local SEO expertise built in', desc: 'Ranking in San Diego\'s local search results requires understanding Google Business Profile optimization, local citations, and neighborhood-level targeting. A local agency does this instinctively.' },
              ].map((item, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-xl border border-white/10 bg-[#181626]/30 hover:border-white/20 transition-colors duration-300">
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-sm sm:text-base mt-4 sm:mt-6 leading-relaxed">
              Comcreate proudly serves 15+ industries across the San Diego area -- from hospitality and healthcare to tech startups and professional services.
            </p>
          </motion.section>

          {/* FAQ Section */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  faq={faq}
                  isOpen={openFAQ === i}
                  onToggle={() => setOpenFAQ(openFAQ === i ? null : i)}
                />
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <div className="p-6 sm:p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#003cc7]/20 to-[#700f59]/20 border border-white/10 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">Ready to Get a Transparent Quote?</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
                At Comcreate Digital, we build high-performance websites using modern technology (Next.js on Vercel) that load fast, rank well, and convert visitors into customers. We have completed 21 projects across 15+ industries, and every engagement follows our proven 4-step process.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+16199550105"
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-[#0a071a] font-semibold text-center text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Call (619) 955-0105
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-center text-sm sm:text-base hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Related Reading */}
          <motion.section variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Related Reading</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/webdesign', label: 'Our Web Design Services', desc: 'See our full approach to designing websites that convert' },
                { href: '/seo', label: 'SEO Services for San Diego Businesses', desc: 'How we help local businesses rank higher in search' },
                { href: '/ads', label: 'Google Ads Management', desc: 'Drive immediate traffic while your SEO builds momentum' },
                { href: '/projects', label: 'Our Portfolio', desc: 'Browse 21 completed projects across 15+ industries' },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="p-3 sm:p-4 rounded-xl border border-white/10 hover:border-white/20 bg-[#181626]/30 hover:bg-[#181626]/50 transition-all duration-300 group"
                >
                  <span className="text-white text-xs sm:text-sm font-semibold group-hover:text-blue-300 transition-colors">{link.label}</span>
                  <p className="text-gray-500 text-[10px] sm:text-xs mt-1">{link.desc}</p>
                </Link>
              ))}
            </div>
          </motion.section>

        </motion.div>
      </motion.article>
    </>
  )
}
