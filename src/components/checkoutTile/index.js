import React from "react";
import "./styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CART_CHECKOUT_PRODUCT } from "../../images";
import CheckoutBtn from "../checkoutBtn";
import Button from "../button";

export default function CheckoutTile(props) {
  const { products } = props;
  console.log("props...", products);
  return (
    <>
      <div className="checkout-tile-main">
        <Container>
          {products.map((product) => {
            return (
              <>
                <Row lg="12" className="checkout-product-tile-row">
                  <Col lg="7">
                    <Row>
                      <Col lg="3">
                        <img
                          src={product.pic}
                          className="checkout-product-img"
                        />
                      </Col>
                      <Col lg="6" className="checkout-product-text">
                        <h5>{product.title}</h5>
                        <h6>REMOVE</h6>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="2" className="checkout-count-style">
                    {product.qty}
                  </Col>
                  <Col lg="3" className="checkout-price-style">
                    {product.price}
                  </Col>
                </Row>
              </>
            );
          })}
        </Container>
        <Container>
          <Row>
            <Col>
              <CheckoutBtn
                title={"Your order is ready!"}
                width={"100%"}
                backgroundColor={"#407C5D"}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
