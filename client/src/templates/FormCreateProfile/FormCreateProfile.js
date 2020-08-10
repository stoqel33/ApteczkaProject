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
  height: 100%;

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
const Image = styled.div`
  background-image: url(${imgXsMedicines});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;

  width: 17rem;
  height: 17rem;
`;

const FormCreateProfile = ({ createUser, getUser }) => {
  const history = useHistory();
  useEffect(() => {
    getUser(history);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Wrapper>
      <Formik
        initialValues={{
          nickname: '',
          date: new Date().toISOString().slice(0, 10),
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
          createUser(values, history);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
          <Forms onSubmit={handleSubmit}>
            <TitleInfo mgt="4rem" mgb="5rem">
              Stwórz profil
            </TitleInfo>
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
            <Text fs="1.2">*Data urodzenie nie jest wymagana</Text>
            <Image />
            <Button mgt="2rem" type="submit" disabled={isSubmitting}>
              Stwórz konto
            </Button>
          </Forms>
        )}
      </Formik>
    </Wrapper>
  );
};

FormCreateProfile.propTypes = {
  createUser: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  createUser: (userData, history) => dispatch(createProfile(userData, history)),
  getUser: (history) => dispatch(getProfile(history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormCreateProfile);
