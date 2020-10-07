import React from "react";
import { Row, Col } from "react-bootstrap";

//CSS
import "./Recordatorio.css";

//Emojis
import { Alert0, Alert1, Alert2 } from "../../../Emojis";

const Recordatorio = (props) => {
  const { title, range, date } = props;

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
  };

  const color = colors[range];

  return (
    <Row
      className="Recordatorio__alert"
      style={{ color: color.color, background: color.background }}
    >
      <Col
        xs={12}
        sm={9}
        md={7}
        lg={8}
        xl={9}
        className="pl-0 pr-0 Recordatorio__alert__paragraph"
      >
        {range === "veryImportant" && (
          <p>
            <Alert2 /> {"  "}
            {title} {"  "}
            <Alert2 />
          </p>
        )}
        {range === "important" && (
          <p>
            <Alert1 /> {"  "}
            {title} {"  "} <Alert1 />
          </p>
        )}
        {range === "normal" && (
          <p>
            <Alert0 /> {"  "}
            {title} {"  "} <Alert0 />
          </p>
        )}
      </Col>
      <Col
        xs={12}
        sm={3}
        md={5}
        lg={4}
        xl={3}
        className="pr-0 Recordatorio__alert__date"
      >
        <p
          className="Recordatorio__alert__date--date"
          style={{ background: color.backgroundDate }}
        >
          {date}
        </p>
      </Col>
    </Row>
  );
};

export default Recordatorio;
