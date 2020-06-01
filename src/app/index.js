import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.scss";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

import PageLayout from "./components/PageLayout";

function App() {
  return (
    <Router>
      <PageLayout>
        {/* <Button onClick={() => alert("Go login")} to="/login">
          Link
        </Button>
        <Button target="_blank" href="https://google.com">
          Anchor
        </Button> */}
        <Switch>
          <Route exact path="/">
            <Home manoPropsas="value" />
          </Route>
          <Route
            exact
            path="/login"
            component={(props) => <Login {...props} manoPropsas="value1" />}
          />
          <Route exact path="/register" component={Register} />
          <Route path="*">
            <div>404 Page not found</div>
          </Route>
        </Switch>
      </PageLayout>
    </Router>
  );
}

export default App;
