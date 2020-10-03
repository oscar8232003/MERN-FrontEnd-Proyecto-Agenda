import React from "react";
import { Col } from "react-bootstrap";
import Swal from "sweetalert2";

//CSS
import "./User.css";

//Assets
import userAvatar from "../../../../assets/icono-user.jpg";

//Buttons
import {
  EditSmallButton,
  DeleteSmallButton,
} from "../../../ComponentsHelpers/Buttons/Buttons";

//Component
import EditUser from "../EditUser";

const User = (props) => {
  const {
    data,
    setModalTitle,
    setModalContent,
    setModalShow,
    setReload,
    toast,
  } = props;
  const { name, lastname, email, role, avatar } = data;

  const editUser = () => {
    setModalTitle("Editar Usuario");
    setModalContent(
      <EditUser
        setModalShow={setModalShow}
        setReload={setReload}
        toast={toast.info}
        user={data}
      />
    );
    setModalShow(true);
  };

  const formatearEmail = (mail) => {
    const search = mail.indexOf("@");
    const newEmail = mail.substring(0, search + 1);
    return newEmail + "...";
  };

  const borrarUser = () => {
    Swal.fire({
      title: "Estas seguro de eliminar este usuario?",
      text: "si lo eliminas no se podra recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0077e6",
      cancelButtonColor: "#c72336",
      confirmButtonText: "Si, borralo",
      cancelButtonText: "Me arrepenti",
    }).then((result) => {
      if (result.isConfirmed) {
        setReload(true);
        Swal.fire(
          "Borrado!",
          "El usuario a sido eliminado satisftoriamente",
          "success"
        );
      }
    });
  };

  return (
    <>
      <Col
        sm={12}
        className="Component__User justify-content-between mr-auto ml-auto d-none d-sm-flex"
      >
        <div className="Component__User__name">
          {avatar ? (
            <img src={avatar} alt="icon-user" />
          ) : (
            <img src={userAvatar} alt="icon-user" />
          )}
          <p className="Component__User__name--name">
            {name} {lastname}
          </p>
        </div>
        <div className="Component__User__role">
          {role === "admin" ? (
            <p className="Component__User__role--role Component__User--bg-red">
              {role}
            </p>
          ) : (
            <p className="Component__User__role--role Component__User--bg-blue">
              {role}
            </p>
          )}

          <p className="Component__User__role--email d-none d-md-block">
            {email}
          </p>

          <p className="Component__User__role--email d-md-none">
            {formatearEmail(email)}
          </p>

          <EditSmallButton action={editUser} />
          <DeleteSmallButton action={borrarUser} />
        </div>
      </Col>

      {/*Version Mobile*/}
      <Col
        xs={12}
        className="Component__User--mobile justify-content-between mr-auto ml-auto d-flex d-sm-none"
      >
        <div className="Component__User__name--mobile">
          {avatar ? (
            <img src={avatar} alt="icon-user" />
          ) : (
            <img src={userAvatar} alt="icon-user" />
          )}

          <p className="Component__User__name--name--mobile">
            {name} {lastname}
          </p>
          <EditSmallButton action={editUser} />
          <DeleteSmallButton action={borrarUser} />
        </div>

        <div className="Component__User__role--mobile">
          <p className="Component__User__role--email--mobile">{email}</p>
          {role === "admin" ? (
            <p className="Component__User__role--role--mobile Component__User--bg-red">
              {role}
            </p>
          ) : (
            <p className="Component__User__role--role--mobile Component__User--bg-blue">
              {role}
            </p>
          )}
        </div>
      </Col>
    </>
  );
};

export default User;
