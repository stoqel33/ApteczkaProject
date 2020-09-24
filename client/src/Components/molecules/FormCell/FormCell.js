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

const FormCell = ({ type, name, errors, onChange, value, expired, copy }) => {
  return (
    <>
      {type === 'text' ? (
        <Wrapper>
          <Input
            name={name}
            spellCheck="false"
            id={name}
            error={errors}
            type={type}
            placeholder=" "
            autoComplete="off"
            onChange={onChange}
            value={value}
            disabled={copy}
            data-testid="input"
          />
          <Label htmlFor={name}>Nazwa Leku</Label>
          {errors && <InputError>{errors}</InputError>}
        </Wrapper>
      ) : type === 'number' ? (
        <Wrapper>
          <Input
            name={name}
            id={name}
            type={type}
            placeholder=" "
            autoComplete="off"
            onChange={onChange}
            value={value}
            error={errors}
          />
          <Label htmlFor={name}>Ilość</Label>
          {errors && <InputError>{errors}</InputError>}
        </Wrapper>
      ) : (
        <Wrapper>
          <Input
            name={name}
            id={name}
            error={errors}
            type={type}
            onChange={onChange}
            value={value}
            placeholder=" "
            expired={expired}
          />
          <Label htmlFor={name}>Data Ważności</Label>
          {errors && <InputError>{errors}</InputError>}
          {expired && <InputError>Lek jest przeterminowany!</InputError>}
        </Wrapper>
      )}
    </>
  );
};

FormCell.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  expired: PropTypes.bool,
  copy: PropTypes.bool,
};
FormCell.defaultProps = {
  type: '',
  name: '',
  errors: null,
  onChange: () => {},
  value: '',
  expired: false,
  copy: false,
};

export default FormCell;
