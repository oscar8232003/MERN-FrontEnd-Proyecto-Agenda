import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

/*Emojis */
import { Punch } from "../../../Emojis";

/*Css*/
import "./LoginAndRegister.css";

/*Helper */
import {
  verifyInputEmail,
  isEmpty,
  verifyInputPassword,
} from "../../../../helpers/validatorFormAuth";

/*Images*/
import Logo from "../../../../assets/logo.png";

const FormRegister = () => {
  const [error, setError] = useState({
    name: null,
    lastname: null,
    email: null,
    password: null,
  });

  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const enviarFormulario = (e) => {
    /*RECORDATORIO */
    /*Oscar si estas en una funcion como esta y quieres cambiar un estado multiples veces (error, setError) 
    te aconsejo que crees una variable igual al estado inicial del error y juegues con ella en este escope que es de la funcion, 
    cada vez que cambias esa variable, esta toma otros valores a diferencia de cambiar 1 estado multiples veces porque esta (error) 
    no cambiara hasta que salga de esta funcion, para que cambie tiene que salir de la funcion -> cambiara -> ahora podremos cambiara otra vez, 
    el caso de los onChange es porque cambia automaticamente al hacer 1 accion, aca lo estamos haciendo manualmente
    */
    e.preventDefault();

    //Esta es 1 forma de hacerlo con 1 solo estado
    if (verifyInputGeneral()) {
      if (verifyInputGeneral("email")) {
        if (verifyInputGeneral("password")) {
        }
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

    if (search === "password") {
      //Verificamos si los campos del objeto estan vacios
      for (let User of Object.keys(user)) {
        document.getElementById(User).classList.remove("border-error");
        if (User === "password") {
          if (!verifyInputPassword(user[User])) {
            verified = false;
            objectContainer = {
              ...objectContainer,
              [User]:
                "La contraseña debe tener almenos 8 caracteres alfanumericos",
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
              Empecemos <Punch />
            </h1>
          </div>

          <form
            action="#"
            method="POST"
            onSubmit={enviarFormulario}
            className="form-login-register"
          >
            <div className="form-login-register__input-container">
              <p>Nombre</p>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                id="name"
                onChange={handleUser}
              />
              {error.name && <p className="msg-error">{error.name}</p>}
            </div>

            <div className="form-login-register__input-container">
              <p>Apellido</p>
              <input
                type="text"
                name="lastname"
                placeholder="Apellido"
                id="lastname"
                onChange={handleUser}
              />
              {error.lastname && <p className="msg-error">{error.lastname}</p>}
            </div>

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

            <button type="submit">Registrame!</button>
          </form>

          <div className="footer-login-register">
            <p>
              <Link to="/login">Ya tienes cuenta?</Link>
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

export default FormRegister;
