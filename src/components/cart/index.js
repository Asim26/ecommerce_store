import React from "react";
import "./styles.css";

export default function Cart(props) {
  const { cartProducts, charges } = props;

  return (
    <>
      {cartProducts.map((product) => {
        return (
          <>
            <div className="cart-details-main">
              <div className="cart-details-img-container">
                <img
                  src={product.image}
                  style={{ width: "18%", marginRight: "2%" }}
                />
                <h5> {product.title} </h5>
              </div>
              <div>{product.price}</div>
            </div>
          </>
        );
      })}
      <div className="cart-details-charges-main">
        {charges.map((item) => {
          return (
            <>
              <div className="cart-details-charges-row">
                <div>{item.title}</div>
                <div>{item.price}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
