import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UseAuthHook from "../../../Hooks/UseAuthHook";
import { Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

//Components
import ModalComponent from "../../../components/ComponentsHelpers/ModalComponent";
import { Cambios } from "../../../components/Emojis";
import HeaderComponent from "../../../components/ComponentsHelpers/HeaderComponent";
import EditUser from "../../../components/clientComponents/User/EditUser";
import EditUserAvatar from "../../../components/clientComponents/User/EditUserAvatar";

//CSS
import "./UserPage.css";

//Logo
import IconUser from "../../../assets/icono-user.jpg";

const UserPage = () => {
  const params = useParams();
  const { user } = UseAuthHook();
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    //Se hace el llamado a la api y verificamos el usuario
    if (reload) {
      setReload(false);
    }
  }, [reload]);

  if (parseInt(params.userID) !== parseInt(user.userID)) {
    return (
      <>
        <Row className="UserPage__error-Row">
          <Col xs={12} className="UserPage__error-Col">
            <h3>Lo siento no puedes ver otros perfiles</h3>
          </Col>
        </Row>
      </>
    );
  }

  const editUser = () => {
    setModalTitle("Editar Usuario");
    setModalContent(<EditUser {...states} />);
    setModalShow(true);
  };

  const editUserAvatar = () => {
    setModalTitle("Cambiar Imagen de Perfil");
    setModalContent(<EditUserAvatar {...states} />);
    setModalShow(true);
  };

  const states = {
    setModalShow,
    setReload,
    user,
    toast,
  };

  return (
    <>
      <HeaderComponent>
        <h1>Perfil</h1>
        <h4>Informacion sobre tu cuenta</h4>
      </HeaderComponent>
      <Row className="UserPage__Row justify-content-around">
        <Col xs={12} md={5} className="UserPage__Col__img">
          <Col xs={12} className="UserPage__Col__img--img">
            {user.avatar ? (
              <img src={user.avatar} alt="Icon-User" />
            ) : (
              <img src={IconUser} alt="Icon-User" />
            )}
          </Col>
          <Col xs={12} className="UserPage__Col__img--editar">
            <button onClick={() => editUserAvatar()}>
              {" "}
              <Cambios />
            </button>
          </Col>
        </Col>

        <Col xs={12} md={6} xl={5} className="UserPage__Col__informacion">
          <Col xs={12} className="UserPage__Col__informacion__title">
            <h3>Informacion Personal</h3>
          </Col>
          <Col xs={12} className="UserPage__Col__informacion__inputs">
            <div>
              <h4>Nombre</h4>
              <p>Oscar Valenzuela</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>oavr.18@gmail.com</p>
            </div>
            <div>
              <h4>Contraseña</h4>
              <p>************</p>
            </div>
          </Col>
          <Col xs={12} className="UserPage__Col__informacion__editar">
            <button onClick={() => editUser()}>
              {" "}
              <Cambios /> Editar
            </button>
          </Col>
        </Col>
      </Row>
      <ModalComponent
        showModal={modalShow}
        closeModal={setModalShow}
        modalTitle={modalTitle}
      >
        {modalContent}
      </ModalComponent>
      <ToastContainer />
    </>
  );
};

export default UserPage;
