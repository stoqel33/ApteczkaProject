import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import { registerUser, loginUser } from 'data/Actions/authActions';

import FormCellSignIn from 'Components/molecules/FormCellSignIn/FormCellSignIn';
import Button from 'Components/atoms/Button/Button';
import Text from 'Components/atoms/Text/Text';

import imgXSLuggage from 'assets/image/xsmall-luggage.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  background-image: url(${imgXSLuggage});
  background-repeat: no-repeat;
  background-position-x: center;

  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1000px) {
    margin: 0 auto;
    width: 70%;
  }
`;
const Forms = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 13rem;
`;
const TitleInfo = styled(Text)`
  color: ${({ theme }) => theme.info};
`;

const FormSignIn = ({ registered, registerChange, register, login, errorsBackend }) => {
  const history = useHistory();

  return (
    <Wrapper>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Podaj adres email';
          }
          if (!values.password) {
            errors.password = 'Podaj hasło';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Register
          setTimeout(() => {
            if (!registered) {
              register(values, history);
              registerChange();
              resetForm({ values: '' });
              setSubmitting(false);
            }
            // Login if registered
            else {
              login(values, history);
              setSubmitting(false);
            }
          }, 400);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
          <Forms onSubmit={handleSubmit}>
            <TitleInfo mgb="2rem">{registered ? 'Logowanie' : 'Rejestracja'}</TitleInfo>
            <FormCellSignIn
              name="email"
              type="text"
              onChange={handleChange}
              value={values.email}
              errors={errors.email && touched.email && errors.email}
              backendErr={errorsBackend.email}
            />
            <FormCellSignIn
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password}
              errors={errors.password && touched.password && errors.password}
              backendErr={errorsBackend.password}
            />
            <Button mgt="3rem" type="submit" disabled={isSubmitting}>
              {registered ? 'Zaloguj się' : 'Zarajestruj się'}
            </Button>
          </Forms>
        )}
      </Formik>
      <Text fs="1.4" mgt="2rem">
        {registered ? 'Nie masz konta?' : 'Masz już konto?'}
      </Text>
      <Button info fs="1.5" onClick={registerChange}>
        {registered ? 'Zarejestruj się!' : 'Zaloguj się'}
      </Button>
    </Wrapper>
  );
};

FormSignIn.propTypes = {
  registered: PropTypes.bool.isRequired,
  registerChange: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  errorsBackend: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.state,
  errorsBackend: state.errors,
});

const mapDispatchToProps = (dispatch) => ({
  register: (userData, history) => dispatch(registerUser(userData, history)),
  login: (userData, history) => dispatch(loginUser(userData, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSignIn);
