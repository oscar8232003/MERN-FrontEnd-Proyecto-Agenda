import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//CSS
import "./FooterComponent.css";

//LOGO
import LogoFooter from "../../../assets/logo-footer.png";

const FooterComponent = () => {
  return (
    <Row className="footer-row justify-content-center">
      <Col xs={12} sm={10} xl={9}>
        <Col xs={12} className="footer-col-social-networks">
          <img
            src={LogoFooter}
            alt="logo-footer"
            className="d-none d-md-block"
          />

          <h3>Desarrollado por Oscar Valenzuela 2020&copy;</h3>

          <div className="footer-col-social-networks__social-networks d-none d-sm-block">
            <Link to="/" className="facebook">
              <span className="icon-facebook-official"></span>
            </Link>
            <Link to="/" className="instagram">
              <span className="icon-instagram "></span>
            </Link>
            <Link to="/" className="whatsapp">
              <span className="icon-whatsapp"></span>
            </Link>
          </div>
        </Col>
      </Col>
    </Row>
  );
};

export default FooterComponent;
