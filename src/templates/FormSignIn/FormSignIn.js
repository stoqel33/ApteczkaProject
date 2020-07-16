import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import { registerUser, loginUser, clearErrors } from 'data/Actions/authActions';

import FormCellSignIn from 'Components/molecules/FormCellSignIn/FormCellSignIn';
import Button from 'Components/atoms/Button/Button';
import Text from 'Components/atoms/Text/Text';

import imgXSLuggage from 'assets/image/xsmall-luggage.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

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

const FormSignIn = ({
  registered,
  registerChange,
  register,
  login,
  errorsBackend,
  clearErrors,
}) => {
  const history = useHistory();
  // change form, Login or Register and clear errors
  const changeVariant = () => {
    registerChange();
    clearErrors();
  };
  return (
    <Wrapper>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Register
          setTimeout(() => {
            if (!registered) {
              register(values, history);
              resetForm({ values: '' });
              setSubmitting(false);
              if (errorsBackend) {
                registerChange();
              }
            }
            // Login if registered
            else {
              login(values, history);
              setSubmitting(false);
            }
          }, 400);
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <Forms onSubmit={handleSubmit}>
            <TitleInfo mgt="5rem" mgb="2rem">
              {registered ? 'Logowanie' : 'Rejestracja'}
            </TitleInfo>
            <FormCellSignIn
              name="email"
              type="text"
              onChange={handleChange}
              value={values.email}
              errors={errorsBackend.email}
            />
            <FormCellSignIn
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password}
              errors={errorsBackend.password}
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
      <Button type="button" info fs="1.5" onClick={changeVariant}>
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
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSignIn);
