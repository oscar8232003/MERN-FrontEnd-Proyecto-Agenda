import React from "react";
import { Row, Col } from "react-bootstrap";

//CSS
import "./ListRecordatorios.css";

//Component
import ErrorEmpty from "../../Tools/ErrorEmpty";
import Recordatorio from "../Recordatorio";

const ListRecordatorios = (props) => {
  const {
    children,
    dataImportante,
    dataOtros,
    dataMixta,
    dataPasada,
    RecordatoriosPage,
    states,
  } = props;
  return (
    <Row className="Component__row-recordatorios">
      <Col xs={12} className="Component__recordatorios-title">
        {children}
      </Col>

      {dataImportante && (
        <Col xs={12} md={6} className="Component__recordatorio__importantes ">
          <h4>Muy Importantes</h4>
          {dataImportante && dataImportante.length > 0 ? (
            dataImportante.map((data, id) => (
              <Recordatorio
                key={id}
                {...data}
                {...states}
                RecordatoriosPage={RecordatoriosPage}
              />
            ))
          ) : (
            <ErrorEmpty />
          )}
        </Col>
      )}

      {dataOtros && (
        <Col xs={12} md={6} className="Component__recordatorio__otros">
          <h4>Importantes y Normales</h4>
          {dataOtros && dataOtros.length > 0 ? (
            dataOtros.map((data, id) => (
              <Recordatorio
                key={id}
                {...data}
                {...states}
                RecordatoriosPage={RecordatoriosPage}
              />
            ))
          ) : (
            <ErrorEmpty />
          )}
        </Col>
      )}

      {dataMixta && (
        <Col xs={12} md={6} className="Component__recordatorio__importantes">
          <h4>Recordatorios Actuales</h4>
          {dataMixta && dataMixta.length > 0 ? (
            dataMixta.map((data, id) => (
              <Recordatorio
                key={id}
                {...data}
                {...states}
                RecordatoriosPage={RecordatoriosPage}
              />
            ))
          ) : (
            <ErrorEmpty />
          )}
        </Col>
      )}

      {dataPasada && (
        <Col xs={12} md={6} className="Component__recordatorio__otros">
          <h4>Recordatorios Pasados</h4>
          {dataPasada && dataPasada.length > 0 ? (
            dataPasada.map((data, id) => (
              <Recordatorio
                key={id}
                {...data}
                {...states}
                RecordatoriosPage={RecordatoriosPage}
              />
            ))
          ) : (
            <ErrorEmpty />
          )}
        </Col>
      )}
    </Row>
  );
};

export default ListRecordatorios;
