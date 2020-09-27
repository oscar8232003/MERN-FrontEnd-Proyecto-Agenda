import React from "react";
import UseAuthHook from "../../../Hooks/UseAuthHook";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

//Components
import FormRegister from "../../../components/webComponents/auth/loginAndRegister/FormRegister";
import Spin from "../../../components/Spin";

const RegisterPage = () => {
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
    <>
      <Helmet>
        <title>Registro</title>
      </Helmet>
      <div>
        <FormRegister />
      </div>
    </>
  );
};

export default RegisterPage;
