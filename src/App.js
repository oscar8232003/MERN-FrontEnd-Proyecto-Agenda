import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

//Estilos
import "./App.css";

//Rutas
import Routes from "./config/Routes.js";

//Helper
import RuteoDinamico from "./helpers/RuteoDinamico.js";

function App() {
  return (
    <Router>
      <Switch>
        {Routes.map((route, index) => (
          <RuteoDinamico {...route} key={index} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
