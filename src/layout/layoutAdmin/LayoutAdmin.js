import React from "react";
import UseAuthHook from "../../Hooks/UseAuthHook";
import { Redirect, Link } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";

//Components
import Spin from "../../components/Spin";

//CSS
import "./LayoutAdmin.css";

//IMG
import Logo from "../../assets/logo.png";
import iconoUser from "../../assets/icono-user.jpg";

//Emojis
import { Familia, CaraGafasSol } from "../../components/Emojis";

const LayoutAdmin = ({ children }) => {
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

  if (user && user.role === "client") {
    return (
      <>
        <Redirect to="/client" />
      </>
    );
  }

  return (
    <Container fluid className="layoutAdmin__container">
      <Row>
        {/*SIDEBAR*/}
        <Col lg={2} className="layoutAdmin__sideBar d-none d-lg-block">
          <Nav activeKey="/" className="flex-column layoutAdmin__sideBar__nav">
            <div className="layoutAdmin__sideBar__nav__logo">
              <img src={Logo} alt="logo" />
            </div>
            <Link to="/admin/users" className="nav-link">
              <Familia /> Usuarios
            </Link>
            <Link to="/admin" className="nav-link">
              <CaraGafasSol /> Admin
            </Link>
          </Nav>
        </Col>
        {/*FIN SIDEBAR*/}

        <Col xs={12} lg={10} className="layoutAdmin__admin">
          {/*NAVBAR*/}
          <Navbar
            collapseOnSelect
            expand="md"
            variant="light"
            className="layoutAdmin__admin__navbar"
          >
            {/*NO TOCAR*/}
            <Navbar.Brand className="d-md-none layoutAdmin__admin__navbar__brand">
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
              <Nav className="layoutAdmin__admin__navbar__nav0 d-lg-none">
                <Link to="/admin/users" className="nav-link">
                  <Familia /> Usuarios
                </Link>
                <Link to="/admin" className="nav-link">
                  <CaraGafasSol /> Admin
                </Link>
              </Nav>

              <Nav className="ml-auto layoutAdmin__admin__navbar__nav1 d-none d-md-flex">
                {user.avatar ? (
                  <img src={iconoUser} alt="icono-user" />
                ) : (
                  <img src={iconoUser} alt="icono-user" />
                )}

                <NavDropdown
                  title={`${user.name} ${user.lastname}`}
                  id="collasible-nav-dropdown"
                >
                  <button className="layoutAdmin__admin__navbar--button">
                    Salir
                  </button>
                </NavDropdown>
              </Nav>

              <Nav className="ml-auto layoutAdmin__admin__navbar__nav3 d-md-none">
                <button className="layoutAdmin__admin__navbar--button">
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

export default LayoutAdmin;
