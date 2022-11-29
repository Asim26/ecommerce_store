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
import CategoryHeader from "../../components/categoryHeader";
import CheckoutTile from "../../components/checkoutTile";

export default function Checkout() {
  let products = [
    {
      id: 1,
      title: "COVER-UP CREAM FOUNDATION",
      price: "$49.00",
      pic: PRODUCT_1,
      qty: 1,
    },
    {
      id: 2,
      title: "COVER-UP CREAM FOUNDATION",
      price: "$49.00",
      pic: PRODUCT_1,
      qty: 2,
    },
    {
      id: 3,
      title: "COVER-UP CREAM FOUNDATION",
      price: "$49.00",
      pic: PRODUCT_1,
      qty: 1,
    },
    {
      id: 4,
      title: "COVER-UP CREAM FOUNDATION",
      price: "$49.00",
      pic: PRODUCT_1,
      qty: 1,
    },
  ];
  return (
    <>
      <SocialNavBar />
      <NavBar />
      <CategoryHeader title={"CART"} />
      <CenteredText headingOne={"HAPPY SHOPPING"} />
      <CheckoutTile products={products} />
      <PromotionSection />
      <Footer />
    </>
  );
}
