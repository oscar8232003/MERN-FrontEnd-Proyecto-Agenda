import React from "react";
import { Col } from "react-bootstrap";

//CSS
import "./ErrorEmpty.css";

//Emojis
import { PokerFace } from "../../../Emojis";

const ErrorEmpty = () => {
  return (
    <>
      <Col xs={12} className="Component__ErrorEmpty">
        <h3>
          Lo siento, aun no tenemos algo para mostrarte. <PokerFace />
        </h3>
      </Col>
    </>
  );
};

export default ErrorEmpty;
