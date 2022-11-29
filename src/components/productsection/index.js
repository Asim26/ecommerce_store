import React from "react";
import "./styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductTile from "../productTile";
import { PRODUCT_1 } from "../../images";

export default function ProductSection(props) {
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
    <div className="products-section-main">
      <Container>
        <Row lg="12">
          {props.products.map((product) => {
            return (
              <Col lg="3">
                <ProductTile
                  productTileImg={product.pic}
                  productTileTitle={product.title}
                  productTilePrice={product.price}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
