import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

//CSS
import "./ValidationAccountPage.css";

//Components
import SendValidation from "../../../../components/webComponents/auth/ValidationAccount/SendValidation";
import ReSendValidation from "../../../../components/webComponents/auth/ValidationAccount/ReSendValidation";
import ValidationEmail from "../../../../components/webComponents/auth/ValidationAccount/ValidationEmail";

const ValidationAccountPage = (props) => {
  const url = props.match.path;

  return (
    <Container fluid className="background-validation">
      <Row
        className={"justify-content-center row-validation align-items-center"}
      >
        <Col xs="10" sm="10" md="8" lg="6" xl="6" className="col-validation">
          {url === "/send-validation" && <SendValidation />}

          {url === "/re-send-validation" && <ReSendValidation />}

          {url === "/validation/:email" && <ValidationEmail />}
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(ValidationAccountPage);
