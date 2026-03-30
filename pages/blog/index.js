import React from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const blogPosts = [
  {
    slug: 'how-much-does-website-cost-san-diego',
    title: 'How Much Does a Website Cost in San Diego? (2026)',
    excerpt: 'San Diego website costs range from $2,000-$50,000+. Get transparent pricing by type, plus what affects cost. Free quote from Comcreate.',
    image: 'https://res.cloudinary.com/dku1gnuat/image/upload/v1774888144/Comcreate_Blog_1_Website_Cost_San_Diego_gmhjg1.webp',
    date: 'March 28, 2026',
    readTime: '12 min read',
    category: 'Web Design',
  },
  {
    slug: 'signs-business-needs-website-redesign',
    title: '5 Signs You Need a Website Redesign (2026 Checklist)',
    excerpt: 'Is your website hurting your business? 5 warning signs you need a redesign — plus a free audit checklist. Expert guide from a San Diego web design agency.',
    image: 'https://res.cloudinary.com/dku1gnuat/image/upload/v1774888144/Comcreate_Blog_2_Website_Redesign_Signs_dcybm3.webp',
    date: 'March 28, 2026',
    readTime: '10 min read',
    category: 'Web Design',
  },
  {
    slug: 'local-seo-san-diego-businesses-guide',
    title: 'Local SEO for San Diego Businesses: 2026 Guide',
    excerpt: 'Complete local SEO guide for San Diego businesses. Google Business Profile, local citations, on-page optimization, reviews & more. Actionable steps from Comcreate.',
    image: 'https://res.cloudinary.com/dku1gnuat/image/upload/v1774888179/Comcreate_Blog_3_Local_SEO_San_Diego_hlpxhf.webp',
    date: 'March 28, 2026',
    readTime: '18 min read',
    category: 'SEO',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Comcreate | Web Design, SEO & Digital Marketing Insights</title>
        <meta name="description" content="Expert insights on web design, SEO, digital advertising, and branding for San Diego businesses. Transparent advice from the Comcreate team." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Blog - Comcreate | Web Design & Digital Marketing Insights" />
        <meta property="og:description" content="Expert insights on web design, SEO, digital advertising, and branding for San Diego businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.comcreate.org/blog" />
        <link rel="canonical" href="https://www.comcreate.org/blog" />
      </Head>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero */}
        <motion.div className="text-center mb-10 sm:mb-16" variants={itemVariants}>
          <span className="inline-block bg-[#181626] text-gray-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 sm:mb-6 tracking-widest uppercase">
            Our Blog
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6">
            Insights &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Resources
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2">
            Transparent advice on web design, SEO, and digital marketing for San Diego businesses.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
          variants={containerVariants}
        >
          {blogPosts.map((post) => (
            <motion.div key={post.slug} variants={itemVariants}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#181626]/60 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  {/* Image */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181626] via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <span className="text-xs font-semibold px-2 sm:px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">{post.readTime}</span>
                    </div>
                    <h2 className="text-white text-base sm:text-lg font-bold mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-3 sm:mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs">{post.date}</span>
                      <span className="text-blue-400 text-xs sm:text-sm font-medium group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                        Read more
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  )
}
