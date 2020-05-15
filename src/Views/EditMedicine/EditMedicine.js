/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormEdit from 'Components/Form/FormEdit';

class EditMedicine extends React.Component {
  state = {
    deleteQuery: false,
  };

  handleEnableDelete = () => {
    this.setState({
      deleteQuery: true,
    });
  };

  handleDisableDelete = () => {
    this.setState({
      deleteQuery: false,
    });
  };
  render() {
    return (
      <>
        <FormEdit
          medicine={this.props.medicine}
          deleteQuery={this.state.deleteQuery}
          handleEnableDelete={this.handleEnableDelete}
          handleDisableDelete={this.handleDisableDelete}
        />
      </>
    );
  }
}

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
