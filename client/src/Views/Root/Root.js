/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "data/Store";
import jwt_decode from "jwt-decode";
import setAuthToken from "data/Utils/setAuthToken";
import { setCurrentUser, logoutUser } from "data/Actions/authActions";
import { clearProfile } from "data/Actions/profileActions";
import { theme } from "Theme/mainTheme";

import Medicine from "Views/Medicine/Medicine";
import AddMedicine from "Views/AddMedicine/AddMedicine";
import EditMedicine from "Views/EditMedicine/EditMedicine";
import SignIn from "Views/SignIn/SignIn";
import CreateProfile from "Views/CreateProfile/CreateProfile";
import NotFound from "Views/NotFound/NotFound";
import PrivateRoute from "templates/PrivateRoute/PrivateRoute";
import ProtectedRoute from "templates/ProtectedRoute/ProtectedRoute";
import WindowDimension from "Theme/WindowDimension";

const Root = () => {
  // Check for token
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    // Check if token is expired
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(logoutUser());
      store.dispatch(clearProfile());
      window.location.href = "/user/signin";
    }
  }
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <>
            <WindowDimension />
            <Switch>
              <ProtectedRoute exact path="/Apteczka" component={Medicine} />
              <PrivateRoute exact path="/Apteczka/addMedicine" component={AddMedicine} />
              <ProtectedRoute
                exact
                path="/Apteczka/editMedicine/:id"
                component={EditMedicine}
              />
              <PrivateRoute
                exact
                path="/Apteczka/profile/create"
                component={CreateProfile}
              />
              <Route exact path="/Apteczka/user/signin" component={SignIn} />
              <Route path="/404" exact component={NotFound} />
              <Redirect from="*" to="/404" />
            </Switch>
          </>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default Root;
