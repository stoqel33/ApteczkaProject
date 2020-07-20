/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// check if user is logged and has a profile
const ProtectedRoute = ({ component: Component, auth, profile, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated === true && profile.exists === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/Apteczka/profile/create" />
        )
      }
    />
  );
};

ProtectedRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps)(ProtectedRoute);
