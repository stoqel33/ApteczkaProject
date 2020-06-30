import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from 'data/Store';
import jwt_decode from 'jwt-decode';
import setAuthToken from 'data/Utils/setAuthToken';
import { setCurrentUser, logoutUser } from 'data/Actions/authActions';
import { clearProfile } from 'data/Actions/profileActions';

import { theme } from 'Theme/mainTheme';
import GlobalStyle from 'Theme/GlobalStyle';
import Medicine from 'Views/Medicine/Medicine';
import AddMedicine from 'Views/AddMedicine/AddMedicine';
import EditMedicine from 'Views/EditMedicine/EditMedicine';
import SignIn from 'Views/SignIn/SignIn';
import CreateProfile from 'Views/CreateProfile/CreateProfile';

import PrivateRoute from 'templates/PrivateRoute/PrivateRoute';

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
      window.location.href = '/user/signin';
    }
  }
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Switch>
              <PrivateRoute exact path="/ApteczkaProject" component={Medicine} />
              <PrivateRoute
                exact
                path="/ApteczkaProject/addMedicine"
                component={AddMedicine}
              />
              <PrivateRoute
                exact
                path="/ApteczkaProject/editMedicine/:id"
                component={EditMedicine}
              />
              <Route path="/ApteczkaProject/profile/create" component={CreateProfile} />
            </Switch>
            <Route path="/ApteczkaProject/user/signin" component={SignIn} />
          </>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default Root;
