import Banner from "@/Components/Banner/Banner";
import Help from "@/Components/Help";
import Review from "@/Components/Review";
import Work from "@/Components/Work";
import Why from "@/Components/Why";
import People from "@/Components/People";
import Pricing from "@/Components/Pricing";
import Faqs from "@/Components/Faqs";
import Faq2 from "@/Components/Faq2";

export default function Home() {
  return (
    <main
      className=''
    >
      <Banner/>
      <Help/>
      <Review/>
      <Work/>
      <Why/>
      <People/>
      <Pricing/>
      <Faqs/>
      <Faq2/>
    </main>
  );
}
