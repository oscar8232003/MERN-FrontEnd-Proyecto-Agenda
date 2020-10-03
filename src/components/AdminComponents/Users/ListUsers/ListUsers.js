import React from "react";
import { Row, Col } from "react-bootstrap";

//CSS
import "./ListUsers.css";

//Component
import ErrorEmpty from "../../../clientComponents/Tools/ErrorEmpty";
import User from "../User";

const ListUsers = (props) => {
  const { data, children, ...states } = props;
  return (
    <>
      <Row className="Component__row-users">
        <Col xs={12} className="Component__users">
          {children}
        </Col>
        <Col xs={12} className="Component__users__list">
          {data && data.length > 0 ? (
            data.map((DetailFinanza, index) => (
              <User data={DetailFinanza} key={index} {...states} />
            ))
          ) : (
            <ErrorEmpty />
          )}
        </Col>
      </Row>
    </>
  );
};

export default ListUsers;
