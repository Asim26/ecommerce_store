import React from "react";
import Button from "../button";
import "./styles.css";

export default function BlogTile(props) {
  return (
    <div className="blog-tile-main">
      <img src={props.blogImg} className="blog-tile-img" />
      <h6 className="blog-title">{props.blogTitle}</h6>
      <h6 className="blog-desc">{props.blogDesc}</h6>
      <Button title={"READ MORE"} width={"70%"} />
    </div>
  );
}
