import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

/*Emoji */
import { Smile } from "../../../Emojis";

/*Css*/
import "./LoginAndRegister.css";

/*Helper */
import {
  verifyInputEmail,
  isEmpty,
} from "../../../../helpers/validatorFormAuth";

/*Images*/
import Logo from "../../../../assets/logo.png";

const FormLogin = () => {
  const [error, setError] = useState({
    email: null,
    password: null,
  });

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();

    //Esta es 1 forma de hacerlo con 1 solo estado
    if (verifyInputGeneral()) {
      console.log("paso 1°");
      if (verifyInputGeneral("email")) {
        console.log("paso email");
      }
    }
  };

  function verifyInputGeneral(search = "empty") {
    let objectContainer = {};
    var verified = true;

    //Convertimos el objeto completo a nulo
    for (let Error of Object.keys(error)) {
      objectContainer[Error] = null;
    }

    if (search === "empty") {
      //Verificamos si los campos del objeto estan vacios
      for (let User of Object.keys(user)) {
        document.getElementById(User).classList.remove("border-error");
        if (isEmpty(user[User])) {
          verified = false;
          objectContainer = {
            ...objectContainer,
            [User]: "El campo no puede estar vacio",
          };
          document.getElementById(User).classList.add("border-error");
        }
      }
    }

    if (search === "email") {
      //Verificamos si los campos del objeto estan vacios
      for (let User of Object.keys(user)) {
        document.getElementById(User).classList.remove("border-error");
        if (User === "email") {
          if (!verifyInputEmail(user[User])) {
            verified = false;
            objectContainer = {
              ...objectContainer,
              [User]: "Ingrese un correo electronico valido",
            };
            document.getElementById(User).classList.add("border-error");
          }
        }
      }
    }

    //Asignamos a setError el objeto con los empty
    setError(objectContainer);

    return verified;
  }

  return (
    <Container fluid className="background-login-register">
      <Row className={"justify-content-center"}>
        <Col xs="10" sm="9" md="7" lg="5" xl="4" className="col-login-register">
          <div className="header-login-register">
            <img src={Logo} alt="logo" />
            <h1>
              Hola de nuevo <Smile />
            </h1>
          </div>

          <form
            action="#"
            method="POST"
            onSubmit={enviarFormulario}
            className="form-login-register"
          >
            <div className="form-login-register__input-container">
              <p>Correo Electronico</p>
              <input
                type="text"
                name="email"
                placeholder="Correo Electronico"
                id="email"
                onChange={handleUser}
              />
              {error.email && <p className="msg-error">{error.email}</p>}
            </div>

            <div className="form-login-register__input-container">
              <p>Password</p>
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                onChange={handleUser}
              />
              {error.password && <p className="msg-error">{error.password}</p>}
            </div>

            <button type="submit">Ingresar</button>
          </form>

          <div className="footer-login-register">
            <p>
              <Link to="/re-send-validation">Recuperar clave</Link>
            </p>
            <p>
              <Link to="/register">¿No tienes cuenta? vamos a por ella!</Link>
            </p>
            <p>
              <Link to="/">Regresar al inicio</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormLogin;
