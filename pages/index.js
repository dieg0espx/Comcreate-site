import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import GrowthSection from '../components/GrowthSection'
import FeaturedSection from '../components/FeaturedSection'
import ReviewsSection from '../components/ReviewsSection'
import AgencySection from '../components/AgencySection'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'
import Calendly from '../components/Calendly'

function index() {
  return (
    <div className=''>
      <Hero />
      <div className='block md:hidden w-full h-[200px] relative -bottom-[100px] z-99' style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 50%)' }}></div>
      <Services />
      <GrowthSection />
      <FeaturedSection />
      <ReviewsSection />
      <AgencySection />
      <ContactSection />
      <FaqSection />
      <Calendly url="https://calendly.com/analytics-comcreate/30min" />
      <div className='fixed bottom-0 left-0 w-full h-[150px]' style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 95%)' }}></div>
    </div>
  )
}

export default index