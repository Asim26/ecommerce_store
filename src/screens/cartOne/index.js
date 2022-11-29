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

export default function CartOne() {
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
                    <Breadcrumb.Item active>Information</Breadcrumb.Item>
                    <Breadcrumb.Item active>Shipping</Breadcrumb.Item>
                    <Breadcrumb.Item active>Details</Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 className="contact-info-style">Contact Information</h3>

                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Email or mobile phone number"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <h3> Shipping address</h3>
              <Row>
                <Col lg="6">
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="First Name"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>
                <Col lg="6">
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Last Name"
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
                      placeholder="Address"
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
                      placeholder="Apartment, suite, etc. (0ptional)"
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
                      placeholder="City"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Pakistan"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>
                <Col lg="6">
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Postal Code"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Button variant="primary">Continue to shipping</Button>
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
