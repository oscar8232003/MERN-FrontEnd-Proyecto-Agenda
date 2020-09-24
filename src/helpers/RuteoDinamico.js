import React from "react";
import { Switch, Route } from "react-router-dom";

const RuteoDinamico = (props) => {
  const { path, exact, routes } = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => (
        <props.component>
          <Switch>
            {routes.map((route, index) => (
              <Route {...route} key={index} />
            ))}
          </Switch>
        </props.component>
      )}
    />
  );
};

export default RuteoDinamico;
