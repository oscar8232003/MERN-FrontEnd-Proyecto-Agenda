import React from "react";

//CSS
import "./DetailFinanzas.css";

//Emoji
import { DineroConAlas, BolsaDeDinero } from "../../../Emojis";

const DetailFinanzas = (props) => {
  const { tipo, nombre, monto, categoria, fecha } = props;

  return (
    <>
      <div className="Component__DetailFinanzas d-none d-sm-flex">
        {tipo === "Egreso" ? (
          <p className="Component__DetailFinanzas--Egreso">Egreso</p>
        ) : (
          <p className="Component__DetailFinanzas--Ingreso">Ingreso</p>
        )}

        {tipo === "Egreso" ? (
          <p className="Component__DetailFinanzas--Nombre Color-Egreso">
            <DineroConAlas /> {nombre}
          </p>
        ) : (
          <p className="Component__DetailFinanzas--Nombre Color-Ingreso">
            <BolsaDeDinero /> {nombre}
          </p>
        )}

        {tipo === "Egreso" ? (
          <p className="Component__DetailFinanzas--Monto Color-Egreso">
            ${monto}
          </p>
        ) : (
          <p className="Component__DetailFinanzas--Monto Color-Ingreso">
            ${monto}
          </p>
        )}

        <p className="Component__DetailFinanzas--Categoria">{categoria}</p>
        <p className="Component__DetailFinanzas--Fecha">{fecha}</p>
      </div>

      <div className="Component__DetailFinanzas__xs d-sm-none">
        {tipo === "Egreso" ? (
          <p className="Component__DetailFinanzas__xs--Egreso">Egreso</p>
        ) : (
          <p className="Component__DetailFinanzas__xs--Ingreso">Ingreso</p>
        )}

        {tipo === "Egreso" ? (
          <p className="Component__DetailFinanzas__xs--Nombre Color-Egreso">
            <DineroConAlas /> {nombre}
          </p>
        ) : (
          <p className="Component__DetailFinanzas__xs--Nombre Color-Ingreso">
            <BolsaDeDinero /> {nombre}
          </p>
        )}

        {tipo === "Egreso" ? (
          <p className="Component__DetailFinanzas__xs--Monto Color-Egreso">
            ${monto}
          </p>
        ) : (
          <p className="Component__DetailFinanzas__xs--Monto Color-Ingreso">
            ${monto}
          </p>
        )}

        <p className="Component__DetailFinanzas__xs--Categoria">{categoria}</p>
        <p className="Component__DetailFinanzas__xs--Fecha">{fecha}</p>
      </div>
    </>
  );
};

export default DetailFinanzas;
