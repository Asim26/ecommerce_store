import React from "react";
import "./styles.css";

export default function CenteredText(props) {
  return (
    <div className="centered-text-main">
      <h5 className="centered-text-heading-one">{props.headingOne}</h5>
      <h2 className="centered-text-heading-two">{props.headingTwo}</h2>
      <h6 className="centered-text-heading-three">{props.headingThree}</h6>
    </div>
  );
}
