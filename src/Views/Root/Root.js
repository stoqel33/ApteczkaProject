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
import ProtectedRoute from 'templates/ProtectedRoute/ProtectedRoute';

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
            </Switch>
            <Route exact path="/Apteczka/user/signin" component={SignIn} />
          </>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default Root;
