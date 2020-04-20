import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Inputs from 'Components/Form/Label/Input/Inputs';

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

const Label = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  children,
  autoComplete,
  minAmount,
  minDate,
}) => {
  return (
    <MedicineLabel htmlFor={name}>
      <Title>{children}</Title>
      <Inputs
        type={type}
        id={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        minAmount={minAmount}
        minDate={minDate}
      />
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
  autoComplete: PropTypes.string,
  minAmount: PropTypes.string,
  minDate: PropTypes.string,
};

Label.defaultProps = {
  placeholder: '',
  value: '',
  autoComplete: 'on',
  minAmount: '1',
  minDate: '',
};

export default Label;
