import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

function PrivacyPolicy() {
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
        <title>Privacy Policy | Comcreate Digital Agency</title>
        <meta name="description" content="Privacy Policy for Comcreate - Learn how we collect, use, and protect your personal information when you visit our website or use our digital marketing services." />
        
        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | Comcreate Digital Agency" />
        <meta property="og:description" content="Privacy Policy for Comcreate - Learn how we collect, use, and protect your personal information when you visit our website or use our digital marketing services." />
        <meta property="og:url" content="https://www.comcreate.org/privacy-policy" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Privacy Policy | Comcreate Digital Agency" />
        <meta name="twitter:description" content="Privacy Policy for Comcreate - Learn how we collect, use, and protect your personal information when you visit our website or use our digital marketing services." />
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
              Privacy Policy
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
                Welcome to Comcreate. Your privacy is of utmost importance to us, and we are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our digital marketing and web design services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By using our website or services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </motion.section>

            {/* Section 2 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may collect the following types of personal information:
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">a. Personal Identification Information</h3>
              <ul className="text-gray-300 mb-4 space-y-1">
                <li>• Name</li>
                <li>• Email address</li>
                <li>• Phone number</li>
                <li>• Company name</li>
                <li>• Business address</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">b. Business Information</h3>
              <ul className="text-gray-300 mb-4 space-y-1">
                <li>• Project requirements and goals</li>
                <li>• Budget and timeline information</li>
                <li>• Industry and target audience details</li>
                <li>• Marketing objectives and KPIs</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">c. Technical Data</h3>
              <ul className="text-gray-300 mb-4 space-y-1">
                <li>• IP address</li>
                <li>• Browser type and version</li>
                <li>• Device information</li>
                <li>• Usage data (pages visited, time spent on site)</li>
                <li>• Referral source and campaign data</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">d. Cookies and Tracking Technologies</h3>
              <p className="text-gray-300 leading-relaxed">
                We use cookies and similar technologies to track your activity on our website to enhance user experience, analyze site traffic, and improve our services. For more details, please review our Cookie Policy.
              </p>
            </motion.section>

            {/* Section 3 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Comcreate uses your information for the following purposes:
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">a. To Provide and Improve Our Services</h3>
              <ul className="text-gray-300 mb-4 space-y-1">
                <li>• Creating custom websites and digital marketing strategies</li>
                <li>• Developing SEO and advertising campaigns</li>
                <li>• Providing ongoing support and maintenance</li>
                <li>• Tailoring service recommendations based on your business needs</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">b. Communication</h3>
              <ul className="text-gray-300 mb-4 space-y-1">
                <li>• To send you project updates and progress reports</li>
                <li>• To provide marketing insights and recommendations</li>
                <li>• To respond to inquiries and consultation requests</li>
                <li>• To share relevant industry news and tips</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">c. Compliance and Security</h3>
              <ul className="text-gray-300 mb-4 space-y-1">
                <li>• To comply with legal obligations</li>
                <li>• To protect against fraud or unauthorized access</li>
                <li>• To maintain the security of our website and client data</li>
                <li>• To ensure proper service delivery and quality control</li>
              </ul>
            </motion.section>

            {/* Section 4 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">4. Sharing of Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may share your personal information under the following circumstances:
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">a. With Service Providers</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may share your information with third-party service providers who assist us with hosting, analytics, email marketing, social media management, and other business operations essential to delivering our services.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">b. For Legal Purposes</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may disclose your information when required to comply with legal obligations, including responding to subpoenas, court orders, or regulatory requests.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">c. With Your Consent</h3>
              <p className="text-gray-300 leading-relaxed">
                We will share your information with third parties only if you have given us explicit consent to do so, such as for case studies or testimonials.
              </p>
            </motion.section>

            {/* Section 5 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                Comcreate retains personal information for as long as necessary to provide our services, comply with legal obligations, and resolve disputes. After that period, we will securely delete or anonymize your information unless longer retention is required by law.
              </p>
            </motion.section>

            {/* Section 6 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </motion.section>

            {/* Section 7 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Privacy Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You may have the following rights concerning your personal information, subject to applicable laws:
              </p>

              <ul className="text-gray-300 space-y-2">
                <li><strong>Right to Access:</strong> You have the right to request access to the personal information we hold about you.</li>
                <li><strong>Right to Rectification:</strong> You may request corrections to any inaccurate or incomplete personal information.</li>
                <li><strong>Right to Deletion:</strong> You can request that we delete your personal information, subject to legal and contractual obligations.</li>
                <li><strong>Right to Withdraw Consent:</strong> Where consent is the basis for processing your information, you have the right to withdraw it at any time.</li>
                <li><strong>Right to Data Portability:</strong> You may request that we provide your data in a structured, commonly used, and machine-readable format.</li>
              </ul>
            </motion.section>

            {/* Section 8 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 leading-relaxed">
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. By using our website, you consent to the use of cookies in accordance with our Cookie Policy. You can control or delete cookies through your browser settings.
              </p>
            </motion.section>

            {/* Section 9 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Links</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may contain links to external websites or services that are not operated by us. We are not responsible for the privacy practices of these third parties, and we encourage you to review their privacy policies before providing any personal information.
              </p>
            </motion.section>

            {/* Section 10 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we learn that we have collected personal data from a child under 18, we will take steps to delete such information.
              </p>
            </motion.section>

            {/* Section 11 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                Comcreate reserves the right to update or modify this Privacy Policy at any time. We will notify you of any significant changes by posting an updated version on our website with the "Effective Date" noted at the top. Your continued use of our services after the changes take effect will constitute your acknowledgment and acceptance of the updated policy.
              </p>
            </motion.section>

            {/* Section 12 */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">12. How to Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy or how we handle your information, please contact us at:
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

export default PrivacyPolicy
