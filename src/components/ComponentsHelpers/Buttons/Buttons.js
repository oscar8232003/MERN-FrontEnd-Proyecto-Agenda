import React from "react";

//CSS
import "./Buttons.css";

//Emojis
import { DedoDerecha, Edit, Delete } from "../../Emojis";

export const AddButton = (props) => {
  const { title = "Agregar", action } = props;

  return (
    <button
      className="Component__AddButton"
      onClick={() => {
        action();
      }}
    >
      <DedoDerecha /> {title}
    </button>
  );
};

export const AddButtonAccept = (props) => {
  const { title = "Agregar", action, type } = props;

  const verifyAction = action
    ? () => {
        action();
      }
    : null;

  return (
    <button
      type={type}
      className="Component__AddButtonAccept"
      onClick={verifyAction}
    >
      {title}
    </button>
  );
};

export const EditSmallButton = (props) => {
  const { action, styles } = props;

  return (
    <button
      className="Component__EditSmallButton"
      onClick={() => {
        action();
      }}
      style={styles}
    >
      <Edit />
    </button>
  );
};

export const EditButtonAccept = (props) => {
  const { title = "Editar", action, type, styles } = props;

  const verifyAction = action
    ? () => {
        action();
      }
    : null;

  return (
    <button
      type={type}
      className="Component__EditButtonAccept"
      onClick={verifyAction}
      style={styles}
    >
      {title}
    </button>
  );
};

export const DeleteSmallButton = (props) => {
  const { action } = props;

  return (
    <button
      className="Component__DeleteSmallButton"
      onClick={() => {
        action();
      }}
    >
      <Delete />
    </button>
  );
};
