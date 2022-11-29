import React from "react";
import "./styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Featured from "../featured";
import { FEATURED_1, FEATURED_2 } from "../../images";

export default function FeaturedSection() {
  return (
    <div className="featured-sec-main-div">
      <Container>
        <Row lg="12">
          <Col lg="6">
            <Featured
              image={FEATURED_1}
              lineOne={"BELIEVING"}
              lineTwo={"Make Up"}
            />
          </Col>
          <Col lg="6">
            <Featured
              image={FEATURED_2}
              lineOne={"BELIEVING"}
              lineTwo={"Make Up"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
