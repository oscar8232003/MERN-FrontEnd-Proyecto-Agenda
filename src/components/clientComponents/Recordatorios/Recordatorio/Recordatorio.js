import React from "react";
import { Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";

//CSS
import "./Recordatorio.css";

//Emojis
import { Alert0, Alert1, Alert2, Fantasma } from "../../../Emojis";

//Buttons
import {
  EditSmallButton,
  DeleteSmallButton,
} from "../../../ComponentsHelpers/Buttons/Buttons";

//Components
import EditRecordatorios from "../EditRecordatorios";

//Helper
import { verifyDate } from "../../../../helpers/FormatDates";

const Recordatorio = (props) => {
  const {
    RecordatoriosPage,
    title,
    range,
    date,
    active,
    setModalContent,
    setModalShow,
    setModalTitle,
    setReload,
    toast,
    user,
  } = props;

  const colors = {
    veryImportant: {
      color: "rgb(142 0 13)",
      background: "#f8d7da",
      backgroundDate: "rgb(255 178 185)",
    },
    important: {
      color: "rgb(76 57 2)",
      background: "rgb(255 234 167)",
      backgroundDate: "rgb(255 219 106)",
    },
    normal: {
      color: "rgb(0 29 60)",
      background: "rgb(161 206 253",
      backgroundDate: "rgb(116 184 255)",
    },
    pasados: {
      color: "rgb(0 0 0)",
      background: "rgb(177 182 187)",
      backgroundDate: "rgb(148 153 158)",
    },
  };

  let color;
  if (verifyDate(date) && active) {
    color = colors[range];
  } else {
    color = colors.pasados;
  }

  const editRecordatorios = () => {
    setModalContent(
      <EditRecordatorios
        toast={toast.info}
        user={user}
        setReload={setReload}
        setModalShow={setModalShow}
        date={date}
        range={range}
        title={title}
        active={active}
      />
    );
    setModalTitle("Editar recordatorio");
    setModalShow(true);
  };

  const removeRecordatorios = () => {
    Swal.fire({
      title: "Estas seguro de eliminar este recordatorio?",
      text: "si lo eliminas no se podra recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0077e6",
      cancelButtonColor: "#c72336",
      confirmButtonText: "Si, borralo",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setReload(true);
        Swal.fire(
          "Borrado!",
          "El recordatorio a sido eliminado satisftoriamente",
          "success"
        );
      }
    });
  };

  const tamañoCol = RecordatoriosPage
    ? {
        cuerpo: {
          xs: 12,
          sm: 7,
          md: 5,
          lg: 6,
          xl: 7,
        },
        fecha: {
          xs: 12,
          sm: 3,
          md: 5,
          lg: 4,
          xl: 3,
        },
      }
    : {
        cuerpo: {
          xs: 12,
          sm: 9,
          md: 7,
          lg: 8,
          xl: 9,
        },
        fecha: {
          xs: 12,
          sm: 3,
          md: 5,
          lg: 4,
          xl: 3,
        },
      };

  return (
    <Row
      className="Recordatorio__alert"
      style={{ color: color.color, background: color.background }}
    >
      <Col
        {...tamañoCol.cuerpo}
        className="pl-0 pr-0 Recordatorio__alert__paragraph"
      >
        {range === "veryImportant" && active && (
          <p>
            <Alert2 /> {title} {"  "}
          </p>
        )}
        {range === "important" && active && (
          <p>
            <Alert1 /> {"  "}
            {title} {"  "}
          </p>
        )}
        {range === "normal" && active && (
          <p>
            <Alert0 /> {"  "}
            {title} {"  "}
          </p>
        )}

        {!active && (
          <p>
            <Fantasma /> {"  "}
            {title} {"  "}
          </p>
        )}
      </Col>
      <Col {...tamañoCol.fecha} className="pr-0 Recordatorio__alert__date">
        <p
          className="Recordatorio__alert__date--date"
          style={{ background: color.backgroundDate }}
        >
          {date}
        </p>
      </Col>

      {RecordatoriosPage && (
        <Col
          xs={12}
          sm={2}
          md={2}
          lg={2}
          xl={2}
          className="Recordatorio__alert__buttons"
        >
          <EditSmallButton
            action={editRecordatorios}
            styles={{ marginRight: "0px", marginBottom: "5px" }}
          />
          <DeleteSmallButton action={removeRecordatorios} />
        </Col>
      )}
    </Row>
  );
};

export default Recordatorio;
