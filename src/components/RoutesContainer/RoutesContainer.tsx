import React from "react";
import { Redirect, Route, Switch } from "react-router";

import {ErrorBoundary} from '../ErrorBoundary/ErrorBoundary'
import {BootCamps} from '../pages/BootCamps/BootCamps'

import styles from "./RoutesContainer.module.scss";
import { Login } from "../pages/Login/Login";
import { Home } from "../pages/Home/Home";
import { Register } from "../pages/Register/Register";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { Reset } from "../pages/Reset/Reset";


export const RoutesContainer:React.FC = () => {
  return (
    <div className={styles.root}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route
          exact
          path="/BrowserBootCamps"
          render={() => (
            <ErrorBoundary>
              <BootCamps/>
            </ErrorBoundary>
          )}
        />
        <Route
          exact
          path="/Login"
          render={() => (
            <ErrorBoundary>
              <Login />
            </ErrorBoundary>
          )}
        />
        <Route
          exact
          path="/Home"
          render={() => (
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          )}
        />
        <Route
          exact
          path="/Register"
          render={() => (
            <ErrorBoundary>
              <Register />
            </ErrorBoundary>
          )}
        />
        <Route
          exact
          path="/UpdatePassword"
          render={() => (
            <ErrorBoundary>
              <PrivateRoute />
            </ErrorBoundary>
          )}
        />
        <Route
          exact
          path="/Reset"
          render={() => (
            <ErrorBoundary>
              <Reset />
            </ErrorBoundary>
          )}
        />
      </Switch>
    </div>
  );
};
