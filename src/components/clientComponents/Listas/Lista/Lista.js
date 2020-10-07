import React from "react";
import { Col, Toast } from "react-bootstrap";

//CSS
import "./Lista.css";

const Lista = (props) => {
  const { ...lista } = props;
  const { setModalTitle, setModalContent, setModalShow } = props.states;
  const { color = "#005cb3" } = { ...lista };

  const cortadorParrafos = (parrafo, cantidad) => {
    if (parrafo.length > cantidad) {
      let newString = parrafo.substring(0, cantidad) + "...";
      return newString;
    }
    return parrafo;
  };

  const showListDetail = (title = "Detalle") => {
    setModalTitle(title);
    setModalContent(<p>Detalle</p>);
    setModalShow(true);
  };

  return (
    <Col xs={12} sm={6} md={4} xl={3} className="Component__lista__col">
      <button
        className="Component__lista--button"
        onClick={() => {
          showListDetail(lista.title);
        }}
      >
        <Toast>
          <Toast.Header
            className="Component__lista__toast-header"
            style={{ background: color }}
          >
            <strong className="mr-auto Component__lista__toast-header--title">
              {cortadorParrafos(lista.title, 20)}
            </strong>
            <small className="Component__lista__toast-category">
              {cortadorParrafos(lista.category, 10)}
            </small>
          </Toast.Header>
          <Toast.Body className="Component__lista__toast-body pt-2">
            <h6 className="mb-0">Descripción</h6>
            <small>
              {" "}
              <strong>{lista.date}</strong>{" "}
            </small>
            <p className="m-0">{cortadorParrafos(lista.description, 130)}</p>
          </Toast.Body>
        </Toast>
      </button>
    </Col>
  );
};

export default Lista;
