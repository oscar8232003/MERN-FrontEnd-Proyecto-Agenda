import React from "react";
import { Link } from "react-router-dom";

//CSS
import "./ValidationAccount.css";

/*Images*/
import Logo from "../../../../assets/logo.png";

//Emojis
import { Email, Guiño } from "../../../Emojis";

const SendValidation = () => {
  return (
    <div className="container-component-validation">
      <div className="header-validation">
        <img src={Logo} alt="logo" />
      </div>
      <h2>
        Hemos enviado un correo electrónico con un link de activación para tu
        cuenta <Email />
      </h2>
      <p>
        Queda poco para poder disfrutar de una muy buena{" "}
        <strong>agenda personal</strong> <Guiño />
      </p>
      <button>
        <Link to="/">Ir al inicio</Link>
      </button>
    </div>
  );
};

export default SendValidation;
