/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormEdit from 'Components/Form/FormEdit';

const EditMedicine = ({ medicine }) => {
  return (
    <>
      <FormEdit medicine={medicine} />
    </>
  );
};

EditMedicine.propTypes = {
  medicine: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      expiryDate: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { medicines } = state;
  const url = ownProps.match.params.id;
  const medicine = medicines.filter((item) => item._id === url);
  return { medicine };
};
export default connect(mapStateToProps)(EditMedicine);
