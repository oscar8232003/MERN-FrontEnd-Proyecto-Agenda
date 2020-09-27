import React from "react";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import UseAuthHook from "../../../Hooks/UseAuthHook";
import { Link } from "react-router-dom";
import { logout } from "../../../helpers/jwtHelper";

//CSS
import "./HeaderComponent.css";

//Assets
import Logo from "../../../assets/logo.png";

const HeaderComponent = () => {
  const { user } = UseAuthHook();

  const desconectarse = () => {
    logout();
    window.location.reload();
  };

  return (
    <Row className="header-component-row justify-content-center">
      <Col xs={12} sm={10} xl={9} className="header-component-col">
        <Navbar expand="md" className="header-component-nav" variant="dark">
          <Navbar.Brand href="/">
            <img src={Logo} alt="Logo" className="header-component-nav-img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto header-component-nav-links">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
              <Link className="nav-link" to="/sobre-mi">
                Sobre Mi
              </Link>
              {user && (
                <Link className="nav-link" to="/client">
                  Panel Principal
                </Link>
              )}

              {user && user.role === "admin" && (
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              )}
            </Nav>
            <div className="header-component-nav-botonera">
              {user ? (
                <button
                  className="header-component-nav-botonera--leave"
                  onClick={() => desconectarse()}
                >
                  Leave
                </button>
              ) : (
                <>
                  <button className="header-component-nav-botonera--login">
                    <Link to="/login">Sign In</Link>
                  </button>
                  <button className="header-component-nav-botonera--register">
                    <Link to="/register">Sign Up</Link>
                  </button>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
};

export default HeaderComponent;
