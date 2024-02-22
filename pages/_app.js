
import Banner from "@/Components/Banner/Banner";
import Faq2 from "@/Components/Faq2";
import Faqs from "@/Components/Faqs";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header/Header";
import Help from "@/Components/Help";
import People from "@/Components/People";
import Pricing from "@/Components/Pricing";
import Review from "@/Components/Review";
import Why from "@/Components/Why";
import Work from "@/Components/Work";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Banner/>
      <Component {...pageProps} />
      
      <Help/>
      <Review/>
      <Work/>
      <Why/>
      <People/>
      <Pricing/>
      <Faqs/>
      <Faq2/>
      <Footer/>
    </>
  );
}
