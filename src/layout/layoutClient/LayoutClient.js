import React from "react";
import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import UseAuthHook from "../../Hooks/UseAuthHook";
import { Redirect, Link } from "react-router-dom";

//Components
import Spin from "../../components/Spin";

//CSS
import "./LayoutClient.css";

//IMG
import Logo from "../../assets/logo.png";
import iconoUser from "../../assets/icono-user.jpg";

//Emojis
import {
  Dinero,
  Recordatorio,
  Lista,
  Smile,
  Cambios,
  CaraGafasSol,
} from "../../components/Emojis";

const LayoutClient = ({ children }) => {
  const { user, isLoading } = UseAuthHook();

  if (!user && isLoading) {
    return <Spin />;
  }

  if (!user && !isLoading) {
    return (
      <>
        <Redirect to="/login" />
      </>
    );
  }

  return (
    <Container fluid className="layoutClient__container">
      <Row>
        {/*SIDEBAR*/}
        <Col lg={2} className="layoutClient__sideBar d-none d-lg-block">
          <Nav activeKey="/" className="flex-column layoutClient__sideBar__nav">
            <div className="layoutClient__sideBar__nav__logo">
              <img src={Logo} alt="logo" />
            </div>
            <Link to="/client/finanzas" className="nav-link">
              <Dinero /> Finanzas
            </Link>
            <Link to="/client/recordatorios" className="nav-link">
              <Recordatorio /> Recordatorios
            </Link>
            <Link to="/client/listas" className="nav-link">
              <Lista /> Listas
            </Link>
            <Link to="/client" className="nav-link">
              <Cambios /> Cambios
            </Link>
            {user.role === "admin" && (
              <Link to="/admin" className="nav-link">
                <CaraGafasSol /> Admin
              </Link>
            )}
          </Nav>
        </Col>
        {/*FIN SIDEBAR*/}

        <Col xs={12} lg={10} className="layoutClient__client">
          {/*NAVBAR*/}
          <Navbar
            collapseOnSelect
            expand="md"
            variant="light"
            className="layoutClient__client__navbar"
          >
            {/*NO TOCAR*/}
            <Navbar.Brand className="d-md-none layoutClient__client__navbar__brand">
              <p>
                {user.avatar ? (
                  <img src={iconoUser} alt="icono-user" />
                ) : (
                  <img src={iconoUser} alt="icono-user" />
                )}
                {`${user.name} ${user.lastname}`}
              </p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            {/*NO TOCAR*/}

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="layoutClient__client__navbar__nav0 d-lg-none">
                <Link to="/client/finanzas" className="nav-link">
                  <Dinero /> Finanzas
                </Link>
                <Link to="/client/recordatorios" className="nav-link">
                  <Recordatorio /> Recordatorios
                </Link>
                <Link to="/client/listas" className="nav-link">
                  <Lista /> Listas
                </Link>
                <Link to="/client" className="nav-link">
                  <Cambios /> Cambios
                </Link>
                {user.role === "admin" && (
                  <Link to="/admin" className="nav-link">
                    <CaraGafasSol /> Admin
                  </Link>
                )}
              </Nav>

              <Nav className="ml-auto layoutClient__client__navbar__nav1 d-none d-md-flex">
                {user.avatar ? (
                  <img src={iconoUser} alt="icono-user" />
                ) : (
                  <img src={iconoUser} alt="icono-user" />
                )}

                <NavDropdown
                  title={`${user.name} ${user.lastname}`}
                  id="collasible-nav-dropdown"
                >
                  <Link to="/client" className="dropdown-item">
                    <Smile /> Editar Perfil
                  </Link>
                  <NavDropdown.Divider />
                  <button className="layoutClient__client__navbar--button">
                    Salir
                  </button>
                </NavDropdown>
              </Nav>

              <Nav className="ml-auto layoutClient__client__navbar__nav3 d-md-none">
                <Link to="/client" className="nav-link">
                  <Smile /> Editar Perfil
                </Link>

                <button className="layoutClient__client__navbar--button">
                  Salir
                </button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/*FIN NAVBAR*/}
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default LayoutClient;
