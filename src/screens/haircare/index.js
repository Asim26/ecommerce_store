import React from "react";
import SocialNavBar from "../../components/socialnavbar";
import NavBar from "../../components/navbar";
import CategoryHeader from "../../components/categoryHeader";
import CenteredText from "../../components/centeredtext";
import ProductSection from "../../components/productsection";
import PromotionSection from "../../components/promotionsection";
import Footer from "../../components/footer";
import { PRODUCT_1 } from "../../images";

export default function HairCare() {
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
      <CategoryHeader title={"CATEGORIES/HAIR CARE"} />
      <CenteredText
        headingOne={""}
        headingTwo={"HAIR CARE"}
        headingThree={""}
      />
      <ProductSection products={products} />
      <PromotionSection />
      <Footer />
    </>
  );
}
