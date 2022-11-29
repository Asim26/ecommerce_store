import React from "react";
import "./styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BlogTile from "../blogTile";
import { BLOG_1 } from "../../images";

export default function BlogSection() {
  let blogs = [
    {
      id: 1,
      title: "PLASTIC FREE CHRISTMASWITH OUR LOVE",
      desc: "Hey guyz! I wanted to share the ‘Best of’ multiple categories from the Nordstorm sale...",
      img: BLOG_1,
    },
    {
      id: 2,
      title: "PLASTIC FREE CHRISTMASWITH OUR LOVE",
      desc: "Hey guyz! I wanted to share the ‘Best of’ multiple categories from the Nordstorm sale...",
      img: BLOG_1,
    },
    {
      id: 3,
      title: "PLASTIC FREE CHRISTMASWITH OUR LOVE",
      desc: "Hey guyz! I wanted to share the ‘Best of’ multiple categories from the Nordstorm sale...",
      img: BLOG_1,
    },
  ];
  return (
    <div className="blogs-main-div">
      <Container>
        <Row lg="12">
          {blogs.map((blog) => {
            return (
              <Col lg="4">
                <BlogTile
                  blogImg={blog.img}
                  blogTitle={blog.title}
                  blogDesc={blog.desc}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
