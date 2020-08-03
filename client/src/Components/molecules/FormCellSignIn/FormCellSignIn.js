/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Input from 'Components/atoms/Input/Input';
import Label from 'Components/atoms/Label/Label';
import InputError from 'Components/atoms/InputError/InputError';

const Wrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.lightmode.colors.background};
`;

const FormCellSignIn = ({ name, type, errors, onChange, value, backendErr }) => {
  return (
    <>
      <Wrapper>
        <Input
          user
          name={name}
          error={errors}
          type={type}
          placeholder=" "
          onChange={onChange}
          value={value}
        />
        {type === 'password' ? (
          <Label>hasło</Label>
        ) : name === 'email' ? (
          <Label>email</Label>
        ) : type === 'date' ? (
          <Label> Data urodzenia</Label>
        ) : (
          <Label>nazwa użytkownika</Label>
        )}
        {errors && <InputError>{errors}</InputError>}
        {backendErr && <InputError>{backendErr}</InputError>}
      </Wrapper>
    </>
  );
};

FormCellSignIn.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  errors: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  backendErr: PropTypes.string,
};
FormCellSignIn.defaultProps = {
  errors: null,
  backendErr: null,
};

export default FormCellSignIn;
