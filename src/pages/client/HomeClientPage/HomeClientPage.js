import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import UseAuthHook from "../../../Hooks/UseAuthHook";

//CSS
import "./HomeClientPage.css";

//Emojis
import { Recordatorio, Dinero } from "../../../components/Emojis";

//Components
//import GraficoMovimientos from "../../../components/clientComponents/Graficos/GraficoMovimientos";
import ListRecordatorios from "../../../components/clientComponents/Recordatorios/ListRecordatorios";
import ListFinanzas from "../../../components/clientComponents/Finanzas/ListFinanzas";
//import ListListas from "../../../components/clientComponents/Listas/ListListas";
import HeaderComponent from "../../../components/ComponentsHelpers/HeaderComponent";

//Helpers
import { transformDate } from "../../../helpers/FormatDates";

const HomeClientPage = () => {
  const { user } = UseAuthHook();
  const [recordatorios, setRecordatorio] = useState({});
  const [dataHeader, setDataHeader] = useState(null);

  //TEST
  const hoy = transformDate(new Date());

  useEffect(() => {
    const dataRecordatorioImportante = [
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "veryImportant",
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "veryImportant",
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "veryImportant",
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "veryImportant",
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "veryImportant",
      },
    ];
    const dataRecordatorioOtros = [
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "important",
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "important",
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "normal",
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "normal",
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "normal",
      },
    ];

    const dataRecordatorio = {
      dataImportante: dataRecordatorioImportante,
      dataOtros: dataRecordatorioOtros,
    };

    setRecordatorio(dataRecordatorio);

    const dataHeaderInfo = [
      {
        title: "Movimientos este mes",
        mount: "50",
      },
      {
        title: "Ingresos este mes",
        mount: "$500000",
      },
      {
        title: "Egresos este mes",
        mount: "$500000",
      },
      {
        title: "Recordatorios prox. 3 dias",
        mount: "3",
      },
    ];

    setDataHeader(dataHeaderInfo);
  }, []);

  /*
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
  */

  const dataFinanzas = [
    {
      tipo: "Ingreso",
      nombre: "Peguita de desarrollo",
      monto: "250000",
      categoria: "Trabajo",
      fecha: "29/09/2020",
    },
    {
      tipo: "Egreso",
      nombre: "Pago de cuenta de luz",
      monto: "25000",
      categoria: "Gastos Comunes",
      fecha: "29/09/2020",
    },
    {
      tipo: "Ingreso",
      nombre: "Ganancia de inversion",
      monto: "25000",
      categoria: "Inversion",
      fecha: "29/09/2020",
    },
    {
      tipo: "Egreso",
      nombre: "Compra de comida en Wendys",
      monto: "10000",
      categoria: "Comida",
      fecha: "29/09/2020",
    },
    {
      tipo: "Ingreso",
      nombre: "Trabajo de desarrollador",
      monto: "25000",
      categoria: "Trabajo",
      fecha: "29/09/2020",
    },
    {
      tipo: "Egreso",
      nombre: "Regalo para mi wachita rika",
      monto: "30000",
      categoria: "Regalos",
      fecha: "29/09/2020",
    },
  ];

  /*
  const dataListas = [
    {
      title: "Compra en la Farmacia",
      category: "Farmacia",
      mount: "0",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
      date: "29/09/2020",
    },
    {
      title: "Compra en la Farmacia",
      category: "Farmacia",
      mount: "0",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
      date: "29/09/2020",
      color: "#28a745",
    },
    {
      title: "Compra en la Farmacia",
      category: "Farmacia",
      mount: "0",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
      date: "29/09/2020",
      color: "#9a323e",
    },
    {
      title: "Compra en la Farmacia",
      category: "Farmacia",
      mount: "0",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
      date: "29/09/2020",
      color: "#28a745",
    },
    {
      title: "Compra en la Farmacia",
      category: "Farmacia",
      mount: "0",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
      date: "29/09/2020",
      color: "#9a323e",
    },
    {
      title: "Compra en la Farmacia",
      category: "Farmacia",
      mount: "0",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
      date: "29/09/2020",
      color: "#28a745",
    },
    {
      title: "Compra en la Farmacia",
      category: "Farmacia",
      mount: "0",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
      date: "29/09/2020",
      color: "#9a323e",
    },
    {
      title: "Compra en la Farmacia",
      category: "Farmacia",
      mount: "0",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
      date: "29/09/2020",
    },
  ];
  */

  return (
    <>
      <Helmet>
        <title>Inicio Cliente</title>
      </Helmet>

      {/*HEADER*/}
      <HeaderComponent data={dataHeader}>
        <h1>Bienvenido {user.name}</h1>
        <h4>Revisa la última información</h4>
      </HeaderComponent>
      {/*FIN HEADER*/}

      {/*GRAFICO
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
      FIN GRAFICO*/}

      {/*RECORDATORIOS*/}
      <ListRecordatorios
        dataImportante={recordatorios.dataImportante}
        dataOtros={recordatorios.dataOtros}
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

      {/*LISTAS
      <ListListas data={dataListas} states={states}>
        <div className="HomeClient__container__listas">
          <Link to="/client/listas">
            <h3>
              Listas
            </h3>
          </Link>
          <h4>Mis ultimas listas activas</h4>
        </div>
      </ListListas>
      FIN LISTAS*/}
    </>
  );
};

export default HomeClientPage;
