import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const faqs = [
  {
    question: 'How long does local SEO take to show results?',
    answer: 'Most San Diego businesses start seeing measurable improvements in 3-6 months with consistent effort. However, quick wins are possible in 4-6 weeks -- claiming and optimizing your Google Business Profile, fixing NAP inconsistencies, and getting listed in major directories can produce noticeable changes fast. The timeline depends on your starting point, competition level, and how aggressively you execute. A restaurant in a less competitive neighborhood will rank faster than a personal injury attorney in downtown San Diego.'
  },
  {
    question: 'How much does local SEO cost?',
    answer: 'Professional local SEO services in San Diego typically range from $500 to $2,500 per month depending on scope. At the lower end, you get basic GBP management, citation building, and review monitoring. Mid-range packages add content creation, link building, and technical SEO. Premium services include comprehensive strategies with dedicated account management, advanced analytics, and multi-location optimization. The ROI is significant -- businesses investing in local SEO consistently report 3-5x returns through increased leads and foot traffic.'
  },
  {
    question: 'Can I do local SEO myself?',
    answer: 'You can absolutely handle the basics yourself -- claiming your Google Business Profile, responding to reviews, maintaining consistent NAP information, and posting updates. These fundamentals go a long way. However, technical aspects like schema markup implementation, advanced citation building, competitive analysis, link building strategy, and ongoing algorithm adaptation benefit significantly from professional expertise. Many San Diego business owners start with DIY and bring in professionals once they hit a plateau or need to compete in tougher markets.'
  },
  {
    question: 'What is the single most important local SEO factor?',
    answer: 'If we had to pick one, it would be Google Business Profile optimization. Your GBP is the foundation of local search visibility and directly influences whether you appear in the Local Pack -- the map results that capture the majority of local clicks. But here is the truth: all components reinforce each other. A perfectly optimized GBP with zero reviews and no website will underperform a reasonably optimized GBP backed by strong reviews, solid on-page SEO, and consistent citations. Think of local SEO as an ecosystem, not a single lever.'
  },
  {
    question: 'Do I need a website for local SEO?',
    answer: 'Technically, no. You can appear in the Local Pack with just a Google Business Profile and no website. But having a website dramatically improves your chances. Google uses your website to validate your business information, understand your services, and determine relevance for search queries. Businesses with optimized websites consistently outrank those without in local results. Plus, a website gives you a destination to convert the traffic that local SEO generates -- without it, you are leaving money on the table.'
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
    headline: 'Local SEO for San Diego Businesses: The Complete Guide (2026)',
    description: 'Complete local SEO guide for San Diego businesses. Google Business Profile, local citations, on-page optimization, reviews & more. Actionable steps from Comcreate.',
    image: 'https://res.cloudinary.com/dku1gnuat/image/upload/v1774888179/Comcreate_Blog_3_Local_SEO_San_Diego_hlpxhf.webp',
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
      '@id': 'https://www.comcreate.org/blog/local-seo-san-diego-businesses-guide'
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
        <title>Local SEO for San Diego Businesses: The Complete Guide (2026) | Comcreate</title>
        <meta name="description" content="Complete local SEO guide for San Diego businesses. Google Business Profile, local citations, on-page optimization, reviews & more. Actionable steps from Comcreate." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.comcreate.org/blog/local-seo-san-diego-businesses-guide" />
        <meta property="og:title" content="Local SEO for San Diego Businesses: The Complete Guide (2026)" />
        <meta property="og:description" content="Complete local SEO guide for San Diego businesses. Google Business Profile, local citations, on-page optimization, reviews & more. Actionable steps from Comcreate." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.comcreate.org/blog/local-seo-san-diego-businesses-guide" />
        <meta property="og:image" content="https://res.cloudinary.com/dku1gnuat/image/upload/v1774888179/Comcreate_Blog_3_Local_SEO_San_Diego_hlpxhf.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Local SEO for San Diego Businesses: The Complete Guide (2026)" />
        <meta name="twitter:description" content="Complete local SEO guide for San Diego businesses. Google Business Profile, local citations, on-page optimization, reviews & more." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dku1gnuat/image/upload/v1774888179/Comcreate_Blog_3_Local_SEO_San_Diego_hlpxhf.webp" />
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
            <span className="text-gray-300">Local SEO San Diego</span>
          </div>
        </motion.nav>

        {/* Header */}
        <motion.header className="mb-8 sm:mb-12" variants={itemVariants}>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
              SEO
            </span>
            <span className="text-gray-500 text-xs sm:text-sm">March 28, 2026</span>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <span className="text-gray-500 text-xs sm:text-sm">18 min read</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
            Local SEO for San Diego Businesses:{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">The Complete Guide (2026)</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
            46% of all Google searches have local intent. If your business does not show up when San Diego customers search for what you offer, you are invisible. This is your playbook to fix that.
          </p>
        </motion.header>

        {/* Featured Image */}
        <motion.div className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-12 border border-white/10" variants={itemVariants}>
          <Image
            src="https://res.cloudinary.com/dku1gnuat/image/upload/v1774888179/Comcreate_Blog_3_Local_SEO_San_Diego_hlpxhf.webp"
            alt="Local SEO for San Diego Businesses Complete Guide"
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
              Every day, thousands of people in San Diego search for businesses like yours. &ldquo;Best tacos near me.&rdquo; &ldquo;Plumber in North Park.&rdquo; &ldquo;San Diego web design agency.&rdquo; The businesses that appear in those results get the calls, the foot traffic, and the revenue. Everyone else gets nothing.
            </p>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              Local SEO is not a nice-to-have anymore. It is the difference between thriving and struggling in a city of over 1.4 million people where competition is fierce across nearly every industry. The good news? Most of your competitors are doing local SEO poorly -- or not at all.
            </p>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              This guide covers everything you need to dominate local search in San Diego -- from Google Business Profile optimization to local link building, citation management, and content strategy. Whether you handle it yourself or{' '}
              <Link href="/seo" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors">work with our SEO team</Link>, you will walk away with a clear action plan. Let&apos;s get started.
            </p>
          </motion.div>

          {/* What Is Local SEO */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">What Is Local SEO (and Why It Matters in San Diego)</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
              Local SEO is the practice of optimizing your online presence to attract more business from relevant local searches. When someone searches &ldquo;coffee shop near me&rdquo; or &ldquo;dentist La Jolla,&rdquo; Google uses a different algorithm than it does for general searches. It factors in proximity, relevance, and prominence to decide which businesses appear in the coveted Local Pack -- the map-based results that sit at the top of the page.
            </p>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Unlike traditional SEO, which focuses on ranking your website in the organic blue links, local SEO is about showing up in that Local Pack, in Google Maps, and in other location-based search results. It is a distinct discipline with its own ranking factors, strategies, and tools.
            </p>

            {/* Stats Callout */}
            <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 mb-6 sm:mb-8">
              <h3 className="text-white font-bold text-sm sm:text-base mb-4">Why the Numbers Demand Your Attention</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">76%</p>
                  <p className="text-gray-400 text-xs sm:text-sm">of people who search for something local visit a business within 24 hours</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">28%</p>
                  <p className="text-gray-400 text-xs sm:text-sm">of local searches result in a purchase that same day</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">1.4M+</p>
                  <p className="text-gray-400 text-xs sm:text-sm">people in San Diego proper, with 3.3M+ in the metro area</p>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              San Diego is one of the most competitive local markets in the country. With a population exceeding 1.4 million and a diverse economy spanning tourism, tech, military, healthcare, and hospitality, the demand for local services is enormous -- and so is the competition. The businesses that invest in local SEO capture a disproportionate share of that demand.
            </p>
          </motion.section>

          {/* Google Business Profile */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Google Business Profile: Your Local SEO Foundation</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Your Google Business Profile (formerly Google My Business) is the single most important element of your local SEO strategy. It is the information that appears when someone searches for your business by name, and it powers your listing in Google Maps and the Local Pack. If you do nothing else on this list, optimize your GBP.
            </p>

            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">GBP Optimization Checklist</h3>
            <div className="space-y-3 mb-6 sm:mb-8">
              {[
                { title: 'Claim and verify your profile', desc: 'If you have not claimed your GBP, do it today. Verification typically takes a few days via postcard, phone, or email. Until you are verified, you cannot manage your listing or respond to reviews.' },
                { title: 'Complete every single field', desc: 'Business name, address, phone number, website, hours (including holiday hours), attributes, accessibility info -- fill in everything. Google rewards completeness. Profiles that are 100% complete are 70% more likely to attract location visits.' },
                { title: 'Choose the right primary and secondary categories', desc: 'Your primary category is the most important. Pick the one that most accurately describes your core business. Then add secondary categories for additional services. A San Diego dentist might use "Dentist" as primary and "Cosmetic Dentist" and "Pediatric Dentist" as secondaries.' },
                { title: 'Upload 20+ high-quality photos', desc: 'Businesses with photos receive 42% more direction requests and 35% more click-throughs to their website. Include exterior shots, interior shots, team photos, product photos, and action shots of your services. Update photos monthly.' },
                { title: 'Write a compelling business description', desc: 'You get 750 characters. Use them strategically. Include your primary services, what makes you different, and natural mentions of San Diego or your specific neighborhoods. Do not keyword-stuff -- write for humans.' },
                { title: 'Post updates regularly', desc: 'GBP posts are like mini social media updates that appear on your profile. Share offers, events, news, and tips at least weekly. Posts expire after seven days, so consistency matters.' },
                { title: 'Add all products and services', desc: 'List every product or service you offer with descriptions and pricing where appropriate. This gives Google more data to match you with relevant searches.' },
                { title: 'Monitor and answer Q&A', desc: 'Anyone can ask (and answer) questions on your GBP. Monitor this section and provide helpful answers. You can also proactively add frequently asked questions yourself.' },
                { title: 'Enable messaging', desc: 'Let customers message you directly through your GBP listing. Respond promptly -- Google tracks response times and rewards fast responders with a badge.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-3 sm:p-4 rounded-xl bg-[#181626]/30 border border-white/5">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white font-semibold text-xs sm:text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Common Mistakes Callout */}
            <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10">
              <h3 className="text-white font-bold text-sm sm:text-base mb-3">Common GBP Mistakes to Avoid</h3>
              <ul className="space-y-2">
                {[
                  'Using a P.O. box or virtual office address (Google may suspend your listing)',
                  'Keyword-stuffing your business name (this violates Google\'s guidelines)',
                  'Ignoring negative reviews or responding defensively',
                  'Letting your hours become outdated, especially around holidays',
                  'Having different information on your GBP than on your website',
                ].map((mistake, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm">
                    <span className="text-red-400 flex-shrink-0 mt-0.5">&times;</span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* On-Page SEO for Local */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">On-Page SEO for Local Search</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Your website is the second pillar of local SEO. While your GBP handles map results, your website helps you rank in both local and organic results. On-page optimization tells Google exactly what you do, where you do it, and why you are the best choice.
            </p>

            <div className="space-y-5 sm:space-y-8">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Title Tags and Meta Descriptions with Location</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Every page on your site should have a unique title tag that includes your target keyword and location. Instead of &ldquo;Our Services,&rdquo; use &ldquo;Plumbing Services in San Diego | Company Name.&rdquo; For businesses serving multiple neighborhoods, create specific pages: &ldquo;Emergency Plumber in Hillcrest&rdquo; and &ldquo;Drain Cleaning La Jolla.&rdquo; Your meta descriptions should reinforce the local angle and include a clear call to action.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Local Landing Pages for Service Areas</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  If you serve multiple neighborhoods or cities within the San Diego metro, create dedicated landing pages for each area. A page targeting &ldquo;HVAC Repair in Chula Vista&rdquo; should include content specific to that area -- local landmarks, community references, and service details relevant to that neighborhood. Avoid duplicating the same page with just the city name swapped out. Google sees through that.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">NAP Consistency</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Your Name, Address, and Phone number (NAP) must be identical everywhere -- on your website, your GBP, your social profiles, and every directory listing. Even small differences (&ldquo;Suite 100&rdquo; vs &ldquo;Ste. 100&rdquo; or &ldquo;St.&rdquo; vs &ldquo;Street&rdquo;) can confuse Google and dilute your ranking power. Pick one format and stick to it everywhere.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Local Schema Markup (JSON-LD)</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                  Schema markup is structured data that helps Google understand your business information. Adding LocalBusiness schema to your website provides explicit signals about your business type, location, hours, and services. Here is an example of what local business schema looks like:
                </p>
                <div className="bg-[#0d0b1a] rounded-xl p-4 sm:p-6 border border-white/10 overflow-x-auto">
                  <pre className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    <code>{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Your Business Name",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "San Diego",
    "addressRegion": "CA",
    "postalCode": "92101"
  },
  "telephone": "+1-619-555-0100",
  "url": "https://www.yourbusiness.com",
  "openingHours": "Mo-Fr 09:00-17:00",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "32.7157",
    "longitude": "-117.1611"
  },
  "areaServed": {
    "@type": "City",
    "name": "San Diego"
  }
}`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Local Content Strategy</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Create content that is genuinely relevant to San Diego. Blog about local topics, reference local events, and create neighborhood-specific guides. This signals to Google that you are a real, active local business -- not a generic national site with a San Diego page tacked on.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Service Area Pages</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Build individual pages for each major area you serve. For San Diego, this might include pages for Downtown, La Jolla, Pacific Beach, Hillcrest, North Park, Chula Vista, Carlsbad, Encinitas, and other neighborhoods or cities. Each page should have unique content, local testimonials, and area-specific information.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Embed Google Maps</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Embedding a Google Map on your contact page or footer reinforces your location to both users and search engines. Use the Google Maps Embed API to add an interactive map showing your business location. This is a simple signal, but it contributes to the overall picture of local relevance.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Local Citations & Directories */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Local Citations and Directory Listings</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
              A citation is any online mention of your business name, address, and phone number. Citations come in two forms: <strong className="text-white">structured citations</strong> (directory listings on sites like Yelp or Yellow Pages where your information is entered into specific fields) and <strong className="text-white">unstructured citations</strong> (mentions in blog posts, news articles, or social media where your NAP appears in text).
            </p>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Both types matter. Citations help Google verify that your business is real and that the information across the web is consistent. The more consistent, high-quality citations you have, the more confidence Google has in your listing.
            </p>

            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">Top Directories Every San Diego Business Needs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
                { name: 'Google Business Profile', desc: 'The most important listing, period' },
                { name: 'Apple Maps (Apple Business Connect)', desc: 'Critical for iPhone users' },
                { name: 'Bing Places', desc: 'Powers search on Bing, Yahoo, and Alexa' },
                { name: 'Yelp', desc: 'High domain authority, major review platform' },
                { name: 'Facebook Business Page', desc: 'Social signals plus citation value' },
                { name: 'Better Business Bureau (BBB)', desc: 'Trust signal and citation' },
                { name: 'Yellow Pages (YP.com)', desc: 'Still relevant for citation consistency' },
                { name: 'Foursquare', desc: 'Powers location data for many apps' },
                { name: 'Nextdoor', desc: 'Hyper-local neighborhood recommendations' },
                { name: 'Industry-Specific Directories', desc: 'Avvo for lawyers, Healthgrades for doctors, Houzz for contractors' },
              ].map((dir, i) => (
                <div key={i} className="p-3 sm:p-4 rounded-xl border border-white/10 bg-[#181626]/30 hover:border-white/20 transition-colors duration-300">
                  <h4 className="text-white font-semibold text-xs sm:text-sm">{dir.name}</h4>
                  <p className="text-gray-500 text-xs mt-1">{dir.desc}</p>
                </div>
              ))}
            </div>

            {/* NAP Consistency Callout */}
            <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 mb-6 sm:mb-8">
              <h3 className="text-white font-bold text-sm sm:text-base mb-2">NAP Consistency Is Non-Negotiable</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Inconsistent NAP information across directories is one of the most common local SEO problems. If your phone number on Yelp is different from your GBP, or your address format varies across directories, you are actively hurting your rankings. Audit all your citations quarterly and fix any discrepancies immediately.
              </p>
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">San Diego-Specific Directories</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
              Beyond the national directories, San Diego businesses should be listed in local-specific platforms that carry extra weight for local search:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { name: 'San Diego Regional Chamber of Commerce', desc: 'Membership includes a directory listing with a high-authority backlink' },
                { name: 'San Diego Business Journal', desc: 'Local publication directory and business listings' },
                { name: 'Neighborhood Associations', desc: 'Hillcrest, North Park, Gaslamp -- many have online directories' },
                { name: 'San Diego Tourism Authority', desc: 'Essential for hospitality and tourism businesses' },
                { name: 'SD Voyager', desc: 'Local publication that features San Diego businesses and entrepreneurs' },
              ].map((dir, i) => (
                <div key={i} className="p-3 sm:p-4 rounded-xl border border-white/10 bg-[#181626]/30 hover:border-white/20 transition-colors duration-300">
                  <h4 className="text-white font-semibold text-xs sm:text-sm">{dir.name}</h4>
                  <p className="text-gray-500 text-xs mt-1">{dir.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Online Reviews */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Online Reviews: Your Reputation as a Ranking Factor</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Reviews are one of the top three local ranking factors, and they are the one element that directly influences customer decisions. A business with 50 reviews averaging 4.7 stars will consistently outperform a competitor with five reviews at 5.0 stars. Volume, recency, and quality all matter.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {[
                { title: 'Ask for reviews ethically and consistently', desc: 'Send a follow-up email or text after every job with a direct link to your Google review page. Make it easy. Time it right -- ask when the customer is happiest, typically right after successful service delivery. Never offer incentives for reviews; it violates Google\'s policies and can get your listing penalized.' },
                { title: 'Target 20+ reviews as your baseline', desc: 'Businesses with fewer than 20 Google reviews struggle to compete in the Local Pack. Once you hit 20, aim for a steady stream of new reviews -- Google values recency. A business that got 50 reviews two years ago and none since is less impressive than one with 30 reviews, half of them from the last six months.' },
                { title: 'Respond to every review', desc: 'Every single one -- positive and negative. Thank positive reviewers specifically (mention what they praised). For negative reviews, respond professionally, acknowledge the concern, and offer to resolve it offline. Your responses are public and shape how potential customers perceive you.' },
                { title: 'Handle negative reviews strategically', desc: 'Do not ignore them, do not get defensive, and never argue publicly. Respond within 24 hours, apologize for the experience (not the facts, the experience), and invite the customer to contact you directly. Many negative reviewers will update their review after a positive resolution.' },
                { title: 'Diversify review platforms', desc: 'While Google reviews are the most impactful for local SEO, reviews on Yelp, Facebook, and industry-specific platforms also influence rankings and consumer decisions. Do not put all your eggs in one basket.' },
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
          </motion.section>

          {/* Local Link Building */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Local Link Building Strategies</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Backlinks remain a powerful ranking factor, and local links from San Diego-based websites carry extra weight for local search. The goal is not to accumulate hundreds of random links -- it is to earn relevant, authoritative links from sources connected to the San Diego community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                { title: 'Sponsor local events and organizations', desc: 'San Diego has no shortage of community events, charity runs, festivals, and sports leagues. Sponsorships typically include a link from the event website, which is both a citation and a quality local backlink. Look into events like the San Diego Bay Wine + Food Festival, Rock \'n\' Roll Marathon, or neighborhood block parties.' },
                { title: 'Join the San Diego Chamber of Commerce', desc: 'Chamber membership includes a directory listing on their high-authority website. This is one of the most valuable local links you can get. The San Diego Regional Chamber website has strong domain authority and passes significant link equity.' },
                { title: 'Partner with complementary local businesses', desc: 'Cross-promote with non-competing businesses that serve the same audience. A wedding photographer and a florist, a dentist and an orthodontist, a gym and a nutritionist. Link to each other\'s websites, create joint content, and refer customers.' },
                { title: 'Guest post on local publications', desc: 'San Diego has numerous local blogs, news sites, and online magazines that accept guest contributions. SD Voyager, San Diego Magazine, La Jolla Mom, and various neighborhood blogs are all potential opportunities. Provide genuinely valuable content and earn a link back to your site.' },
                { title: 'Host workshops or community events', desc: 'Hosting a free workshop, seminar, or networking event generates press mentions, social media buzz, and natural backlinks from event listing sites. This positions you as a community leader while building your link profile.' },
                { title: 'Leverage SD-specific opportunities', desc: 'San Diego has unique link building opportunities: the SDSU and UCSD campus communities, military base connections, Balboa Park affiliations, and the extensive craft brewery network. Think about what makes San Diego unique and how your business connects to those communities.' },
              ].map((item, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-xl border border-white/10 bg-[#181626]/30 hover:border-white/20 transition-colors duration-300">
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Local Content Strategy */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Local Content Strategy</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Content is the fuel that powers every other aspect of your local SEO. The businesses that consistently publish relevant, San Diego-focused content build topical authority that compounds over time. Here is how to approach it:
            </p>

            <div className="space-y-4 sm:space-y-6">
              {[
                { title: 'Blog about San Diego-specific topics', desc: 'Write about subjects that are genuinely relevant to the local community. A roofing company could write about "Best Roofing Materials for San Diego\'s Climate." A restaurant could cover "The History of Fish Tacos in San Diego." A real estate agent could publish "Best Neighborhoods for Young Families in San Diego 2026." This content attracts local traffic and signals relevance to Google.' },
                { title: 'Create neighborhood guides', desc: 'Detailed guides to San Diego neighborhoods are valuable content pieces that attract local links and traffic. Cover restaurants, activities, demographics, real estate trends, and what makes each neighborhood unique. These pages often rank well for "[neighborhood] guide" and related long-tail keywords.' },
                { title: 'Cover local events', desc: 'Write preview and recap posts for major San Diego events relevant to your industry. This creates timely, shareable content and can attract links from event organizers and attendees. Think Comic-Con, the Del Mar Fair, Fleet Week, or neighborhood street fairs.' },
                { title: 'Publish case studies with local clients', desc: 'With permission, create detailed case studies showing results you have achieved for San Diego clients. This serves double duty -- it demonstrates expertise and creates locally relevant content that Google loves. Include the client\'s neighborhood, the specific challenge, and measurable outcomes.' },
                { title: 'Use local keywords naturally', desc: 'Integrate San Diego neighborhoods, landmarks, and local terminology naturally into your content. Mention Balboa Park, the Gaslamp Quarter, Mission Bay, and other well-known locations where relevant. Do not force it -- Google\'s algorithm is sophisticated enough to detect keyword stuffing.' },
                { title: 'Maintain a consistent publishing schedule', desc: 'Aim for at least two to four blog posts per month. Consistency matters more than volume. A business that publishes one quality post per week will outperform one that publishes ten posts in January and nothing for the rest of the year.' },
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
          </motion.section>

          {/* Tracking Performance */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Tracking Your Local SEO Performance</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              You cannot improve what you do not measure. Local SEO requires consistent monitoring to understand what is working, what is not, and where to focus your efforts next. Here are the key tools and metrics to track:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { name: 'Google Search Console', desc: 'Track which queries bring up your site, your click-through rates, and your average position for local keywords. Filter by location to see San Diego-specific performance.' },
                { name: 'Google Business Profile Insights', desc: 'See how customers find your listing (direct vs discovery searches), what actions they take (calls, direction requests, website visits), and how your photos perform compared to competitors.' },
                { name: 'Local Rank Tracking Tools', desc: 'Tools like BrightLocal, Whitespark, or Local Falcon show your exact position in the Local Pack and Maps for specific keywords at specific locations within San Diego.' },
                { name: 'Phone Calls and Direction Requests', desc: 'Track calls from your GBP listing using call tracking numbers. Monitor direction requests as a proxy for foot traffic. These are your bottom-line metrics for local SEO success.' },
                { name: 'Review Monitoring', desc: 'Use tools like ReviewTrackers or simply set up Google Alerts for your business name. Monitor review velocity, average rating, and sentiment trends across all platforms.' },
              ].map((tool, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-xl border border-white/10 bg-[#181626]/30 hover:border-white/20 transition-colors duration-300">
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-2">{tool.name}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{tool.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 mt-6 sm:mt-8">
              <h3 className="text-white font-bold text-sm sm:text-base mb-2">Pro Tip: Set Up a Monthly Review</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Block 30 minutes on the first Monday of every month to review your local SEO metrics. Compare month-over-month trends for Local Pack rankings, GBP actions, and organic traffic from local keywords. This simple habit prevents you from flying blind and ensures you catch problems early.
              </p>
            </div>
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">Take the Next Step</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
                Local SEO is not a one-time project -- it is an ongoing strategy that compounds over time. Whether you are starting from scratch or looking to improve your existing local presence, Comcreate Digital can help. We build high-performance websites and execute data-driven SEO strategies that put San Diego businesses in front of the customers who are actively searching for them.
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
                  Get a Free Local SEO Audit
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Related Reading */}
          <motion.section variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Related Reading</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/seo', label: 'SEO Services for San Diego Businesses', desc: 'How we help local businesses rank higher in search' },
                { href: '/webdesign', label: 'Our Web Design Services', desc: 'High-performance websites built for conversions' },
                { href: '/ads', label: 'Google Ads Management', desc: 'Drive immediate traffic while your SEO builds momentum' },
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
