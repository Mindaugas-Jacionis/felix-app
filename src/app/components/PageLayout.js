import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

function PageLayout({ children }) {
  return (
    <React.Fragment>
      <header>Header</header>
      <main>{children}</main>
      <Switch>
        {["/login", "/register"].map((path) => (
          <Route exact path={path}>
            <footer>Footer Login</footer>
          </Route>
        ))}
        <Route path="*">
          <footer>Footer</footer>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default PageLayout;
