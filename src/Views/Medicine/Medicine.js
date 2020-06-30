/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMedicines } from 'data/Actions/medicinesActions';

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
    burgerMenu: false,
    today: new Date().toISOString().slice(0, 10),
  };
  componentDidMount() {
    const { getMed } = this.props;
    getMed();
  }

  componentDidUpdate(prevProps) {
    const { refresh, getMed } = this.props;
    if (refresh !== prevProps.refresh) {
      getMed();
    }
  }

  handleSearchToogle = () => {
    this.setState((prevState) => ({
      search: !prevState.search,
    }));
  };
  handleBurgerToogle = () => {
    this.setState((prevState) => ({
      burgerMenu: !prevState.burgerMenu,
    }));
  };

  render() {
    const { medicines, loading } = this.props;
    if (medicines.length > 1) {
      medicines.sort((a, b) => a.name.toString().localeCompare(b.name, 'pl'));
    }
    return (
      <>
        <MedicinesList
          searchToggle={this.handleSearchToogle}
          burgerToggle={this.handleBurgerToogle}
          searching={this.state.search}
          burgerMenu={this.state.burgerMenu}
          today={this.state.today}
          medicines={medicines}
        />
        {loading && <Load />}
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
  loading: PropTypes.bool,
  getMed: PropTypes.func.isRequired,
};
Medicine.defaultProps = {
  medicines: [],
  loading: false,
};
const mapStateToProps = (state) => {
  const { medicines, loading, refresh } = state.medicines;
  return { medicines, loading, refresh };
};
const mapDispatchToProps = (dispatch) => ({
  getMed: () => dispatch(getMedicines()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Medicine);
