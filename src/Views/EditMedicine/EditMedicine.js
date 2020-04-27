import React from 'react';
import { connect } from 'react-redux';
import FormEdit from 'Components/Form/FormEdit';

const EditMedicine = ({ medicine }) => {
  return (
    <>
      <FormEdit medicine={medicine} />
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { medicines } = state;
  const url = ownProps.match.params.id;
  const medicine = medicines.filter((item) => item._id === url);
  return { medicine };
};
export default connect(mapStateToProps)(EditMedicine);
