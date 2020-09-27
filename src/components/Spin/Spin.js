import React from "react";
import { Row, Col } from "react-bootstrap";

import "./Spin.css";

const Spin = ({ background = "#001529", backgroundColor = "#ffffff" }) => {
  return (
    <Row className="justify-content-center spin-row" style={{ background }}>
      <Col xs={12}>
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1" style={{ backgroundColor }}></div>
          <div className="sk-cube sk-cube2" style={{ backgroundColor }}></div>
          <div className="sk-cube sk-cube3" style={{ backgroundColor }}></div>
          <div className="sk-cube sk-cube4" style={{ backgroundColor }}></div>
          <div className="sk-cube sk-cube5" style={{ backgroundColor }}></div>
          <div className="sk-cube sk-cube6" style={{ backgroundColor }}></div>
          <div className="sk-cube sk-cube7" style={{ backgroundColor }}></div>
          <div className="sk-cube sk-cube8" style={{ backgroundColor }}></div>
          <div className="sk-cube sk-cube9" style={{ backgroundColor }}></div>
        </div>
      </Col>
    </Row>
  );
};

export default Spin;
