import React from "react";
import { Row, Col } from "react-bootstrap";

//CSS
import "./ListRecordatorios.css";

//Component
import ErrorEmpty from "../../Tools/ErrorEmpty";
import Recordatorio from "../Recordatorio";

const ListRecordatorios = (props) => {
  const { children, dataImportante, dataOtros } = props;
  return (
    <Row className="Component__row-recordatorios">
      <Col xs={12} className="Component__recordatorios-title">
        {children}
      </Col>
      <Col xs={12} md={6} className="Component__recordatorio__importantes ">
        <h4>Importantes</h4>
        {dataImportante && dataImportante.length > 0 ? (
          dataImportante.map((data, id) => <Recordatorio key={id} {...data} />)
        ) : (
          <ErrorEmpty />
        )}
      </Col>

      <Col xs={12} md={6} className="Component__recordatorio__otros">
        <h4>Otros Recordatorios</h4>
        {dataOtros && dataOtros.length > 0 ? (
          dataOtros.map((data, id) => <Recordatorio key={id} {...data} />)
        ) : (
          <ErrorEmpty />
        )}
      </Col>
    </Row>
  );
};

export default ListRecordatorios;
