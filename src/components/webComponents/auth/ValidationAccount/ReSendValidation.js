import React, { useState } from "react";
import { Link } from "react-router-dom";

//CSS
import "./ValidationAccount.css";

/*Images*/
import Logo from "../../../../assets/logo.png";

//Emojis
import { CaraPreocupada, Paz } from "../../../Emojis";

//Helper
import {
  isEmpty,
  verifyInputEmail,
} from "../../../../helpers/validatorFormAuth";

const ReSendValidation = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmpty(email)) {
      if (verifyInputEmail(email)) {
        //Enviar el correo
      } else {
        setError("Por favor ingrese un correo valido");
      }
    } else {
      setError("Por favor rellene el campo vacio");
    }
  };

  return (
    <div className="container-component-validation">
      <div className="header-validation">
        <img src={Logo} alt="logo" />
      </div>
      <h2>
        Escibre el correo al cual enviaremos el link de activacion <Paz />
      </h2>
      <form action="" onSubmit={handleSubmit} className="form-validation">
        <input
          type="text"
          name="resendvalidation"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {error && (
          <p className="error-validation">
            {error} <CaraPreocupada />
          </p>
        )}
        <button type="submit">Enviar Link</button>
      </form>

      <button>
        <Link to="/">Ir al inicio</Link>
      </button>
    </div>
  );
};

export default ReSendValidation;
