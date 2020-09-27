import React from "react";
import UseAuthHook from "../../../Hooks/UseAuthHook";
import { Helmet } from "react-helmet";

//Components
import Spin from "../../../components/Spin";

const SobreMiPage = () => {
  const { isLoading } = UseAuthHook();

  if (isLoading) {
    return <Spin />;
  }

  return (
    <>
      <Helmet>
        <title>Sobre Mi</title>
      </Helmet>
      <div>
        <h2>Esto es Sobre mi</h2>
      </div>
    </>
  );
};

export default SobreMiPage;
