import React from "react";
import SocialNavBar from "../../components/socialnavbar";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import PromotionSection from "../../components/promotionsection";
import CenteredText from "../../components/centeredtext";
import ProductSection from "../../components/productsection";
import { PRODUCT_1 } from "../../images";
import CategoryHeader from "../../components/categoryHeader";

export default function MakeUp() {
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
      <CategoryHeader title={"CATEGORIES/MAKEUP"} />
      <CenteredText headingOne={""} headingTwo={"Makeup"} headingThree={""} />
      <ProductSection products={products} />
      <PromotionSection />
      <Footer />
    </>
  );
}
