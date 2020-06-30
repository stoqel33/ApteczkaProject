import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import { createProfile, getProfile } from 'data/Actions/profileActions';
import PropTypes from 'prop-types';

import FormCellSignIn from 'Components/molecules/FormCellSignIn/FormCellSignIn';
import Button from 'Components/atoms/Button/Button';
import Text from 'Components/atoms/Text/Text';

import imgXsMedicines from 'assets/image/xsmall-medicines.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  background-image: url(${imgXsMedicines});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;

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
`;
const TitleInfo = styled(Text)`
  color: ${({ theme }) => theme.info};
`;

const FormCreateProfile = ({ create, getProfile }) => {
  const history = useHistory();
  useEffect(() => {
    getProfile(history);
  }, []);
  return (
    <Wrapper>
      <Formik
        initialValues={{
          nickname: '',
          date: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.nickname) {
            errors.nickname = 'Podaj nazwę swojego profilu';
          }
          return errors;
        }}
        onSubmit={(values) => {
          // Create profile
          create(values, history);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
          <Forms onSubmit={handleSubmit}>
            <TitleInfo mgb="5rem">Stwórz nazwę dla swojego profilu</TitleInfo>
            <FormCellSignIn
              name="nickname"
              type="text"
              onChange={handleChange}
              value={values.nickname}
              errors={errors.nickname && touched.nickname && errors.nickname}
            />
            <FormCellSignIn
              name="date"
              type="date"
              onChange={handleChange}
              value={values.date}
              errors={errors.date && touched.date && errors.date}
            />
            <Button mgt="3rem" type="submit" disabled={isSubmitting}>
              Stwórz konto
            </Button>
          </Forms>
        )}
      </Formik>
    </Wrapper>
  );
};

FormCreateProfile.propTypes = {
  create: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  create: (userData, history) => dispatch(createProfile(userData, history)),
  getProfile: (history) => dispatch(getProfile(history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormCreateProfile);
