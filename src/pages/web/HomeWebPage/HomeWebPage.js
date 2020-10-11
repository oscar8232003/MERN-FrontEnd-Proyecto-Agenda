import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuthHook from "../../../Hooks/UseAuthHook";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

//SPINNER
import Spin from "../../../components/Spin";

//CSS
import "./HomeWebPage.css";

//IMG
import ImgPortada from "../../../assets/webHome.svg";
import Finanzas from "../../../assets/Cards/finanzas.jpg";
import Recordatorios from "../../../assets/Cards/recordatorios.jpg";
import OcioImage from "../../../assets/Cards/ocio.jpg";
import comoFunciona from "../../../assets/comoFunciona/comoFunciona.svg";

//EMOJIS
import {
  DineroConAlas,
  Libros,
  Dinero,
  Recordatorio,
  Ocio,
  Guiño,
  Email,
  DedoIzquierda,
  CaraGafasSol,
  Punch,
} from "../../../components/Emojis";

const HomeWebPage = () => {
  const { user, isLoading } = UseAuthHook();

  if (isLoading) {
    return <Spin />;
  }

  AOS.init({
    duration: 1000,
  });

  return (
    <>
      <Helmet>
        <title>Inicio</title>
      </Helmet>
      <Row className="justify-content-center homeWebPage-row">
        <Col xs={12} sm={10} xl={9} className="homeWebPage-col">
          {/*SECCION DE INTRODUCCION*/}
          <Row className="introduccion-row">
            <Col className="Introduccion-principal" xs={12} lg={7} xl={6}>
              <h1>
                Tu Agenda multipropósito <Libros />
              </h1>
              <p>
                Todo lo que necesites para administrar tu dia a dia en un solo
                lugar, que esperas para probarla, es totalmente gratis!{" "}
                <DineroConAlas />
              </p>
              {user ? (
                <button>
                  <Link to="/client">Ir a mi agenda!</Link>
                </button>
              ) : (
                <button>
                  <Link to="/register">Empezar ahora</Link>
                </button>
              )}
            </Col>
            <Col
              className="Introduccion-secondary"
              data-aos="flip-left"
              xs={12}
              lg={5}
              xl={6}
            >
              <img src={ImgPortada} alt="ImgPortada" />
            </Col>
          </Row>

          {/*SECCION DE CARD*/}
          <Row className="card-row justify-content-center">
            <Col xs={12} className="card-first-title">
              <h2>Algunas de nuestras herramientas</h2>
            </Col>

            <Col
              className="card-col"
              data-aos="flip-left"
              xs={12}
              sm={9}
              md={6}
              lg={4}
              style={{ maxWidth: "350px" }}
            >
              <Card className="card-container">
                <Card.Img variant="top" src={Finanzas} />
                <Card.Body className="card-body card-finanzas">
                  <Card.Title>
                    <h3 className="card-title">
                      Finanzas <Dinero />
                    </h3>
                  </Card.Title>
                  <Card.Text>
                    <p className="card-text">
                      <strong> Podrás gestionar tus ingresos o gastos </strong>
                      como tú lo prefieras, de una forma divertida, visual y sin
                      perder la cabeza en el intento, tratamos de que tu gestión
                      diaria sobre el dinero sea lo más fácil posible
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col
              className="card-col"
              data-aos="flip-down"
              xs={12}
              sm={9}
              md={6}
              lg={4}
              style={{ maxWidth: "350px" }}
            >
              <Card className="card-container">
                <Card.Img variant="top" src={Recordatorios} />
                <Card.Body className="card-body card-recordatorios">
                  <Card.Title>
                    <h3 className="card-title">
                      Recordatorios <Recordatorio />
                    </h3>
                  </Card.Title>
                  <Card.Text>
                    <p className="card-text">
                      No te a pasado a veces que una alarma en tu smartphone es
                      algo molesta solo para recordarte algo?, bueno aquí
                      pensamos en ti y queremos que los recordatorios de tus
                      eventos te sean lo mas{" "}
                      <strong>fácil, simple y bonito en tu vida</strong>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col
              className="card-col"
              data-aos="flip-right"
              xs={12}
              sm={9}
              md={6}
              lg={4}
              style={{ maxWidth: "350px" }}
            >
              <Card className="card-container">
                <Card.Img variant="top" src={OcioImage} />
                <Card.Body className="card-body card-listas">
                  <Card.Title>
                    <h3 className="card-title">
                      Entretenimiento <Ocio />
                    </h3>
                  </Card.Title>
                  <Card.Text>
                    <p className="card-text">
                      Todo tenemos un rato libre en donde nos ponemos a jugar,
                      leer o ver alguna serie, pero en nuestro caso lo mejor que
                      podemos hacer es saber que series estamos viendo y en que
                      capitulo quedamos de ver, podras organizar tu ocio sin
                      problemas
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/*SECCION DE FUNCIONAMIENTO*/}
          <Row className="funcionamiento-row">
            <Col xs={12} className="funcionamiento-col-title">
              <h2>¿Como Funciona?</h2>
            </Col>

            <Col xs={12} className="funcionamiento-col-base" data-aos="fade-up">
              <Col
                className="funcionamiento-col-base__img d-none d-md-flex"
                md={6}
                lg={6}
              >
                <img src={comoFunciona} alt="comoFunciona" />
              </Col>

              <Col
                className="funcionamiento-col-base__paragraph"
                xs={12}
                md={6}
                lg={5}
              >
                <h3>
                  Simple y Facil <Guiño />
                </h3>
                {user ? (
                  <p>
                    Ya tienes tu cuenta creada ahora solo necesitar ir al sitio
                    princiapl, puedes ir{" "}
                    <Link to="/client">Aquí para ir al sitio principal</Link>{" "}
                    <DedoIzquierda />
                  </p>
                ) : (
                  <>
                    <p>
                      <strong>1°-</strong> Primero que todo necesitas tu cuenta,
                      puedes ir{" "}
                      <Link to="/register">Aquí para registrarte</Link>{" "}
                      <DedoIzquierda />
                    </p>
                    <p>
                      <strong>2°-</strong> Despues validar tu cuenta con un link
                      en tu correo electronico <Email />
                    </p>
                    <p>
                      <strong>3°-</strong> Listo!, Ahora inicia sesion con tu
                      cuenta y podras acceder a la aplicacion <CaraGafasSol />
                    </p>
                  </>
                )}

                <p>
                  Te aparecerán las diversas funcionalidades que tenemos para ti
                  dentro de la aplicación,{" "}
                  <strong>
                    no temas en meter mano en la aplicacion, cuando uno se
                    adentra dentro de algo nuevo es cuando uno aprende algo de
                    verdad. <Punch />
                  </strong>
                </p>
              </Col>
            </Col>
          </Row>

          {/*LAST SECCION */}
          <Row className="justify-content-center last-row">
            <Col xs={12} md={6} className="last-col">
              {user ? (
                <>
                  <h2 data-aos="flip-left">
                    Ahora que sabes que puedes hacer en la agenda
                  </h2>
                  <h2 data-aos="flip-right">
                    Que esperas para ir a usarlad <CaraGafasSol />
                  </h2>
                  <button data-aos="fade-up">
                    <Link to="/client">Ir a mi Agenda</Link>
                  </button>
                </>
              ) : (
                <>
                  <h2 data-aos="fade-down-right">
                    Sabiendo todo eso, te nos unes?
                  </h2>
                  <h2 data-aos="fade-up-left">
                    Solo faltas tu <CaraGafasSol />
                  </h2>
                  <button data-aos="fade-up">
                    <Link to="/register">Registrarse</Link>
                  </button>
                </>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default HomeWebPage;
