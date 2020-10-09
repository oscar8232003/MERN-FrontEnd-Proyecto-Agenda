import { transformDate, transformDateForm } from "./FormatDates";

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
    errors.password = "La contraseña no puede tener mas de 15 caracteres";
  } else if (values.password.length < 8) {
    errors.password = "La contraseña no puede tener menos de 8 caracteres";
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
      errors.password = "La contraseña no puede tener mas de 15 caracteres";
    } else if (values.password.length < 8) {
      errors.password = "La contraseña no puede tener menos de 8 caracteres";
    }

    if (values.password !== values.repeatpassword) {
      errors.repeatpassword = "Las contraseñas deben ser iguales";
    }
  }

  return errors;
};

export const validateFormEditUser = (values) => {
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

  if (values.password) {
    if (values.password.length > 15) {
      errors.password = "La contraseña no puede tener mas de 15 caracteres";
    } else if (values.password.length < 8) {
      errors.password = "La contraseña no puede tener menos de 8 caracteres";
    }
  }

  return errors;
};

export const validateFormAddRecordatorio = (values) => {
  const errors = {};

  const hoy = transformDate(new Date());

  if (!values.title) {
    errors.title = "El campo no puede estar vacio";
  }

  if (
    values.range === "normal" ||
    values.range === "important" ||
    values.range === "veryImportant"
  ) {
  } else {
    errors.range = "Escoga un valor de la lista";
  }

  if (!values.date) {
    errors.date = "El campo no puede estar vacio";
  } else if (transformDateForm(values.date) < hoy) {
    errors.date = "La fecha debe ser mayor a la de hoy";
  }

  return errors;
};
