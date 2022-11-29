import React from "react";
import "./styles.css";
import Button from "../button";

export default function ProductTile(props) {
  return (
    <div className="product-tile-main">
      <img src={props?.productTileImg} className="product-tile-img" />
      <h6 className="product-title">{props?.productTileTitle}</h6>
      <h6 className="product-price">{props?.productTilePrice}</h6>
      <Button title={"ADD TO CART"} width={"100%"} />
    </div>
  );
}
