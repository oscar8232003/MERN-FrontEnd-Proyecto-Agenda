import React from "react";
import { Row, Col, Alert } from "react-bootstrap";

//CSS
import "./ListRecordatorios.css";

//Component
import ErrorEmpty from "../../Tools/ErrorEmpty";

const ListRecordatorios = (props) => {
  const { children, dataImportante, dataOtros } = props;
  return (
    <Row className="Component__row-recordatorios">
      <Col xs={12} className="Component__recordatorios-title">
        {children}
      </Col>
      <Col xs={12} md={6} className="Component__recordatorio__importantes">
        <h4>Importantes</h4>
        {dataImportante && dataImportante.length > 0 ? (
          dataImportante.map((alert, id) => (
            <Alert key={id} variant={alert}>
              Recordatorio importante
            </Alert>
          ))
        ) : (
          <ErrorEmpty />
        )}
      </Col>

      <Col xs={12} md={6} className="Component__recordatorio__otros">
        <h4>Otros Recordatorios</h4>
        {dataOtros && dataOtros.length > 0 ? (
          dataOtros.map((alert, id) => (
            <Alert key={id} variant={alert}>
              Recordatorio No importante
            </Alert>
          ))
        ) : (
          <ErrorEmpty />
        )}
      </Col>
    </Row>
  );
};

export default ListRecordatorios;
