import React from "react";
import { Row, Col } from "react-bootstrap";

//CSS
import "./ListFinanzas.css";

//Components
import ErrorEmpty from "../../Tools/ErrorEmpty";
import DetailFinanzas from "../DetailFinanzas";

const ListFinanzas = (props) => {
  const { children, data } = props;

  return (
    <Row className="Component__row-finanzas">
      <Col xs={12} className="Component__finanzas">
        {children}
      </Col>
      <Col xs={12} className="Component__finanzas__list">
        {data && data.length > 0 ? (
          data.map((DetailFinanza, index) => (
            <DetailFinanzas {...DetailFinanza} key={index} />
          ))
        ) : (
          <ErrorEmpty />
        )}
      </Col>
    </Row>
  );
};

export default ListFinanzas;
