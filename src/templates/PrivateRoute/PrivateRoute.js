import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/ApteczkaProject/user/signin" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
