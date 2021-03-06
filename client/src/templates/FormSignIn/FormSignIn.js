import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser, loginUser } from "data/Actions/authActions";
import { clearErrors } from "data/Actions/errorActions";
import { withRouter } from "react-router";
import { device } from "Theme/mainTheme";

import FormCellSignIn from "Components/organisms/FormCellSignIn/FormCellSignIn";
import Button from "Components/atoms/Button/Button";
import Text from "Components/atoms/Text/Text";

import imgXSLuggage from "assets/image/xsmall-luggage.png";

const showingLuggage = keyframes`
  from{
    background-position-y: -18rem;
  }
  to{
    background-position-y: top;
  }`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  background-image: url(${imgXSLuggage});
  background-repeat: no-repeat;
  background-position-x: center;

  animation: ${showingLuggage} 0.8s ease-out;

  @media ${device.tablet} {
    width: 80%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1000px) {
    margin: 0 auto;
    width: 70%;
  }
`;
const Forms = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 13rem;
`;
const TitleInfo = styled(Text)`
  color: ${({ theme }) => theme.info};
`;

class FormSignIn extends React.Component {
  state = {
    email: "",
    password: "",
    errors: {},
  };

  static getDerivedStateFromProps(props, state) {
    if (props.errors !== state.errors) {
      return {
        errors: props.errors,
      };
    }
    return null;
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) this.props.history.push("/Apteczka");
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    if (!this.props.registered) {
      this.props.register(userData, this.props.history);
    } else {
      this.props.login(userData, this.props.history);
    }
  };

  onChangeOption = () => {
    const { registerChange, clear } = this.props;
    registerChange();
    clear();
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    const { errors } = this.state;
    const { registered } = this.props;

    return (
      <Wrapper>
        <Forms noValidate onSubmit={this.onSubmit}>
          <TitleInfo mgt="5rem" mgb="2rem">
            {registered ? "Logowanie" : "Rejestracja"}
          </TitleInfo>
          <FormCellSignIn
            id="email"
            name="email"
            type="text"
            onChange={this.onChange}
            value={this.state.email}
            errors={errors.email}
          />
          <FormCellSignIn
            id="password"
            name="password"
            type="password"
            onChange={this.onChange}
            value={this.state.password}
            errors={errors.password}
          />
          <Button mgt="3rem" type="submit">
            {registered ? "Zaloguj się" : "Zarejestruj się"}
          </Button>
        </Forms>
        <Text fs="1.4" mgt="2rem">
          {registered ? "Nie masz konta?" : "Masz już konto?"}
        </Text>
        <Button type="button" info fs="1.5" onClick={this.onChangeOption}>
          {registered ? "Zarejestruj się!" : "Zaloguj się"}
        </Button>
      </Wrapper>
    );
  }
}

FormSignIn.propTypes = {
  register: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};

FormSignIn.defaultProps = {
  register: () => {},
  login: () => {},
  clear: () => {},
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

const mapDispatchToProps = (dispatch) => ({
  register: (userData, history) => dispatch(registerUser(userData, history)),
  login: (userData, history) => dispatch(loginUser(userData, history)),
  clear: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FormSignIn));
