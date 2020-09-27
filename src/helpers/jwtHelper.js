import { ACCESS_TOKEN } from "./Constants";
import jwtDecode from "jwt-decode";

export const getAccessToken = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  if (!accessToken || accessToken === "null" || accessToken === undefined) {
    return null;
  }

  return accessToken;
};

export const verifyAccessToken = (token) => {
  if (token) {
    return jwtDecode(token);
  } else {
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};

export const willExpireToken = (token) => {
  const seconds = 60;
  const metaToken = jwtDecode(token);
  const { exp } = metaToken;
  const now = (Date.now() + seconds) / 1000;

  return now > exp;
};
