import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

//CSS
import "./SearchNav.css";

const SearchNav = (props) => {
  const { valueSearch, medidasCustom = null, children } = props;
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      valueSearch(null);
      setError("El campo no puede estar vacio");
    } else {
      valueSearch(search);
      setError("");
    }
  };

  const medidasDefault = {
    search: {
      xs: 12,
      md: 7,
      xl: 5,
    },
    buttonAdd: {
      xs: 12,
      md: 5,
      xl: 4,
    },
  };

  const medidas = medidasCustom ? medidasCustom : medidasDefault;

  return (
    <Row className="Buscador__row">
      <Col xs={12} className="Buscador__col">
        <Col {...medidas.search} className="Buscador__col__search">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="Buscar"
              name="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />
            <button type="submit">Buscar</button>{" "}
          </Form>
          {error && <div className="msg-error">{error}</div>}
        </Col>

        <Col {...medidas.buttonAdd} className="Buscador__col__buttonAdd">
          {children}
        </Col>
      </Col>
    </Row>
  );
};

export default SearchNav;
