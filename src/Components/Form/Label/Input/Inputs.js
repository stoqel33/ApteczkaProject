import React from 'react';
import styled from 'styled-components/macro';
import Proptypes from 'prop-types';

const Input = styled.input`
  color: white;
  padding: 10px 0 10px 15px;
  margin-right: 10px;
  background-color: transparent;
  border: none;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  ::placeholder {
    font-size: 300;
    color: white;
  }
`;

const InputAmount = styled(Input)`
  width: 50px;
`;

const Inputs = ({
  type,
  id,
  checked,
  placeholder,
  autoComplete,
  value,
  onChange,
  minAmount,
  minDate,
}) => {
  return (
    <>
      {(type === 'text' && (
        <Input
          type={type}
          id={id}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
        />
      )) ||
        (type === 'tel' && (
          <InputAmount
            type={type}
            id={id}
            placeholder={placeholder}
            autoComplete={autoComplete}
            value={value}
            onChange={onChange}
            min={minAmount}
          />
        )) ||
        (type === 'date' && (
          <Input
            type={type}
            id={id}
            placeholder={placeholder}
            autoComplete={autoComplete}
            value={value}
            onChange={onChange}
            min={minDate}
          />
        )) ||
        (type === 'checkbox' && (
          <Input type={type} id={id} checked={checked} onChange={onChange} />
        ))}
    </>
  );
};

Inputs.propTypes = {
  type: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
  checked: Proptypes.bool,
  placeholder: Proptypes.string,
  autoComplete: Proptypes.string,
  value: Proptypes.string,
  onChange: Proptypes.func.isRequired,
  minAmount: Proptypes.string,
  minDate: Proptypes.string,
};

Inputs.defaultProps = {
  checked: false,
  placeholder: '',
  autoComplete: 'on',
  value: '',
  minAmount: '1',
  minDate: '',
};

export default Inputs;
