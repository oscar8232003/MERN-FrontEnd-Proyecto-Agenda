import moment from "moment";

export const transformDateForm = (date) => {
  return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
};

export const destransformDateForm = (date) => {
  return moment(date, "DD/MM/YYYY").format("YYYY-MM-DD");
};

export const transformDate = (
  date,
  format = "date",
  newFormat = "DD/MM/YYYY"
) => {
  if (format === "date") {
    return moment(date).format(newFormat);
  } else {
    return moment(date, format).format(newFormat);
  }
};

export const verifyDate = (date) => {
  let momentFormat = moment(date, "DD/MM/YYYY").format("DD/MM/YYYY");
  let momentFormatToday = moment(new Date()).format("DD/MM/YYYY");

  return momentFormat >= momentFormatToday ? true : false;
};
