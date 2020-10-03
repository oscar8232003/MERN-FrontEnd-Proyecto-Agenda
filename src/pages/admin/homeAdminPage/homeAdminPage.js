import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseAuthHook from "../../../Hooks/UseAuthHook";

//CSS
import "./HomeAdminPage.css";

//Components
import ListUsers from "../../../components/AdminComponents/Users/ListUsers";
import ModalComponent from "../../../components/ComponentsHelpers/ModalComponent";
import HeaderComponent from "../../../components/ComponentsHelpers/HeaderComponent";
import AddUser from "../../../components/AdminComponents/Users/AddUser";

//Buttons
import { AddButton } from "../../../components/ComponentsHelpers/Buttons/Buttons";

const HomeAdminPage = () => {
  const [userData, setUserData] = useState([]);
  const [reload, setReload] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const { user } = UseAuthHook();

  useEffect(() => {
    if (reload) {
      setReload(false);
    }

    const data = [
      {
        userID: 1,
        name: "Oscar",
        lastname: "Valenzuela",
        email: "oavr.18@gmail.com",
        password: "oskar5524524",
        role: "admin",
        avatar: "",
      },
      {
        userID: 2,
        name: "Oscar2",
        lastname: "Valenzuela2",
        email: "oavr2.18@gmail.com",
        password: "oskar5524524",
        role: "client",
        avatar: "",
      },
      {
        userID: 3,
        name: "Oscar3",
        lastname: "Valenzuela3",
        email: "oavr3.18@gmail.com",
        password: "oskar5524524",
        role: "client",
        avatar: "",
      },
      {
        userID: 4,
        name: "Oscar4",
        lastname: "Valenzuela4",
        email: "oavr4.18@gmail.com",
        password: "oskar5524524",
        role: "client",
        avatar: "",
      },
      {
        userID: 5,
        name: "Oscar5",
        lastname: "Valenzuela5",
        email: "oavr5.18@gmail.com",
        password: "oskar5524524",
        role: "client",
        avatar: "",
      },
    ];

    setUserData(data);
  }, [reload]);

  const addUser = () => {
    setModalTitle("Agregar Usuario");
    setModalContent(
      <AddUser
        setModalShow={setModalShow}
        setReload={setReload}
        toast={toast.success}
      />
    );
    setModalShow(true);
  };

  //Aqui van los states para poder modificar el modal
  const states = {
    setModalTitle,
    setModalContent,
    setModalShow,
    setReload,
    toast,
  };

  return (
    <>
      <Helmet>
        <title>Inicio Admin</title>
      </Helmet>

      {/*HEADER*/}
      <HeaderComponent>
        <h1>Bienvenido {user.name}</h1>
        <h4>
          Este es tu panel de administrador, usalo de la forma mas sabia posible
        </h4>
      </HeaderComponent>
      {/*FIN HEADER*/}

      {/*LIST USERS*/}
      <ListUsers data={userData} {...states}>
        <div className="HomeAdmin__container__listusers">
          <div className="HomeAdmin__container__listusers--title">
            <Link to="/admin/users">
              <h3>Lista de Usuarios</h3>
            </Link>
            <h4>Pequeña lista con usuarios</h4>
          </div>

          <AddButton title="Agregar Usuario" action={addUser} />
        </div>
      </ListUsers>
      {/*FIN LIST USERS*/}

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

export default HomeAdminPage;
