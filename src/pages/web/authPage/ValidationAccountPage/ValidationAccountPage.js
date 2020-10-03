import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import UseAuthHook from "../../../../Hooks/UseAuthHook";
import { Helmet } from "react-helmet";

//CSS
import "./ValidationAccountPage.css";

//Components
import SendValidation from "../../../../components/webComponents/auth/ValidationAccount/SendValidation";
import ReSendValidation from "../../../../components/webComponents/auth/ValidationAccount/ReSendValidation";
import ValidationEmail from "../../../../components/webComponents/auth/ValidationAccount/ValidationEmail";
import Spin from "../../../../components/Spin";

const ValidationAccountPage = (props) => {
  const url = props.match.path;
  const { user, isLoading } = UseAuthHook();

  if (isLoading) {
    return <Spin />;
  }

  if (user && user.role === "client") {
    return (
      <>
        <Redirect to="/client" />
      </>
    );
  }

  if (user && user.role === "admin") {
    return (
      <>
        <Redirect to="/admin" />
      </>
    );
  }

  return (
    <Container fluid className="background-validation">
      <Helmet>
        <title>Validacion de Email</title>
      </Helmet>
      <Row
        className={"justify-content-center row-validation align-items-center"}
      >
        <Col xs="12" sm="10" md="8" lg="6" xl="6" className="col-validation">
          {url === "/send-validation" && <SendValidation />}

          {url === "/re-send-validation" && <ReSendValidation />}

          {url === "/validation/:email" && <ValidationEmail />}
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(ValidationAccountPage);
