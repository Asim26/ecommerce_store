import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../../components/button";

export default function Intro() {
  return (
    <div className="intro-main">
      <Container>
        <Row>
          <Col lg="12">
            <div className="text-div">
              <h6 className="heading">BASIC COLLECTIONS</h6>
              <h1 className="heading-tagLine">Skin care & Body care</h1>
              <h5 className="body-text">
                We’re all up in your bathroom with produts that are good for
                your body and the environment.
              </h5>
              <Button title={"DISCOVER ALL"} width={"80%"} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
