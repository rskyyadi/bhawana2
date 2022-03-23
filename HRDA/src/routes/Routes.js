// Import depedencies
import React, { useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "../components";

// Import page dashboard
import Dashboard from "../pages/Dashboard";

// Import page 404
import NotFound from "../pages/404";

import { AuthContext } from "../utilities";

import Login from "../pages/Login";
import Config from '../config'

const MyRoutes = () => {
  const { state } = useContext(AuthContext);
  const { isAuthenticated, role } = state;
  const { ROUTES } = Config

  // if (role.length > 0) {
  //   role.map((val) => {
  //     let split = val?.split("_")
  //     if (split.length === 5) {
  //       let hak = `${split[0]}_${split[1]}_${split[2]}`
  //       role.push(hak)
  //     }
  //   })
  // }

  useEffect(() => { }, [state]);

  const AuthenticatedRoutes = ({ setNavbarTitle }) => (
    <Switch>
      {/* DASHBOARD */}
      <Route exact path="/">
        <Dashboard setNavbarTitle={setNavbarTitle} />
      </Route>

      {/* ROUTES */}
      {ROUTES.map((val, index) =>
        // val.hak &&
        // val.hak.some(hak => role.includes(hak)) && 
        (
          <Route
            key={index}
            exact={val.exact}
            path={val.route}
          >
            <val.page setNavbarTitle={setNavbarTitle} />
          </Route>
        ))}

      {/* LOGIN FORM */}
      <Route path="/login">
        <Redirect to="/" />
      </Route>

      {/* 404-NOT FOUND */}
      <Route path="*">
        <NotFound setNavbarTitle={setNavbarTitle} />
      </Route>
    </Switch>
  );

  const UnAuthRoutes = () => (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route path="*">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );

  const Routes = () => {
    if (!isAuthenticated) {
      return <UnAuthRoutes />
    }
    return (
      <Layout>
        <AuthenticatedRoutes />
      </Layout>
    );
  };

  return (
    <BrowserRouter basename="/">
      <Routes />
    </BrowserRouter>
  );
};

export default MyRoutes;
