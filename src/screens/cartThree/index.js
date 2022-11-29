import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { CART_PRODUCT } from "../../images";
import Cart from "../../components/cart";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function CartThree() {
  let cartProducts = [
    {
      id: 1,
      title: "Soothing day cream",
      price: "$100.00",
      image: CART_PRODUCT,
    },
    {
      id: 1,
      title: "Soothing day cream",
      price: "$100.00",
      image: CART_PRODUCT,
    },
    {
      id: 1,
      title: "Soothing day cream",
      price: "$100.00",
      image: CART_PRODUCT,
    },
    {
      id: 1,
      title: "Soothing day cream",
      price: "$100.00",
      image: CART_PRODUCT,
    },
  ];

  let charges = [
    {
      id: 1,
      title: "Subtotal",
      price: "$400.00",
    },
    {
      id: 2,
      title: "Shipping",
      price: "Calculated at next step",
    },
    {
      id: 3,
      title: "Total",
      price: "$400.00",
    },
  ];
  return (
    <>
      <div>
        <Container>
          <Row lg="12">
            <Col lg="7" className="shipping-details">
              <Row>
                <Col>
                  <h2>oworganic</h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Breadcrumb>
                    <Breadcrumb.Item href="#">Cart</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Information</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Shipping</Breadcrumb.Item>
                    <Breadcrumb.Item active>Details</Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Contact"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Ship To"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <h3> Shipping method</h3>
              <Row>
                <Col>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Standard"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Button variant="primary">Complete Order</Button>
                  <a href="#" className="info-text">
                    Return to shipping
                  </a>
                </Col>
              </Row>

              <div className="cart-footer">All rights reserved oworganic</div>
            </Col>

            <Col lg="5" className="bill-details">
              <h3>Happy Shopping</h3>
              <Cart cartProducts={cartProducts} charges={charges} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
