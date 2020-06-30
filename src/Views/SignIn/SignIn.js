import React from 'react';
import FormSignIn from 'templates/FormSignIn/FormSignIn';

class SignIn extends React.Component {
  state = {
    registered: true,
  };

  handleRegisterChange = () => {
    this.setState((prevState) => ({
      registered: !prevState.registered,
    }));
  };

  render() {
    return (
      <FormSignIn
        registered={this.state.registered}
        registerChange={this.handleRegisterChange}
      />
    );
  }
}

export default SignIn;
