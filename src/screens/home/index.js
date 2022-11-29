import React from "react";
import NavBar from "../../components/navbar";
import SocialNavBar from "../../components/socialnavbar";
import Intro from "../../components/intro";
import FeaturedSection from "../../components/featuredsection";
import CenteredText from "../../components/centeredtext";
import ProductSection from "../../components/productsection";
import Testimonials from "../../components/testimonials";
import BlogSection from "../../components/blogsection";
import PromotionSection from "../../components/promotionsection";
import Footer from "../../components/footer";
import { PRODUCT_1 } from "../../images";

export default function Home() {
  let products = [
    {
      id: 1,
      title: "COVER-UP CREAM FOUNDATION",
      price: "$49.00",
      pic: PRODUCT_1,
    },
    {
      id: 2,
      title: "COVER-UP CREAM FOUNDATION",
      price: "$49.00",
      pic: PRODUCT_1,
    },
    {
      id: 3,
      title: "COVER-UP CREAM FOUNDATION",
      price: "$49.00",
      pic: PRODUCT_1,
    },
    {
      id: 4,
      title: "COVER-UP CREAM FOUNDATION",
      price: "$49.00",
      pic: PRODUCT_1,
    },
  ];
  return (
    <>
      <SocialNavBar />
      <NavBar />
      <Intro />
      <FeaturedSection />
      <CenteredText
        headingOne={"BEST FOR YOU"}
        headingTwo={"New Arrivals"}
        headingThree={
          "Apparently we had reached a great height in the atmosphere, for the sky was a dead black and there a stars."
        }
      />
      <ProductSection products={products} />
      <Testimonials />
      <CenteredText
        headingOne={"THE DAILY MUSE"}
        headingTwo={"Latest news"}
        headingThree={
          "Apparently we had reached a great height in the atmosphere, for the sky was a dead black and there a stars."
        }
      />
      <BlogSection />
      <PromotionSection />
      <Footer />
    </>
  );
}
