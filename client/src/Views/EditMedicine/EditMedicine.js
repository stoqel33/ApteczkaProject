/* eslint-disable no-underscore-dangle */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import FormEdit from "templates/FormEdit/FormEdit";

const EditMedicine = ({ medicine, medicines }) => {
  const [deleteQuery, setDeleteQuery] = useState(false);
  const handleToggleQuery = () => {
    if (deleteQuery) setDeleteQuery(false);
    else setDeleteQuery(true);
  };
  return (
    <>
      <FormEdit
        medicine={medicine}
        medicines={medicines}
        deleteQuery={deleteQuery}
        handleToggleQuery={handleToggleQuery}
      />
    </>
  );
};

EditMedicine.propTypes = {
  medicine: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    expiryDate: PropTypes.string.isRequired,
  }).isRequired,
  medicines: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { medicines } = state.medicines;
  const url = ownProps.match.params.id;
  const medicine = medicines.find((item) => item._id === url);
  return { medicine, medicines };
};
export default connect(mapStateToProps)(EditMedicine);
