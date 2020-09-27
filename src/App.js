import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";

//Estilos
import "./App.css";

//Rutas
import Routes from "./config/Routes.js";

//Helper
import RuteoDinamico from "./helpers/RuteoDinamico.js";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {Routes.map((route, index) => (
            <RuteoDinamico {...route} key={index} />
          ))}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
