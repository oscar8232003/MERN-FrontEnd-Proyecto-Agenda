import React from "react";
import { Row, Col, Toast } from "react-bootstrap";

//CSS
import "./ListListas.css";

//Component
import ErrorEmpty from "../../Tools/ErrorEmpty";

const ListListas = (props) => {
  const { children, data } = props;

  return (
    <Row className="Component__row-listas">
      <Col xs={12} className="Component__listas">
        {children}
      </Col>
      <Row className="Component__listas__panel">
        {data && data.length > 0 ? (
          data.map((lista, id) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              xl={3}
              className="Component__listas__panel--toast"
              key={id}
            >
              <Toast>
                <Toast.Header>
                  <strong className="mr-auto">Nombre con Max</strong>
                  <small>Categoria</small>
                </Toast.Header>
                <Toast.Body>
                  Descripcion de la lista resumida con un max
                </Toast.Body>
              </Toast>
            </Col>
          ))
        ) : (
          <ErrorEmpty />
        )}
      </Row>
    </Row>
  );
};

export default ListListas;
