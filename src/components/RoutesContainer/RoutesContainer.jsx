import React from "react";
import { Redirect, Route, Switch } from "react-router";

import {ErrorBoundary} from '../ErrorBoundary/ErrorBoundary'
import {Bootcamps} from '../Bootcamps/Bootcamps'
import {Login} from '../Login/Login'
import {Home} from '../Home/Home'
import {Register} from '../Register/Register'
import {PrivateRoute} from '../PrivateRoute/PrivateRoute'
import {Reset} from '../Reset/Reset'

import styles from "./RoutesContainer.module.scss";


export const RoutesContainer = () => {
  return (
    <div className={styles.root}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route
          exact
          path="/BrowseBootcamps"
          render={() => (
            <ErrorBoundary>
              <Bootcamps/>
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
