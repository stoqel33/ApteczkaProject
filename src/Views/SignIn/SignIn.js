import React, { useState } from 'react';
import store from 'data/Store';
import jwt_decode from 'jwt-decode';
import setAuthToken from 'data/Utils/setAuthToken';
import { setCurrentUser } from 'data/Actions/authActions';

import FormSignIn from 'templates/FormSignIn/FormSignIn';

const SignIn = () => {
  // check if user is logged already
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
    window.location.href = '/Apteczka';
  }

  const [registered, setRegistered] = useState(true);

  const handleRegisterChange = () => {
    if (registered) setRegistered(false);
    else setRegistered(true);
  };

  return <FormSignIn registered={registered} registerChange={handleRegisterChange} />;
};

export default SignIn;
