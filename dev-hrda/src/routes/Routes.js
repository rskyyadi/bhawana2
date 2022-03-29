// IMPORT DEPEDENCY
import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "../components";

// IMPORT PAGE DASHBOARD
import Dashboard from "../pages/Dashboard";

// IMPORT PAGE 404
import NotFound from "../pages/404"
// IMPORT PAGE LOGIN
import Login from "../pages/Login"
import { AuthContext } from "../utilities"
import Config from "../config"


const MyRoutes = () => {
  const { state } = useContext(AuthContext);
  // const { isAuthenticated } = state;
  const {ROUTES} = Config
//DATA LOGIN
  const adminUser = {
    username: 'riski',
    password: 'ganteng'
  }
//STATE FORM LOGIN
  const [user, setUser] = useState({
    username:'', 
    password:''
  })
//HANDLE LOGIN
  const handleLogin = details => {
    console.log(details)
    if(details.username === adminUser.username && details.password === adminUser.password){
      console.log('login')
      setUser({
        username: details.username,
        password: details.password
      })
    }else{
      console.log("gagal")
    }
  }
//USE EFFECT
  useEffect(() => {
    
  }, [state]);
  
  const AuthRoutes = ({ setNavbarTitle }) => (
    <Switch>
      {/* DASHBOARD */}
      <Route exact path="/">
        <Dashboard setNavbarTitle={setNavbarTitle} />
      </Route>

      {/* ROUTES */}
      {ROUTES.map((val, index) => (
        <Route
          key={index}
          exact={val.exact}
          path={val.path}
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
      {user.username !== ''
        ? (
            <Layout>
              <AuthRoutes />
            </Layout>
          )
        : (
            <Route exact path="/login">
              <Login handleLogin={handleLogin} />
            </Route>
          )
      }
      <Route path="*">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );

  // const Routes = () => {
  //   if(!isAuthenticated){
  //     return <UnAuthRoutes />
  //   }
  //   return (
  //     <Layout>
  //       <AuthRoutes />
  //     </Layout>
  //   )
  // };

  return (
    <BrowserRouter basename="/">
      <UnAuthRoutes />
    </BrowserRouter>
  );
};

export default MyRoutes;
