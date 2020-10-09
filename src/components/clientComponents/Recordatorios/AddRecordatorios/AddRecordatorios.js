import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useFormik } from "formik";

//Button
import { AddButtonAccept } from "../../../ComponentsHelpers/Buttons/Buttons";

//Validacion
import { validateFormAddRecordatorio as validate } from "../../../../helpers/ValidationsForms";
import { transformDateForm } from "../../../../helpers/FormatDates";

const AddRecordatorios = (props) => {
  const { setModalShow, setReload, toast } = props;

  const formik = useFormik({
    initialValues: {
      title: "",
      range: "normal",
      date: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      console.log(transformDateForm(values.date));
      toast("Recordatorio creado satisfactoriamente");
      setModalShow(false);
      setReload(true);
    },
  });

  return (
    <Row className="mt-3 mb-3">
      <Col xs={12}>
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col xs={12}>
              <Form.Group controlId="formGridTitle">
                <Form.Label>Titulo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Titulo"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
                {formik.errors.title && (
                  <div className="msg-error" style={{ paddingLeft: "10px" }}>
                    {formik.errors.title}
                  </div>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="formGridRange">
                <Form.Label>Importancia</Form.Label>
                <Form.Control
                  as="select"
                  name="range"
                  onChange={formik.handleChange}
                  defaultValue={formik.values.range}
                >
                  <option value="normal">Normal</option>
                  <option value="important">Importante</option>
                  <option value="veryImportant">Muy Importante</option>
                </Form.Control>
                {formik.errors.range && (
                  <div className="msg-error" style={{ paddingLeft: "10px" }}>
                    {formik.errors.range}
                  </div>
                )}
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="formGridDate">
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  onChange={formik.handleChange}
                  value={formik.values.date}
                />
                {formik.errors.date && (
                  <div className="msg-error" style={{ paddingLeft: "10px" }}>
                    {formik.errors.date}
                  </div>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <AddButtonAccept type="submit" title="Agregar Recordatorio" />
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default AddRecordatorios;
