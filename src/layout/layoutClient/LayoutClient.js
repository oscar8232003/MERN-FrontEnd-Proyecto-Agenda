import React from "react";
import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import UseAuthHook from "../../Hooks/UseAuthHook";
import { Redirect, Link } from "react-router-dom";

//Components
import Spin from "../../components/Spin";
import { logout } from "../../helpers/jwtHelper";

//CSS
import "./LayoutClient.css";

//IMG
import Logo from "../../assets/logo.png";
import iconoUser from "../../assets/icono-user.jpg";

//Emojis
import {
  Dinero,
  Recordatorio,
  Smile,
  Home,
  Ocio,
  CaraGafasSol,
  Anime,
  Manga,
  Calendario,
} from "../../components/Emojis";

const LayoutClient = ({ children }) => {
  const { user, isLoading } = UseAuthHook();
  /*
  const user = {
    userID: 1,
    name: "Oscar",
    lastname: "Valenzuela",
    email: "oavr.18@gmail.com",
    password: "oskar5524524",
    role: "client",
    avatar: "",
  };
  */
  if (!user && isLoading) {
    return <Spin />;
  }

  if (!user && !isLoading) {
    return (
      <>
        <Redirect to="/" />
      </>
    );
  }

  const desconectar = () => {
    logout();
    window.location.reload();
  };

  return (
    <Container fluid className="layoutClient__container">
      <Row>
        {/*SIDEBAR*/}
        <Col lg={2} className="layoutClient__sideBar d-none d-lg-block">
          <Nav activeKey="/" className="flex-column layoutClient__sideBar__nav">
            <div className="layoutClient__sideBar__nav__logo">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <Link to="/client" className="nav-link">
              <Home /> Inicio
            </Link>
            <Link to="/client/ocio" className="nav-link Padre">
              <Ocio /> Ocio
            </Link>
            <Link to="/client/ocio" className="nav-link Hijo">
              <Anime /> Series/Anime
            </Link>
            <Link to="/client/ocio" className="nav-link Hijo">
              <Manga /> Manga/Comics
            </Link>
            <Link to="/client/ocio" className="nav-link Hijo Ultimo-Hijo">
              <Calendario /> Calendario
            </Link>
            {/*}
            <Link to="/client/finanzas" className="nav-link">
              <Dinero /> Finanzas
            </Link>
            {*/}
            <Link to="/client/recordatorios" className="nav-link">
              <Recordatorio /> Recordatorios
            </Link>
            <Link to={`/client/user/${user.userID}`} className="nav-link">
              <Smile /> Mi Perfil
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

            {/*NAVBAR*/}
            <Navbar.Collapse id="responsive-navbar-nav">
              {/*MENU */}
              <Nav className="layoutClient__client__navbar__nav0 d-lg-none">
                <Link to="/client" className="nav-link">
                  <Home /> Inicio
                </Link>

                <NavDropdown
                  title="Entretenimiento"
                  id="basic-nav-dropdown"
                  className="nav-link d-none d-md-block"
                  style={{ paddingTop: "5px" }}
                >
                  <Link to="/client/ocio" className="nav-link">
                    <Ocio /> Ocio
                  </Link>
                  <Link to="/client/ocio" className="nav-link">
                    <Anime /> Series/Anime
                  </Link>
                  <Link to="/client/ocio" className="nav-link">
                    <Manga /> Manga/Comics
                  </Link>
                  <Link to="/client/ocio" className="nav-link">
                    <Calendario /> Calendario
                  </Link>
                </NavDropdown>

                {/*}
                <Link to="/client/finanzas" className="nav-link">
                  <Dinero /> Finanzas
                </Link>
                {*/}
                <Link to="/client/recordatorios" className="nav-link">
                  <Recordatorio /> Recordatorios
                </Link>
                {user.role === "admin" && (
                  <Link to="/admin" className="nav-link">
                    <CaraGafasSol /> Admin
                  </Link>
                )}
              </Nav>
              {/*FIN MENU*/}

              {/*USER RIGHT PROFILE BIG*/}
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
                  <Link
                    to={`/client/user/${user.userID}`}
                    className="dropdown-item"
                  >
                    <Smile /> Mi Perfil
                  </Link>
                  <NavDropdown.Divider />
                  <button
                    className="layoutClient__client__navbar--button"
                    onClick={() => desconectar()}
                  >
                    Salir
                  </button>
                </NavDropdown>
              </Nav>
              {/*FIN USER RIGHT PROFILE BIG*/}

              {/*USER RIGHT PROFILE SMALL*/}
              <Nav className="ml-auto layoutClient__client__navbar__nav3 d-md-none">
                <Link to="/client/ocio" className="nav-link">
                  <Ocio /> Ocio
                </Link>
                <Link to="/client/ocio" className="nav-link">
                  <Anime /> Series/Anime
                </Link>
                <Link to="/client/ocio" className="nav-link">
                  <Manga /> Manga y Comics
                </Link>
                <Link to="/client/ocio" className="nav-link">
                  <Calendario /> Calendario
                </Link>

                <Link to={`/client/user/${user.userID}`} className="nav-link">
                  <Smile /> Mi Perfil
                </Link>

                <button
                  className="layoutClient__client__navbar--button"
                  onClick={() => {
                    desconectar();
                  }}
                >
                  Salir
                </button>
              </Nav>
              {/*FIN USER RIGHT PROFILE SMALL*/}
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
