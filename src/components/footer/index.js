import React from "react";
import "./styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  AMEX_LOGO,
  APP_LOGO,
  FACEBOOK_LOGO_BLACK,
  INSTAGRAM_LOGO_BLACK,
  MASTER_CARD_LOGO_1,
  MASTER_CARD_LOGO_2,
  O_PAY_LOGO,
  PINTEREST_LOGO_BLACK,
  TWITTER_LOGO_BLACK,
  VISA_LOGO,
  YOUTUBE_LOGO_BLACK,
} from "../../images";

export default function Footer() {
  return (
    <div className="footer-main-div">
      <Container fluid>
        <Row lg="12">
          <Col lg="4">
            <img src={APP_LOGO} className="footer-logo-style" />
            <h5 className="footer-logo-div-text">
              We promise we won’t write to you often
            </h5>
          </Col>

          <Col lg="2" fluid>
            <h4>Support</h4>
            <ul className="ul-style">
              <li>FAQ</li>
              <li>STOCKIST</li>
              <li>PRESS</li>
              <li>AFFILIATES</li>
            </ul>
          </Col>
          <Col lg="2">
            <h4>Contact</h4>
            <ul className="ul-style">
              <li>abc@gmail.com</li>
              <li>abcd----</li>
            </ul>
          </Col>

          <Col lg="4">
            <h5>Keep In Touch</h5>
            <h6 className="footer-email-div-text">
              we promise we don’t write you often
            </h6>
            <input
              type="text"
              className="email-input-style"
              placeholder="Your email"
            />
            <button className="subscribe-btn">Subscribe</button>
          </Col>
        </Row>
        <Row lg="12" fluid className="social-icons-div">
          <Col lg="4" fluid>
            <img src={FACEBOOK_LOGO_BLACK} className="social-logo" />
            <img src={TWITTER_LOGO_BLACK} className="social-logo" />
            <img src={PINTEREST_LOGO_BLACK} className="social-logo" />
            <img src={INSTAGRAM_LOGO_BLACK} className="social-logo" />
            <img src={YOUTUBE_LOGO_BLACK} className="social-logo" />
          </Col>
          <Col lg="4">
            <p>
              © 2021, <b>Oworganic.</b> Powered by Shopify
            </p>
          </Col>
          <Col lg="4" fluid>
            <img src={VISA_LOGO} className="payment-logo" />
            <img src={O_PAY_LOGO} className="payment-logo" />
            <img src={MASTER_CARD_LOGO_1} className="payment-logo" />
            <img src={AMEX_LOGO} className="payment-logo" />
            <img src={MASTER_CARD_LOGO_2} className="payment-logo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
