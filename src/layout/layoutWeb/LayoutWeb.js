import React from "react";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

//Components
import HeaderComponent from "../../components/webComponents/HeaderComponent";
import FooterComponent from "../../components/webComponents/FooterComponent";

//Helper
import pagesSinLayout from "../../helpers/pagesSinLayout";

//CSS
import "./layoutWeb.css";

//xs={12} sm={10} xl={9}
const LayoutWeb = (props) => {
  const { children } = props;
  let pagesWithoutLayout = pagesSinLayout(props.location.pathname);

  return (
    <Container fluid className="pr-0 pl-0">
      {pagesWithoutLayout.pageContent.header && <HeaderComponent />}

      {children}

      {pagesWithoutLayout.pageContent.footer && <FooterComponent />}
    </Container>
  );
};

export default withRouter(LayoutWeb);
