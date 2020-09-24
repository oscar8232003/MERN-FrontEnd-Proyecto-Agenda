import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";

//CSS
import "./ValidationAccount.css";

/*Images*/
import Logo from "../../../../assets/logo.png";

//Emojis
import { CaraPreocupada, CaraGafasSol } from "../../../Emojis";

//Helper
import SearchQuery from "../../../../helpers/searchParamsAndQuery";
import { verifyInputEmail } from "../../../../helpers/validatorFormAuth";

const ValidationEmail = (props) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    email: "oavr.18@gmail.com",
    name: "Oscar",
    code: "123",
  });
  const [verification, setVerification] = useState(false);
  let code = SearchQuery("code-validation");
  let email = props.match.params.email;

  useEffect(() => {
    if (verifyInputEmail(email)) {
      setError(null);
      //Se llamara a la api y verificara si existe el usuario
      if (user.email) {
        setError(null);
        //Si existe
        if (code != null) {
          if (code === user.code) {
            //Se llamara a la api y cambiara el estado de activado a true
            setVerification(true);
            setError(null);
          } else {
            setError("el codigo ingresado no es valido");
          }
        }
      } else {
        //No existe
        setError("la direccion de correo no existe");
      }
    } else {
      setError("la direccion de correo no es valida");
    }
  }, []);

  console.log(code);
  console.log(email);

  return (
    <div className="container-component-validation">
      <div className="header-validation">
        <img src={Logo} alt="logo" />
      </div>
      {error && (
        <>
          <h2>
            Lo siento {user.name} {error} <CaraPreocupada />
          </h2>
          {error && code != null && (
            <p>
              Si quieres volver a mandar el codigo de verificacion a tu email{" "}
              <Link to="/re-send-validation">clickea Aqui</Link>
            </p>
          )}
          <button>
            <Link to="/">Inicio</Link>
          </button>
        </>
      )}

      {user.email && code == null && (
        <>
          <h2>
            Lo siento {user.name} el correo aun no ha sido verificado{" "}
            <CaraPreocupada />
          </h2>
          <p>
            Si quieres volver a mandar el codigo de verificacion a tu email{" "}
            <Link to="/re-send-validation">clickea Aqui</Link>
          </p>
          <button>
            <Link to="/">Inicio</Link>
          </button>
        </>
      )}

      {verification && (
        <>
          <h2>
            Enorabuena {user.name}! el correo ha sido verificado{" "}
            <CaraGafasSol />
          </h2>
          <p>
            Ahora solamente falta que ingreses a la aplicacion{" "}
            <Link to="/login">haciendo click aqui</Link>
          </p>
          <button>
            <Link to="/login">Ingresar!</Link>
          </button>
        </>
      )}
    </div>
  );
};

export default withRouter(ValidationEmail);
