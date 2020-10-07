import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

//Icon
import IconUser from "../../../../assets/icono-user.jpg";

//Component
import { EditButtonAccept } from "../../../ComponentsHelpers/Buttons/Buttons";

const EditUserAvatar = (props) => {
  const [img, setImg] = useState(null);
  const [error, setError] = useState(false);
  const { setModalShow, setReload, toast, user } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    !img ? setError(true) : setError(false);
    if (img) {
      toast.success("Imagen de perfil actualizada");
      setReload(true);
      setModalShow(false);
    }
  };

  const handleChange = (e) => {
    setImg({ file: e.target.files[0] });
    setError(false);
  };

  const fileUpload = (file) => {
    const url = "http://example.com/file-upload";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
  };

  return (
    <>
      <Row>
        <Col xs={12} className="UserPage__Col__img--img mt-4">
          {!user.avatar ? (
            <img
              src={IconUser}
              alt="Icon-user"
              style={{ boxShadow: "0px 1px 10px -8px black" }}
            />
          ) : (
            <img src={user.avatar} alt="Icon-user" />
          )}
        </Col>
        <Col xs={12} className="mb-3">
          <Form validated={img} onSubmit={handleSubmit}>
            <Form.File
              id="custom-file"
              label={img ? img.file.name : "Click aqui para subir imagen"}
              custom
              onChange={handleChange}
            />
            {error && (
              <div className="msg-error ml-2">
                El campo no puede estar vacio
              </div>
            )}
            <EditButtonAccept type="submit" title="Actualizar Imagen" />
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default EditUserAvatar;
