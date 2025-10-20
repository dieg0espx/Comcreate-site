import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

function TermsOfService() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
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

  return (
    <>
      <Head>
        <title>Terms of Service | Comcreate Digital Agency</title>
        <meta name="description" content="Terms of Service for Comcreate - Read our terms and conditions for using our web design, SEO, and digital marketing services." />
        
        {/* Open Graph */}
        <meta property="og:title" content="Terms of Service | Comcreate Digital Agency" />
        <meta property="og:description" content="Terms of Service for Comcreate - Read our terms and conditions for using our web design, SEO, and digital marketing services." />
        <meta property="og:url" content="https://www.comcreate.org/terms-of-service" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Terms of Service | Comcreate Digital Agency" />
        <meta name="twitter:description" content="Terms of Service for Comcreate - Read our terms and conditions for using our web design, SEO, and digital marketing services." />
      </Head>

      <motion.div 
        className="min-h-screen bg-black text-white py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-400 text-lg">
              Effective date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>

          <motion.div 
            className="prose prose-invert max-w-none"
            variants={containerVariants}
          >
            {/* Section 1 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Welcome to Comcreate. These Terms of Service ("Terms") govern your use of our website and digital marketing services. By accessing or using our website and services, you agree to comply with these Terms. If you do not agree with these Terms, please do not use our services.
              </p>
            </motion.section>

            {/* Section 2 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use of Our Services</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">a. Eligibility</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                By using our services, you confirm that you are at least 18 years old and legally able to enter into a binding agreement. If you are using our services on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">b. User Responsibility</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree to use our services only for lawful purposes. You are solely responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">c. Prohibited Activities</h3>
              <p className="text-gray-300 leading-relaxed mb-3">You agree not to engage in any of the following activities:</p>
              <ul className="text-gray-300 space-y-1 mb-4">
                <li>• Using the website for any illegal or unauthorized purpose</li>
                <li>• Attempting to access or use another user's account without permission</li>
                <li>• Interfering with or disrupting the website's operation</li>
                <li>• Uploading or transmitting any malicious software, viruses, or harmful code</li>
                <li>• Impersonating any person or entity or misrepresenting your affiliation</li>
                <li>• Violating any applicable local, state, national, or international law</li>
              </ul>
            </motion.section>

            {/* Section 3 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">3. Digital Marketing and Web Design Services</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">a. Service Delivery</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Comcreate offers web design, development, SEO, digital advertising, and branding services. While we strive to deliver high-quality results, we do not guarantee specific outcomes such as rankings, traffic increases, or conversion rates, as these depend on various factors beyond our control.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">b. No Guarantee of Results</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Digital marketing results vary based on industry, competition, budget, and market conditions. We provide our best efforts and industry expertise but cannot guarantee specific results or timelines for SEO improvements, advertising performance, or business growth.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">c. Service Availability</h3>
              <p className="text-gray-300 leading-relaxed">
                While we strive to provide continuous access to our services, we cannot guarantee that the website or any service will be available at all times. We may experience occasional downtime due to maintenance, technical issues, or other unforeseen circumstances.
              </p>
            </motion.section>

            {/* Section 4 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">4. Project Terms and Payment</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">a. Project Agreements</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Specific project terms, deliverables, timelines, and payment schedules will be outlined in separate service agreements or contracts. These agreements take precedence over these general terms for specific projects.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">b. Payment Terms</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Payment terms are specified in individual project agreements. Failure to pay according to agreed terms may result in service suspension or termination. Overdue payments may incur late fees as specified in the project agreement.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">c. Cancellation and Refunds</h3>
              <p className="text-gray-300 leading-relaxed">
                Cancellation and refund policies are detailed in individual service agreements. Generally, work completed and expenses incurred are non-refundable, but specific terms vary by project type and stage.
              </p>
            </motion.section>

            {/* Section 5 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">a. Ownership</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                All content, designs, logos, and materials on the Comcreate website are the intellectual property of Comcreate or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">b. Client Work</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Upon full payment, clients receive ownership of custom work created specifically for their project. Comcreate retains the right to use anonymized work for portfolio, marketing, and case study purposes unless otherwise specified in the project agreement.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">c. Limited License</h3>
              <p className="text-gray-300 leading-relaxed">
                We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal, non-commercial use. You may not reproduce, distribute, or exploit any content from our website without prior written consent.
              </p>
            </motion.section>

            {/* Section 6 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">6. Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Your use of our services is also governed by our Privacy Policy. By using the website, you consent to the collection and use of your information as described in the Privacy Policy.
              </p>
            </motion.section>

            {/* Section 7 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Links and Services</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites or services that are not owned or controlled by Comcreate. We are not responsible for the content, privacy practices, or terms of these third-party websites. You acknowledge and agree that any interactions with third-party services are at your own risk.
              </p>
            </motion.section>

            {/* Section 8 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">8. Disclaimers and Limitation of Liability</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">a. No Warranties</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Comcreate makes no warranties or representations about the accuracy, completeness, or reliability of the information on our website. The services are provided on an "as-is" and "as-available" basis, without any express or implied warranties.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">b. Limitation of Liability</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                To the fullest extent permitted by law, Comcreate shall not be liable for any indirect, incidental, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of your use of the services, even if we have been advised of the possibility of such damages.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">c. Indemnification</h3>
              <p className="text-gray-300 leading-relaxed">
                You agree to indemnify, defend, and hold Comcreate harmless from any claims, liabilities, damages, losses, or expenses arising from your use of the website or services, your violation of these Terms, or your violation of any third-party rights.
              </p>
            </motion.section>

            {/* Section 9 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">a. Termination by You</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                You may terminate your use of the services at any time by discontinuing your access to the website and providing written notice of termination for ongoing projects in accordance with the project agreement.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">b. Termination by Comcreate</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We reserve the right to suspend or terminate your account or access to our services at any time, for any reason, including but not limited to violation of these Terms, failure to pay fees, or breach of project agreements, with appropriate notice as specified in individual agreements.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">c. Effect of Termination</h3>
              <p className="text-gray-300 leading-relaxed">
                Upon termination, any licenses or rights granted to you under these Terms will cease immediately. Any provisions of these Terms that, by their nature, should survive termination (e.g., intellectual property, indemnification, limitation of liability) shall continue to apply.
              </p>
            </motion.section>

            {/* Section 10 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law and Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">a. Governing Law</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Terms are governed by and construed in accordance with the laws of the state of California, without regard to its conflict of law principles.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">b. Dispute Resolution</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                In the event of any dispute arising out of or related to these Terms or the use of our services, you agree to first attempt to resolve the dispute informally by contacting us at the information provided below. If the dispute cannot be resolved through informal negotiations, it shall be submitted to binding arbitration under the rules of the American Arbitration Association.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">c. Jurisdiction</h3>
              <p className="text-gray-300 leading-relaxed">
                If arbitration is deemed inapplicable, you agree that any legal action arising out of or related to these Terms or your use of our services shall be filed only in the state or federal courts located in San Diego, California, and you consent to the jurisdiction of such courts.
              </p>
            </motion.section>

            {/* Section 11 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">11. Changes to These Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                Comcreate reserves the right to update or modify these Terms at any time. We will notify you of any significant changes by posting the revised Terms on our website. Your continued use of the services after the changes have been made will constitute your acceptance of the revised Terms.
              </p>
            </motion.section>

            {/* Section 12 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions or concerns regarding these Terms, please contact us at:
              </p>
              
              <div className="bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Comcreate</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Phone:</strong> (619) 955-0105</p>
                  <p><strong>Email:</strong> sales@comcreate.org</p>
                  <p><strong>Address:</strong> San Diego, CA</p>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default TermsOfService
