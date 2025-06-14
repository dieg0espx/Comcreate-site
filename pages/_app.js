import "../styles/globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-black">
      <Header />
        <div className="pt-[110px] max-w-[1440px] mx-auto px-10">
          <Component {...pageProps} />
        </div>
        <Footer />
    </div>
  );
}
