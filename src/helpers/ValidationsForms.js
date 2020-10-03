export const validateFormAdd = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "El campo no puede estar vacio";
  } else if (values.name.length > 15) {
    errors.name = "El nombre no puede tener mas de 15 caracteres";
  }

  if (!values.lastname) {
    errors.lastname = "El campo no puede estar vacio";
  } else if (values.lastname.length > 15) {
    errors.lastname = "El nombre no puede tener mas de 15 caracteres";
  }

  if (!values.email) {
    errors.email = "El campo no puede estar vacio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "El correo ingresado es invalido";
  }

  if (!values.role) {
    errors.role = "Tienes que seleccionar un rol para el usuario";
  }

  if (!values.password) {
    errors.password = "El campo no puede estar vacio";
  } else if (values.password.length > 15) {
    errors.password = "El nombre no puede tener mas de 15 caracteres";
  } else if (values.password.length < 8) {
    errors.password = "El nombre no puede tener menos de 8 caracteres";
  }

  if (!values.repeatpassword) {
    errors.repeatpassword = "El campo no puede estar vacio";
  } else if (values.password !== values.repeatpassword) {
    errors.repeatpassword = "Las contraseñas deben ser iguales";
  }

  return errors;
};

export const validateFormEdit = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "El campo no puede estar vacio";
  } else if (values.name.length > 15) {
    errors.name = "El nombre no puede tener mas de 15 caracteres";
  }

  if (!values.lastname) {
    errors.lastname = "El campo no puede estar vacio";
  } else if (values.lastname.length > 15) {
    errors.lastname = "El nombre no puede tener mas de 15 caracteres";
  }

  if (!values.email) {
    errors.email = "El campo no puede estar vacio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "El correo ingresado es invalido";
  }

  if (!values.role) {
    errors.role = "Tienes que seleccionar un rol para el usuario";
  }

  if (values.password) {
    if (values.password.length > 15) {
      errors.password = "El nombre no puede tener mas de 15 caracteres";
    } else if (values.password.length < 8) {
      errors.password = "El nombre no puede tener menos de 8 caracteres";
    }

    if (values.password !== values.repeatpassword) {
      errors.repeatpassword = "Las contraseñas deben ser iguales";
    }
  }

  return errors;
};
