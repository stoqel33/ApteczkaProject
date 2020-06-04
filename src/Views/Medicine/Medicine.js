/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMedicines } from 'data/Actions';
import Load from '../../Components/Load/Load';
import MedicinesList from 'templates/MedicinesList/MedicinesList';

const Info = styled.span`
  display: flex;
  position: fixed;
  align-self: center;
  padding-top: 0px;
`;

class Medicine extends React.Component {
  state = {
    search: false,
    today: new Date().toISOString().slice(0, 10),
  };
  componentDidMount() {
    const { fetchMed } = this.props;
    fetchMed();
  }

  componentDidUpdate(prevProps) {
    const { response } = this.props;
    if (response === true) {
      const { refresh, fetchMed } = this.props;
      if (refresh !== prevProps.refresh) {
        fetchMed();
      }
    }
  }

  handleSearchToogle = () => {
    this.setState((prevState) => ({
      search: !prevState.search,
    }));
  };

  render() {
    const { medicines, isLoading, response, refresh } = this.props;
    medicines.sort((a, b) => a.name.toString().localeCompare(b.name, 'pl'));
    return (
      <>
        {response ? (
          <MedicinesList
            searchToggle={this.handleSearchToogle}
            searching={this.state.search}
            today={this.state.today}
            medicines={medicines}
            isLoading={isLoading}
            response={response}
            refresh={refresh}
          />
        ) : (
          <Info>Sorry, database is down</Info>
        )}
        {isLoading && <Load />}
      </>
    );
  }
}
Medicine.propTypes = {
  medicines: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      expiryDate: PropTypes.string.isRequired,
    }),
  ),
  isLoading: PropTypes.bool,
  response: PropTypes.bool.isRequired,
  refresh: PropTypes.bool,
  fetchMed: PropTypes.func.isRequired,
};
Medicine.defaultProps = {
  medicines: [],
  isLoading: false,
  refresh: false,
};
const mapStateToProps = (state) => {
  const { medicines, isLoading, response, refresh } = state;
  return { medicines, isLoading, response, refresh };
};
const mapDispatchToProps = (dispatch) => ({
  fetchMed: () => dispatch(fetchMedicines()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Medicine);
