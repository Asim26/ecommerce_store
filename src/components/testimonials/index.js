import React from "react";
import "./styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TESTIMONIAL_1, WHITE_STAR, YELLOW_STAR } from "../../images";

export default function Testimonials() {
  return (
    <div className="testimonials-main">
      <Container>
        <Row lg="12">
          <Col lg="6">
            <div className="text-div-t">
              <h6 className="testimonial-heading">CUSTOMER REVIEWS</h6>
              <img src={YELLOW_STAR} className="star-style" />
              <img src={YELLOW_STAR} className="star-style" />
              <img src={YELLOW_STAR} className="star-style" />
              <img src={YELLOW_STAR} className="star-style" />
              <img src={WHITE_STAR} className="star-style" />
              <h3 className="testimonial-text">
                “The most comfortable kits ever!!I have them in 3 colors. And i
                am not done”
              </h3>
              <h6>-Jaycie, The Day Glove</h6>
            </div>
          </Col>
          <Col lg="6">
            <img src={TESTIMONIAL_1} className="testimonial-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
