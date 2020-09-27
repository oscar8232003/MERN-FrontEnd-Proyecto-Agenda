import React from "react";
import UseAuthHook from "../../../Hooks/UseAuthHook";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

//Component
import FormLogin from "../../../components/webComponents/auth/loginAndRegister/FormLogin";
import Spin from "../../../components/Spin";

const LoginPage = () => {
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
        <title>Inicio de Sesión</title>
      </Helmet>
      <FormLogin />
    </>
  );
};

export default LoginPage;
