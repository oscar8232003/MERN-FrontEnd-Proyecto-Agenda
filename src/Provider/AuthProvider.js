import React, { useState, useEffect, createContext } from "react";
import jwtDecode from "jwt-decode";
import { getAccessToken, logout } from "../helpers/jwtHelper";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState({
    user: null,
    isLoading: true,
  });

  useEffect(() => {
    checkUserLogin(setUser);
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

const checkUserLogin = (setUser) => {
  const accessToken = getAccessToken();
  if (!accessToken) {
    logout();
    setUser({
      user: null,
      isLoading: false,
    });
  } else {
    const userInformation = jwtDecode(accessToken);
    if (userInformation) {
      setUser({
        user: userInformation,
        isLoading: false,
      });
    } else {
      logout();
      return null;
    }
  }
};
