import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";
import {
  FACEBOOK_LOGO,
  TWITTER_LOGO,
  PINTEREST_LOGO,
  INSTAGRAM_LOGO,
  YOUTUBE_LOGO,
  PAK_FLAG,
} from "../../images";

export default function SocialNavBar() {
  return (
    <div className="social-navbar-main">
      <Container>
        <Row lg="12">
          <Col lg="8">
            <a href="#">
              <img src={FACEBOOK_LOGO} className="social-logo" />
            </a>
            <a href="#">
              <img src={TWITTER_LOGO} className="social-logo" />
            </a>
            <a href="#">
              <img src={PINTEREST_LOGO} className="social-logo" />
            </a>
            <a href="#">
              <img src={INSTAGRAM_LOGO} className="social-logo" />
            </a>
            <a href="#">
              <img src={YOUTUBE_LOGO} className="social-logo" />
            </a>
          </Col>
          <Col lg="4">
            <a href="#" className="linkStyle" style={{ marginRight: "1%" }}>
              Sign in /
            </a>
            <a href="#" className="linkStyle">
              Register |
            </a>
            <a href="#" className="linkStyle store-style">
              Store
            </a>
            <a href="#" className="linkStyle">
              Subscribe |
            </a>
            <img src={PAK_FLAG} className="pak-logo" />
            <a href="#" className="linkStyle">
              PK
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
