import "../styles/globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ContactPopup from "../components/ContactPopup"
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-black">
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Comcreate" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="Comcreate is a company that creates websites for businesses." />
        <meta name="keywords" content="Comcreate, website, development, design, marketing, SEO, digital marketing, social media, branding, web design, web development, web agency, web design agency, web development agency, web design company, web development company, web design services, web development services, web design agency, web development agency, web design company, web development company, web design services, web development services" />
        <meta name="author" content="Comcreate" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
      </Head>
      <Header />
        <div className="pt-[80px] md:pt-[150px] pb-[100px] max-w-[1440px] mx-auto px-3 md:px-6 lg:px-10">
          <Component {...pageProps} />
        </div>
        <Footer />
    </div>
  );
}
