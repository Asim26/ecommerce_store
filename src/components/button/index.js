import React from "react";
import "./styles.css";

export default function Button(props) {
  return (
    <div>
      <button className="button-style" style={{ width: props?.width }}>
        {props.title}
      </button>
    </div>
  );
}
