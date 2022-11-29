import React from "react";
import "./styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";
import { AIRPLANE, COIN, LOCK } from "../../images";

export default function PromotionSection() {
  let promo = [
    {
      id: 1,
      title: "WORLDWIDE SHIPPING",
      description: "Special financing and earn reward",
      logo: AIRPLANE,
    },
    {
      id: 2,
      title: "30 DAYS GUARANTEE",
      description: "30-days free return policy",
      logo: COIN,
    },
    {
      id: 3,
      title: "SECURED PAYMENTS",
      description: "We accept all major credit cards",
      logo: LOCK,
    },
  ];
  return (
    <div className="promotion-section-main">
      <Container>
        <Row lg="12">
          {promo.map((item) => {
            return (
              <Col lg="4" className="promo-div-col">
                <img src={item.logo} className="promo-logo-style" />
                <div className="promo-text">
                  <h5>{item.title}</h5>
                  <h5>{item.description}</h5>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
