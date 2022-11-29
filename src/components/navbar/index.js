import React from "react";
import "./styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { APP_LOGO } from "../../images";
import Nav from "react-bootstrap/Nav";
import { SEARCH, BAG, LIST } from "../../images";

export default function NavBar() {
  let navlinks = [
    {
      id: 1,
      title: "HOME",
      link: "/home",
    },
    {
      id: 2,
      title: "SHOP",
      link: "/shop",
    },
    {
      id: 3,
      title: "PRODUCTS",
      link: "/products",
    },
    {
      id: 4,
      title: "BLOG",
      link: "/blog",
    },
    {
      id: 5,
      title: "LOOKBOOK",
      link: "/lookbook",
    },
    {
      id: 6,
      title: "BUYNOW",
      link: "/buynow",
    },
  ];
  return (
    <div className="navbar-main">
      <Container>
        <Row lg="12">
          <Col lg="2">
            <img src={APP_LOGO} className="logo-style" />
          </Col>
          <Col lg="10">
            <Nav className="justify-content-end" activeKey="/home">
              {navlinks?.map((item) => {
                return (
                  <div>
                    <Nav.Item>
                      <Nav.Link href={item?.link} className="navLinkStyle">
                        {item?.title}
                      </Nav.Link>
                    </Nav.Item>
                  </div>
                );
              })}
              <a href="#">
                <img src={SEARCH} className="nav-icon-style" />
              </a>
              <a href="#">
                <img src={BAG} className="nav-icon-style" />
              </a>
              <a href="#">
                <img src={LIST} className="nav-icon-style" />
              </a>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
