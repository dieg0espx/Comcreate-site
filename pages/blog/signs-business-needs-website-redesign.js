import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const faqs = [
  {
    question: 'How often should a business redesign its website?',
    answer: 'Most businesses should plan a significant redesign every 3-5 years. However, that timeline is a guideline, not a rule. The real triggers are performance data -- declining traffic, falling conversion rates, poor mobile experience, or a brand that has evolved past what the site reflects. Monitor your analytics quarterly and let the numbers tell you when it is time, rather than waiting for an arbitrary anniversary.'
  },
  {
    question: 'How long does a website redesign take?',
    answer: 'A typical redesign takes 6-12 weeks from kickoff to launch. Simple refreshes can be done in 2-4 weeks. The biggest variable is almost always content -- how quickly you can provide copy, images, brand assets, and feedback. Projects where the client has content ready on day one consistently finish faster and smoother. At Comcreate, we build a detailed timeline during our discovery phase so you know exactly what to expect.'
  },
  {
    question: 'Will a redesign hurt my SEO rankings?',
    answer: 'Only if it is done carelessly. A well-executed redesign should improve your SEO, not damage it. The key is proper planning: maintain your URL structure where possible, set up 301 redirects for any URLs that change, preserve your existing metadata, and ensure your new site meets Core Web Vitals standards. At Comcreate, SEO preservation is built into every redesign project -- we audit your existing rankings and traffic patterns before touching a single line of code.'
  },
  {
    question: 'Can I redesign my website using a DIY builder like Wix or Squarespace?',
    answer: 'You can, and for very small businesses with simple needs, it might be a reasonable starting point. But DIY builders come with real limitations: slower load times, limited SEO control, cookie-cutter designs that look like every other site on the platform, and difficulty scaling as your business grows. For businesses that depend on their website for leads and revenue, the constraints of a DIY builder often cost more in lost opportunity than a professional redesign would have cost upfront.'
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
    headline: '5 Signs Your Business Needs a Website Redesign (And What to Do Next)',
    description: 'Is your website hurting your business? 5 warning signs you need a redesign — plus a free audit checklist. Expert guide from a San Diego web design agency.',
    image: 'https://res.cloudinary.com/dku1gnuat/image/upload/v1774888144/Comcreate_Blog_2_Website_Redesign_Signs_dcybm3.webp',
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
      '@id': 'https://www.comcreate.org/blog/signs-business-needs-website-redesign'
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
        <title>5 Signs Your Business Needs a Website Redesign (2026) | Comcreate</title>
        <meta name="description" content="Is your website hurting your business? 5 warning signs you need a redesign — plus a free audit checklist. Expert guide from a San Diego web design agency." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.comcreate.org/blog/signs-business-needs-website-redesign" />
        <meta property="og:title" content="5 Signs Your Business Needs a Website Redesign (2026)" />
        <meta property="og:description" content="Is your website hurting your business? 5 warning signs you need a redesign — plus a free audit checklist. Expert guide from a San Diego web design agency." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.comcreate.org/blog/signs-business-needs-website-redesign" />
        <meta property="og:image" content="https://res.cloudinary.com/dku1gnuat/image/upload/v1774888144/Comcreate_Blog_2_Website_Redesign_Signs_dcybm3.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="5 Signs Your Business Needs a Website Redesign (2026)" />
        <meta name="twitter:description" content="Is your website hurting your business? 5 warning signs you need a redesign — plus a free audit checklist." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dku1gnuat/image/upload/v1774888144/Comcreate_Blog_2_Website_Redesign_Signs_dcybm3.webp" />
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
            <span className="text-gray-300">Website Redesign Signs</span>
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
            <span className="text-gray-500 text-xs sm:text-sm">10 min read</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
            5 Signs Your Business Needs a Website Redesign{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">(And What to Do Next)</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
            Your website is your hardest-working employee -- or at least it should be. If it is not pulling its weight, these five warning signs will tell you why.
          </p>
        </motion.header>

        {/* Featured Image */}
        <motion.div className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-12 border border-white/10" variants={itemVariants}>
          <Image
            src="https://res.cloudinary.com/dku1gnuat/image/upload/v1774888144/Comcreate_Blog_2_Website_Redesign_Signs_dcybm3.webp"
            alt="5 Signs Your Business Needs a Website Redesign"
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
              Your website is your digital storefront. For many customers, it is the first interaction they will ever have with your business -- and first impressions are ruthless. Stanford research shows that <strong className="text-white">75% of users judge a company&apos;s credibility based on its website design alone</strong>. Not your product. Not your reviews. Your website.
            </p>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              The problem is that most business owners do not realize their website is underperforming until the damage is already done -- lost leads, lost revenue, lost trust. By the time you notice the phone has stopped ringing, your competitors have already picked up those customers.
            </p>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              This guide walks through the five most common warning signs that your website needs a redesign, what to do about each one, and how to decide whether you need a full redesign or just a refresh. If you want a professional assessment right now,{' '}
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors">reach out for a free website audit</Link>{' '}
              or call us at{' '}
              <a href="tel:+16199550105" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">(619) 955-0105</a>.
            </p>
          </motion.div>

          {/* Sign #1 */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm sm:text-base font-bold">1</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Your Website Is Not Mobile-Responsive</h2>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
              This is the most critical sign on the list, and it is surprisingly common. If your website does not look and function perfectly on a smartphone, you are actively losing customers every single day.
            </p>
            <div className="space-y-2 mb-4 sm:mb-6">
              {[
                'Over 60% of all web traffic now comes from mobile devices -- in some industries, it is closer to 80%',
                'Google uses mobile-first indexing, meaning the mobile version of your site is what determines your search ranking',
                'Mobile users are impatient: 53% will leave a page that takes longer than 3 seconds to load on their phone',
                'A non-responsive site signals to visitors that your business is outdated or does not care about their experience',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 sm:gap-3">
                  <span className="text-blue-400 mt-1 flex-shrink-0 text-xs sm:text-sm">&#9679;</span>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Pull out your phone right now and load your website. Pinch, scroll, try to tap a button. If anything feels clunky, overlapping, or hard to read -- your customers feel the same way. And they are leaving.
            </p>
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 mt-4 sm:mt-6">
              <h4 className="text-white font-semibold text-sm sm:text-base mb-2">What to do about it</h4>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Test your site with Google&apos;s Mobile-Friendly Test tool. If it fails, a responsive redesign is not optional -- it is urgent. Modern websites should be built mobile-first, meaning the mobile experience is designed before the desktop version. At Comcreate, every site we build starts with mobile and scales up.
              </p>
            </div>
          </motion.section>

          {/* Sign #2 */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm sm:text-base font-bold">2</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Your Website Loads Too Slowly</h2>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
              Speed is not a nice-to-have. It is a ranking factor, a conversion factor, and a trust factor. <strong className="text-white">53% of mobile visitors abandon a site that takes longer than 3 seconds to load.</strong> Every additional second of load time reduces conversions by an average of 7%.
            </p>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
              Google measures site performance through <strong className="text-white">Core Web Vitals</strong> -- three metrics that directly impact your search ranking:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
              {[
                { metric: 'LCP', name: 'Largest Contentful Paint', target: 'Under 2.5s', desc: 'How fast the main content loads' },
                { metric: 'INP', name: 'Interaction to Next Paint', target: 'Under 200ms', desc: 'How fast the site responds to user input' },
                { metric: 'CLS', name: 'Cumulative Layout Shift', target: 'Under 0.1', desc: 'How much the page shifts while loading' },
              ].map((item, i) => (
                <div key={i} className="p-4 sm:p-5 rounded-xl border border-white/10 bg-[#181626]/30 text-center">
                  <span className="text-blue-400 font-bold text-base sm:text-lg block mb-1">{item.metric}</span>
                  <span className="text-white text-xs sm:text-sm font-semibold block mb-1">{item.name}</span>
                  <span className="text-green-400 text-xs font-semibold block mb-2">Target: {item.target}</span>
                  <p className="text-gray-500 text-[10px] sm:text-xs">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
              Common culprits behind slow websites:
            </p>
            <div className="space-y-2 mb-4 sm:mb-6">
              {[
                'Unoptimized images (the number one offender for most small business sites)',
                'Cheap shared hosting that cannot handle your traffic',
                'Bloated code from outdated plugins, themes, or page builders',
                'No caching or CDN (content delivery network) configured',
                'Too many third-party scripts (chat widgets, analytics, social embeds)',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 sm:gap-3">
                  <span className="text-blue-400 mt-1 flex-shrink-0 text-xs sm:text-sm">&#9679;</span>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#181626]/40 border border-white/10 mb-4 sm:mb-6">
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                <strong className="text-white">A note on transparency:</strong> We practice what we preach, but we are not perfect. Comcreate&apos;s own site currently has a higher-than-ideal Total Blocking Time (TBT) due to the animations and interactive elements we use. We are actively working to improve it. The point is not perfection -- it is awareness and continuous improvement. Any agency that tells you their site scores 100 across the board is either lying or running a site with zero interactivity.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 mt-4 sm:mt-6">
              <h4 className="text-white font-semibold text-sm sm:text-base mb-2">What to do about it</h4>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Run your site through Google PageSpeed Insights (free) and note your Core Web Vitals scores. If you are in the red on any metric, that is a problem. Some speed issues can be fixed without a full redesign -- image compression, better hosting, caching. But if your site is built on bloated technology, a rebuild on a modern framework like Next.js will deliver dramatically better performance.
              </p>
            </div>
          </motion.section>

          {/* Sign #3 */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm sm:text-base font-bold">3</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Your Website Does Not Generate Leads</h2>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
              This is the sign that hurts the most because it directly impacts your revenue. You might be getting traffic -- maybe even good traffic -- but if visitors are not converting into leads or customers, your website has a design problem.
            </p>

            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">Warning signs your site is not converting:</h3>
            <div className="space-y-2 mb-4 sm:mb-6">
              {[
                'Contact form submissions have dried up or never really started',
                'The phone is not ringing from website visitors',
                'You have decent traffic in Google Analytics but almost no conversions',
                'Bounce rate is above 60-70% across key pages',
                'Visitors spend less than 30 seconds on your site',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 sm:gap-3">
                  <span className="text-red-400 mt-1 flex-shrink-0 text-xs sm:text-sm">&#10005;</span>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">Common design problems that kill conversions:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 sm:mb-6">
              {[
                { problem: 'Unclear CTAs', desc: 'Visitors do not know what action to take next' },
                { problem: 'Nothing above the fold', desc: 'No compelling headline, value prop, or call-to-action visible without scrolling' },
                { problem: 'Confusing navigation', desc: 'Users cannot find what they are looking for within seconds' },
                { problem: 'No trust signals', desc: 'Missing testimonials, reviews, case studies, or credentials' },
              ].map((item, i) => (
                <div key={i} className="p-3 sm:p-4 rounded-xl border border-white/10 bg-[#181626]/30">
                  <span className="text-white font-semibold text-xs sm:text-sm block mb-1">{item.problem}</span>
                  <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 mt-4 sm:mt-6">
              <h4 className="text-white font-semibold text-sm sm:text-base mb-2">What to do about it</h4>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Start by installing a heatmap tool like Hotjar or Microsoft Clarity (both have free tiers) to see exactly where visitors click, scroll, and drop off. Then audit your key pages: does every page have a clear, visible call-to-action? Is your value proposition obvious within 5 seconds? Are you giving visitors a reason to trust you? A conversion-focused redesign can transform the same traffic into 2-3x more leads.
              </p>
            </div>
          </motion.section>

          {/* Sign #4 */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm sm:text-base font-bold">4</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Your Branding Has Changed But Your Website Has Not</h2>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
              Businesses evolve. You have refined your services, updated your logo, shifted your target audience, or repositioned your brand. But if your website still reflects who you were two or three years ago, you have a consistency problem -- and inconsistency erodes trust.
            </p>
            <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
              Think about it from a customer&apos;s perspective. They see your polished Instagram feed, your updated business cards, your modern-looking storefront. Then they visit your website and it looks like it was designed during a different era of your business. That disconnect creates doubt. And doubt is the enemy of conversion.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              This also applies if your business has expanded its services, entered new markets, or changed its pricing model. Your website should reflect your business as it is today -- not as it was when you first launched.
            </p>
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 mt-4 sm:mt-6">
              <h4 className="text-white font-semibold text-sm sm:text-base mb-2">What to do about it</h4>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Do a brand audit. Compare your website to your social media, printed materials, and in-person presence. If there are visible inconsistencies in colors, typography, tone of voice, or messaging -- it is time to bring your website in line with your current brand. This might be a refresh rather than a full redesign, depending on how far apart things have drifted.
              </p>
            </div>
          </motion.section>

          {/* Sign #5 */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm sm:text-base font-bold">5</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Your Competitors&apos; Websites Look Better Than Yours</h2>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
              This one stings, but it matters. When a potential customer is comparing your business to a competitor, their websites are part of that evaluation -- often the first part. A more polished, professional, modern-looking site signals competence and trustworthiness.
            </p>

            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">Ask yourself honestly:</h3>
            <div className="space-y-2 mb-4 sm:mb-6">
              {[
                'If I were a customer comparing my site to my top 3 competitors, would I choose mine?',
                'Do my competitors have a cleaner, more modern design?',
                'Do their sites load faster?',
                'Is their messaging clearer and more compelling?',
                'Do they have better reviews, case studies, or portfolio sections?',
                'Are they ranking above me in Google search results?',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 sm:gap-3">
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">&#10003;</span>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              If the answer to more than one of those questions does not go in your favor, your website is costing you business. You do not need the flashiest site in your industry -- you need one that is at least as good as your best competitor&apos;s, and ideally better.
            </p>
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 mt-4 sm:mt-6">
              <h4 className="text-white font-semibold text-sm sm:text-base mb-2">What to do about it</h4>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Do a competitive analysis. Visit your top 5 competitors&apos; websites and score them honestly against yours on design, speed, content quality, and user experience. Screenshot the things they do better and use that as a brief for your redesign. At Comcreate, competitive analysis is part of our discovery phase -- we want to make sure your new site does not just match the competition but leapfrogs them.
              </p>
            </div>
          </motion.section>

          {/* Redesign vs Refresh */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Redesign vs. Refresh: Which Do You Actually Need?</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Not every website problem requires starting from scratch. Sometimes a strategic refresh is all you need. Here is how to tell the difference.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 bg-[#181626]/30">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 inline-block mb-4">Refresh</span>
                <h3 className="text-white font-bold text-base sm:text-lg mb-3">Website Refresh</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-gray-500 mb-4">
                  <span>Cost: <span className="text-blue-300 font-semibold">$1,000 - $3,000</span></span>
                  <span>Timeline: <span className="text-gray-300">2-4 weeks</span></span>
                </div>
                <div className="space-y-2">
                  {[
                    'Updated colors, fonts, and imagery',
                    'New content on existing pages',
                    'Improved calls-to-action',
                    'Speed optimizations',
                    'Mobile responsiveness fixes',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5 flex-shrink-0 text-xs">&#10003;</span>
                      <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-[10px] sm:text-xs mt-4 leading-relaxed">
                  Best when your site structure is solid but the visual design feels dated or your content needs updating.
                </p>
              </div>

              <div className="p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 bg-[#181626]/30">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 inline-block mb-4">Redesign</span>
                <h3 className="text-white font-bold text-base sm:text-lg mb-3">Full Redesign</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-gray-500 mb-4">
                  <span>Cost: <span className="text-blue-300 font-semibold">$5,000 - $25,000</span></span>
                  <span>Timeline: <span className="text-gray-300">6-12 weeks</span></span>
                </div>
                <div className="space-y-2">
                  {[
                    'Completely new design and layout',
                    'New site architecture and navigation',
                    'Platform or technology migration',
                    'New functionality and features',
                    'Full SEO overhaul',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5 flex-shrink-0 text-xs">&#10003;</span>
                      <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-[10px] sm:text-xs mt-4 leading-relaxed">
                  Best when your site has fundamental structural, performance, or technology problems that cannot be patched.
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm sm:text-base mt-4 sm:mt-6 leading-relaxed">
              Not sure which you need? Our{' '}
              <Link href="/blog/how-much-does-website-cost-san-diego" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors">detailed pricing guide</Link>{' '}
              breaks down costs for every type of web project in San Diego.
            </p>
          </motion.section>

          {/* Free Website Audit Checklist */}
          <motion.section className="mb-10 sm:mb-16" variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Free Website Audit Checklist</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Before you invest in a redesign, run through this quick self-audit. It takes less than 20 minutes and will give you a clear picture of where your site stands.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {[
                { title: 'Run a mobile test', desc: 'Open your site on your phone. Check every page. Can you read the text without zooming? Do buttons work? Does the navigation make sense? Then run it through Google\'s Mobile-Friendly Test for a technical assessment.' },
                { title: 'Test your speed', desc: 'Go to Google PageSpeed Insights and enter your URL. Check both mobile and desktop scores. Note your Core Web Vitals -- green is good, yellow needs work, red is a problem. Screenshot the results for reference.' },
                { title: 'Review your analytics', desc: 'Open Google Analytics (or whatever you use) and look at bounce rate, average session duration, and conversion rate over the past 90 days. Compare to the previous 90 days. Declining numbers are a clear signal.' },
                { title: 'Do a competitor comparison', desc: 'Visit your top 3 competitors\' websites. Compare design quality, load speed, content depth, and mobile experience. Be honest about where they outperform you. Take screenshots of features you wish your site had.' },
                { title: 'Check your brand consistency', desc: 'Put your website side by side with your social media profiles, business cards, and any other marketing materials. Do the colors match? Is the messaging consistent? Does your website reflect your business as it exists today?' },
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
              If you scored poorly on two or more of these checks, a redesign should be on your near-term roadmap. If you want a professional to run a more thorough audit for free,{' '}
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors">reach out to our team</Link>.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">Your Website Should Work as Hard as You Do</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
                If you recognized your business in any of the signs above, you do not have to figure this out alone. Comcreate Digital offers a free website audit where we review your current site, identify the biggest opportunities for improvement, and give you an honest recommendation -- even if that recommendation is &ldquo;you do not need us right now.&rdquo;
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
                  Get Your Free Website Audit
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Related Reading */}
          <motion.section variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Related Reading</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/blog/how-much-does-website-cost-san-diego', label: 'How Much Does a Website Cost in San Diego?', desc: 'Transparent pricing for every type of website project' },
                { href: '/seo', label: 'SEO Services', desc: 'Improve your search visibility and drive organic traffic' },
                { href: '/projects', label: 'Our Portfolio', desc: 'Browse completed projects across 15+ industries' },
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
