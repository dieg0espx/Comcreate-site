import "../styles/globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ContactPopup from "../components/ContactPopup"
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-black">
      <Head>
        <title>Comcreate - Professional Web Design & Development Services</title>
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Comcreate" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="Transform your business with Comcreate&apos;s professional web design, development, and digital marketing services. We create stunning websites that drive growth and results." />
        <meta name="keywords" content="Comcreate, website, development, design, marketing, SEO, digital marketing, social media, branding, web design, web development, web agency, web design agency, web development agency, web design company, web development company, web design services, web development services, web design agency, web development agency, web design company, web development company, web design services, web development services" />
        <meta name="author" content="Comcreate" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        
        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Comcreate - Professional Web Design & Development Services" />
        <meta property="og:description" content="Transform your business with Comcreate&apos;s professional web design, development, and digital marketing services. We create stunning websites that drive growth and results." />
        <meta property="og:image" content="https://www.comcreate.org/miniature.png" />
        <meta property="og:image:secure_url" content="https://www.comcreate.org/miniature.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="2882" />
        <meta property="og:image:height" content="1960" />
        <meta property="og:image:alt" content="Comcreate - Professional Website Development & Design" />
        <meta property="og:url" content="https://www.comcreate.org" />
        <meta property="og:site_name" content="Comcreate" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Comcreate - Professional Web Design & Development Services" />
        <meta name="twitter:description" content="Transform your business with Comcreate&apos;s professional web design, development, and digital marketing services. We create stunning websites that drive growth and results." />
        <meta name="twitter:image" content="https://www.comcreate.org/miniature.png" />
        <meta name="twitter:image:alt" content="Comcreate - Professional Website Development & Design" />
      </Head>
      <Header />
        <div className="pt-[80px] md:pt-[150px] pb-[100px] max-w-[1440px] mx-auto px-3 md:px-6 lg:px-10">
          <Component {...pageProps} />
        </div>
        <Footer />
    </div>
  );
}
