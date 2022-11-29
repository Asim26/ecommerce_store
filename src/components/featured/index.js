import React from "react";
import "./styles.css";

export default function Featured(props) {
  return (
    <div className="featured-main">
      <img src={props?.image} className="featured-img" />
      <div className="featured-text-div">
        <h3 className="featured-heading-one">{props?.lineOne}</h3>
      </div>
      <div className="featured-text-div">
        <h3 className="featured-heading-Two">{props?.lineTwo}</h3>
      </div>
    </div>
  );
}
