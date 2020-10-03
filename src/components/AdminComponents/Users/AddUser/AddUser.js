import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useFormik } from "formik";

//Button
import { AddButtonAccept } from "../../../ComponentsHelpers/Buttons/Buttons";

//Validacion
import { validateFormAdd as validate } from "../../../../helpers/ValidationsForms";

const AddUser = (props) => {
  const { setModalShow, setReload, toast } = props;

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      role: "client",
      password: "",
      repeatpassword: "",
    },
    validate,
    onSubmit: (values) => {
      toast("Usuario creado satisfactoriamente");
      setModalShow(false);
      setReload(true);
    },
  });

  /*
    {
        "userID": 1,
        "name": "Oscar",
        "lastname": "Valenzuela",
        "email": "oavr.18@gmail.com",
        "password": "oskar5524524",
        "role": "admin",
        "avatar": ""
      }
      */

  return (
    <Row className="justify-content-center AddUser__row">
      <Col xs={12} className="AddUser__col p-0 mt-3 mb-3">
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="formGridName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.errors.name && (
                  <div className="msg-error" style={{ paddingLeft: "10px" }}>
                    {formik.errors.name}
                  </div>
                )}
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formGridLastname">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Apellido"
                  name="lastname"
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                />
                {formik.errors.lastname && (
                  <div className="msg-error" style={{ paddingLeft: "10px" }}>
                    {formik.errors.lastname}
                  </div>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Correo Electronico"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors.email && (
                  <div className="msg-error" style={{ paddingLeft: "10px" }}>
                    {formik.errors.email}
                  </div>
                )}
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="formGridRole">
                <Form.Label>Rol</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={formik.values.role}
                  name="role"
                  onChange={formik.handleChange}
                >
                  <option value="client">Cliente</option>
                  <option value="admin">Administrador</option>
                </Form.Control>
                {formik.errors.role && (
                  <div className="msg-error" style={{ paddingLeft: "10px" }}>
                    {formik.errors.role}
                  </div>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="formGridPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors.password && (
                  <div className="msg-error" style={{ paddingLeft: "10px" }}>
                    {formik.errors.password}
                  </div>
                )}
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formGridRepeatPassword">
                <Form.Label>Vuelva a introducir la contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Repita la Contraseña"
                  name="repeatpassword"
                  onChange={formik.handleChange}
                  value={formik.values.repeatpassword}
                />
                {formik.errors.repeatpassword && (
                  <div className="msg-error" style={{ paddingLeft: "10px" }}>
                    {formik.errors.repeatpassword}
                  </div>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <AddButtonAccept type="submit" title="Agregar Usuario" />
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default AddUser;
