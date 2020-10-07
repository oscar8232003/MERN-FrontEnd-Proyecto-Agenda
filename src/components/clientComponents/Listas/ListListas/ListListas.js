import React from "react";
import { Row, Col } from "react-bootstrap";

//CSS
import "./ListListas.css";

//Component
import ErrorEmpty from "../../Tools/ErrorEmpty";
import Lista from "../Lista";

const ListListas = (props) => {
  const { children, data, states } = props;

  return (
    <Row className="Component__row-listas">
      <Col xs={12} className="Component__listas">
        {children}
      </Col>
      <Row className="Component__listas__panel">
        {data && data.length > 0 ? (
          data.map((lista, id) => <Lista {...lista} key={id} states={states} />)
        ) : (
          <ErrorEmpty />
        )}
      </Row>
    </Row>
  );
};

export default ListListas;
