import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

//CSS
import "./ErrorPage.css";

//EMOJI
import { Miedo } from "../../../components/Emojis";

const ErrorPage = () => {
  return (
    <Container fluid className="background-error">
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <Row className="row-error">
        <Col xs="10" sm="9" md="8" lg="7" xl="6">
          <div className="container-error">
            <div className="nav-error">
              <div className="circle rojo"></div>
              <div className="circle naranjo"></div>
              <div className="circle verde"></div>
            </div>
            <h1>404</h1>
            <h3>
              <Miedo /> Pagina no encontrada <Miedo />
            </h3>
            <button>
              <Link to="/">Ir al Inicio</Link>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
