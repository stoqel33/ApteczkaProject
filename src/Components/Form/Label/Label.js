import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MedicineLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 800px) {
    .medicineLabel {
      margin: 0 80px;
    }
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-left: 10px;
`;

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

const Label = ({ name, type, placeholder, value, onChange, children, ...props }) => {
  return (
    <MedicineLabel htmlFor={name}>
      <Title>{children}</Title>
      {type === 'checkbox' ? (
        <Input type={type} id={name} checked={props.checked} onChange={onChange} />
      ) : type === 'number' ? (
        <InputAmount
          type={type}
          id={name}
          placeholder={placeholder}
          autoComplete={props.autoComplete}
          value={value}
          onChange={onChange}
          min="0"
        />
      ) : (
        <Input
          type={type}
          id={name}
          placeholder={placeholder}
          autoComplete={props.autoComplete}
          value={value}
          onChange={onChange}
        />
      )}
    </MedicineLabel>
  );
};

Label.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Label;
