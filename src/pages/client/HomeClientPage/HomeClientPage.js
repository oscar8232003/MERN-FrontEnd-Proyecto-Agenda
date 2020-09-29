import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Row, Col, Alert, Toast } from "react-bootstrap";
import UseAuthHook from "../../../Hooks/UseAuthHook";

//CSS
import "./HomeClientPage.css";

//Emojis
import { Recordatorio, Dinero, Lista } from "../../../components/Emojis";

//Components
import GraficoMovimientos from "../../../components/clientComponents/Graficos/GraficoMovimientos";
import ListRecordatorios from "../../../components/clientComponents/Recordatorios/ListRecordatorios";
import ListFinanzas from "../../../components/clientComponents/Finanzas/ListFinanzas";
import ListListas from "../../../components/clientComponents/Listas/ListListas";

const HomeClientPage = () => {
  const { user } = UseAuthHook();
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

  const buildChart = () => {
    const bars = [
      {
        barra: "Ingresos",
        color: "#9a323e",
      },
      {
        barra: "Egresos",
        color: "#005cb3",
      },
    ];

    const data = [
      {
        name: "Enero",
        Ingresos: 4000,
        Egresos: 2400,
      },
      {
        name: "Febero",
        Ingresos: 3000,
        Egresos: 1398,
      },
      {
        name: "Marzo",
        Ingresos: 2000,
        Egresos: 9800,
      },
      {
        name: "Abril",
        Ingresos: 2780,
        Egresos: 3908,
      },
      {
        name: "Mayo",
        Ingresos: 1890,
        Egresos: 4800,
      },
      {
        name: "Junio",
        Ingresos: 2390,
        Egresos: 3800,
      },
    ];

    return { bars, data };
  };

  const dataRecordatorioImportante = [
    "danger",
    "danger",
    "danger",
    "danger",
    "danger",
  ];
  const dataRecordatorioOtros = [
    "warning",
    "warning",
    "warning",
    "primary",
    "primary",
  ];

  const dataFinanzas = ["danger", "danger", "danger", "danger", "danger"];

  const dataListas = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <Helmet>
        <title>Inicio Cliente</title>
      </Helmet>

      {/*HEADER*/}
      <Row className="HomeClient__container__row-header">
        <Col xs={12} className="HomeClient__container__header">
          <h1>Bienvenido {user.name}</h1>
          <h4>Revisa la última información</h4>
        </Col>
        <Row className="HomeClient__container__header__info">
          <Col>
            <p>Movimientos este mes</p>
            <h3>50</h3>
          </Col>

          <Col>
            <p>Ingresos este mes</p>
            <h3>$500000</h3>
          </Col>

          <Col>
            <p>Egresos este mes</p>
            <h3>$500000</h3>
          </Col>

          <Col>
            <p>Recordatorios prox. 3 dias</p>
            <h3>10</h3>
          </Col>
        </Row>
      </Row>
      {/*FIN HEADER*/}

      {/*GRAFICO*/}
      <Row className="HomeClient__container__row-grafico-movimientos">
        <Col
          xs={12}
          className="HomeClient__container__grafico-movimientos-titulo"
        >
          <h3>Movimientos</h3>
        </Col>
        <Col xs={12} className="HomeClient__container__grafico-movimientos">
          <GraficoMovimientos {...buildChart()} />
        </Col>
      </Row>
      {/*FIN GRAFICO*/}

      {/*RECORDATORIOS*/}
      <ListRecordatorios
        dataImportante={dataRecordatorioImportante}
        dataOtros={dataRecordatorioOtros}
      >
        <Link
          to="/client/recordatorios"
          className="HomeClient__container__recordatorios-title"
        >
          <h3>
            Recordatorios <Recordatorio />
          </h3>
        </Link>
      </ListRecordatorios>
      {/*FIN RECORDATORIOS*/}

      {/*FINANZAS*/}
      <ListFinanzas data={dataFinanzas}>
        <div className="HomeClient__container__finanzas">
          <Link to="/client/finanzas">
            <h3>
              Finanzas <Dinero />
            </h3>
          </Link>
          <h4>Ultimos Movimientos</h4>
        </div>
      </ListFinanzas>
      {/*FIN FINANZAS*/}

      {/*LISTAS*/}
      <ListListas data={dataListas}>
        <div className="HomeClient__container__listas">
          <Link to="/client/listas">
            <h3>
              Listas <Lista />
            </h3>
          </Link>
          <h4>Mis ultimas listas activas</h4>
        </div>
      </ListListas>
      {/*FIN LISTAS*/}
    </>
  );
};

export default HomeClientPage;
