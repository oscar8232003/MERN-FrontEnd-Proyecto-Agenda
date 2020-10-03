import React from "react";
import { Row, Col } from "react-bootstrap";

//CSS
import "./HeaderComponent.css";

const HeaderComponent = (props) => {
  const { data, children } = props;

  const spliceArray = (data) => {
    return data.slice(0, 4);
  };

  //Verifica si trae datos, si no trae queda blanco el componente
  const rowBackground = !data && "#ffffff";

  return (
    <Row
      className="HeaderComponent__container__row-header"
      style={{ background: rowBackground }}
    >
      <Col xs={12} className="HeaderComponent__container__title">
        {children}
      </Col>
      {data && (
        <Row className="HeaderComponent__container__header__info">
          {spliceArray(data).map((datos, index) => (
            <SubHeaderComponent key={index} {...datos} />
          ))}
        </Row>
      )}
    </Row>
  );
};

const SubHeaderComponent = (props) => {
  const { title, mount } = props;

  return (
    <Col>
      <p>{title}</p>
      <h3>{mount}</h3>
    </Col>
  );
};

export default HeaderComponent;
