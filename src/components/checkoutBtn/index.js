import React from "react";
import "./styles.css";

export default function CheckoutBtn(props) {
  return (
    <>
      <div style={{ marginTop: "2%" }}>
        <button
          className="button-style"
          style={{
            width: props?.width,
            backgroundColor: props.backgroundColor,
          }}
        >
          {props.title}
        </button>
      </div>
    </>
  );
}
