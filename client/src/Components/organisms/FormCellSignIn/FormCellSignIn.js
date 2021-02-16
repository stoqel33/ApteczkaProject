/* eslint-disable no-nested-ternary */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Input from "Components/atoms/Input/Input";
import Label from "Components/atoms/Label/Label";
import InputError from "Components/atoms/InputError/InputError";

const Wrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.lightmode.colors.background};

  &:focus-within {
    margin-bottom: 1.2rem;
  }
`;

const FormCellSignIn = ({ id, name, type, errors, onChange, value, backendErr }) => {
  return (
    <Wrapper>
      <Input
        user
        id={id}
        name={name}
        errorUser={errors}
        type={type}
        placeholder=" "
        onChange={onChange}
        value={value}
      />
      {type === "password" ? (
        <Label htmlFor={id}>hasło</Label>
      ) : name === "email" ? (
        <Label htmlFor={id}>email</Label>
      ) : type === "date" ? (
        <Label htmlFor={id}>Data urodzenia</Label>
      ) : (
        <Label htmlFor={id}>nazwa użytkownika</Label>
      )}
      {errors && <InputError>{errors}</InputError>}
      {backendErr && <InputError>{backendErr}</InputError>}
    </Wrapper>
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
  name: "",
  type: "",
  onChange: () => {},
  value: "",
  errors: null,
  backendErr: null,
};

export default FormCellSignIn;
