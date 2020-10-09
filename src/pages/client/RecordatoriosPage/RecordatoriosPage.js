import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import UseAuthHook from "../../../Hooks/UseAuthHook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

//CSS
import "./RecordatoriosPage.css";

//Components
import HeaderComponent from "../../../components/ComponentsHelpers/HeaderComponent";
import Modalcomponent from "../../../components/ComponentsHelpers/ModalComponent";
import ListRecordatorios from "../../../components/clientComponents/Recordatorios/ListRecordatorios";
import { AddButton } from "../../../components/ComponentsHelpers/Buttons/Buttons";
import AddRecordatorios from "../../../components/clientComponents/Recordatorios/AddRecordatorios";
import SearchNav from "../../../components/ComponentsHelpers/SearchNav";

//Helper
import { transformDate } from "../../../helpers/FormatDates";

const RecordatoriosPage = () => {
  const { user } = UseAuthHook();
  //Modal
  const [modalContent, setModalContent] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  //volver a buscar
  const [reload, setReload] = useState(false);
  //Data
  const [dataHeaderState, setDataHeaderState] = useState(null);
  const [dataRecordatorios, setDataRecordatorios] = useState({});
  const [dataTotalRecordatorios, setDataTotalRecordatorios] = useState({});
  //Buscador
  const [search, setSearch] = useState("");

  //TEST
  const hoy = transformDate(new Date());

  useEffect(() => {
    const dataHeader = [
      {
        title: "Recordatorios Totales",
        mount: "50",
      },
      {
        title: "Recordatorios muy importantes",
        mount: "10",
      },
      {
        title: "Recordatorios importantes",
        mount: "20",
      },
      {
        title: "Recordatorios normales",
        mount: "20",
      },
    ];
    setDataHeaderState(dataHeader);

    const dataRecordatorioImportante = [
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "veryImportant",
        active: true,
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "veryImportant",
        active: true,
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "veryImportant",
        active: true,
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "veryImportant",
        active: true,
      },
    ];
    const dataRecordatorioOtros = [
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "important",
        active: true,
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "important",
        active: true,
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "normal",
        active: true,
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "normal",
        active: true,
      },
    ];

    const dataFirstListRecordatorios = {
      dataImportante: dataRecordatorioImportante,
      dataOtros: dataRecordatorioOtros,
    };

    setDataRecordatorios(dataFirstListRecordatorios);

    const dataRecordatoriosMixta = [
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "veryImportant",
        active: true,
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "veryImportant",
        active: true,
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "veryImportant",
        active: true,
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "veryImportant",
        active: true,
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "important",
        active: true,
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "important",
        active: true,
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "normal",
        active: true,
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "normal",
        active: true,
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "normal",
        active: true,
      },
      {
        title: "Mañana entrevista temprano",
        date: hoy,
        range: "veryImportant",
        active: true,
      },
    ];
    const dataRecordatorioPasada = [
      {
        title: "Mañana entrevista temprano",
        date: "04/10/2020",
        range: "veryImportant",
        active: true,
      },
      {
        title: "Mañana entrevista temprano",
        date: "04/10/2020",
        range: "normal",
        active: false,
      },
      {
        title: "Mañana entrevista temprano",
        date: "04/10/2020",
        range: "normal",
        active: false,
      },
      {
        title: "Mañana entrevista temprano",
        date: "04/10/2020",
        range: "normal",
        active: false,
      },
    ];

    const dataTotalListRecordatorios = {
      dataMixta: dataRecordatoriosMixta,
      dataPasada: dataRecordatorioPasada,
    };

    setDataTotalRecordatorios(dataTotalListRecordatorios);
  }, [reload]);

  useEffect(() => {
    if (reload) {
      setReload(false);
    }
  }, [reload]);

  useEffect(() => {
    if (search) {
      console.log("buscando");
    }
  }, [search]);

  const states = {
    setModalContent,
    setModalShow,
    setModalTitle,
    setReload,
    toast,
    user,
  };

  const addRecordatorio = () => {
    setModalTitle("Agregar nuevo Recordatorio");
    setModalContent(
      <AddRecordatorios
        setModalShow={setModalShow}
        setReload={setReload}
        toast={toast.success}
      />
    );
    setModalShow(true);
  };

  return (
    <>
      <Helmet>
        <title>Seccion de Recordatorios</title>
      </Helmet>

      <HeaderComponent data={dataHeaderState}>
        <h1>Seccion de Recordatorios</h1>
        <h4>Administracion de Recordatorios</h4>
      </HeaderComponent>

      <SearchNav valueSearch={setSearch}>
        <AddButton title="Nuevo Recordatorio" action={addRecordatorio} />
      </SearchNav>

      <ListRecordatorios
        {...dataRecordatorios}
        states={states}
        RecordatoriosPage={true}
      >
        <h3 className="RecordatoriosPage--Title">Proximos recordatorios</h3>
      </ListRecordatorios>

      <ListRecordatorios
        {...dataTotalRecordatorios}
        states={states}
        RecordatoriosPage={true}
      >
        <h3 className="RecordatoriosPage--Title">Lista de Recordatorios</h3>
      </ListRecordatorios>

      <Modalcomponent
        showModal={modalShow}
        closeModal={setModalShow}
        modalTitle={modalTitle}
      >
        {modalContent}
      </Modalcomponent>
      <ToastContainer />
    </>
  );
};

export default RecordatoriosPage;
