/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { getMedicines } from "data/Actions/medicinesActions";
import AppContect from "context";

import MedicinesList from "templates/MedicinesList/MedicinesList";

class Medicine extends React.Component {
  state = {
    search: false,
    burgerMenu: false,
    burgerRef: false,
    today: new Date().toISOString().slice(0, 10),
  };

  targetElement = null;

  componentDidMount() {
    const { getMed } = this.props;
    this.targetElement = document.body;
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

  showTargetElement = () => {
    disableBodyScroll(this.targetElement);
    this.targetElement.style.position = "fixed";
    this.targetElement.style.left = "50%";
    this.targetElement.style.transform = "translate(-50%)";
  };
  hideTargetElement = () => {
    enableBodyScroll(this.targetElement);
    this.targetElement.style.position = "";
    this.targetElement.style.left = "";
    this.targetElement.style.transform = "";
  };
  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  handleBurgerToogle = () => {
    this.setState((prevState) => ({
      burgerMenu: !prevState.burgerMenu,
    }));
    if (this.state.burgerMenu) {
      this.hideTargetElement();
      setTimeout(() => {
        this.setState({ burgerRef: false });
      }, 500);
    } else {
      window.scrollTo(0, 0);
      this.showTargetElement();
    }
  };

  handleCheckRef = () => {
    this.setState((prevState) => ({
      burgerRef: !prevState.burgerRef,
    }));
  };

  render() {
    const { medicines, loading } = this.props;
    if (medicines.length > 1) {
      medicines.sort((a, b) => a.name.toString().localeCompare(b.name, "pl"));
    }
    return (
      <AppContect.Provider
        value={{
          licencesState: this.state.burgerRef,
          handleLicences: this.handleCheckRef,
        }}
      >
        <MedicinesList
          searchToggle={this.handleSearchToogle}
          burgerToggle={this.handleBurgerToogle}
          searching={this.state.search}
          burgerMenu={this.state.burgerMenu}
          today={this.state.today}
          medicines={medicines}
          loading={loading}
        />
      </AppContect.Provider>
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
