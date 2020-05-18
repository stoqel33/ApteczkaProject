/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMedicines } from 'Actions';
import Link from 'Styled/Link';
import MedicineItem from 'Components/MedicineItem/MedicineItem';
import Search from 'Components/Search/Search';
import MagnifyingGlass from 'Components/Icons/MagnifyingGlass.js';
import BurgerMenu from 'Components/Icons/BurgerMenu.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
`;
const Title = styled.h1`
  margin: 30px 0;
  color: white;
`;
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Empty = styled.h1`
  margin: 50px 10px;
  padding: 100px 40px;
  background-color: rgba(245, 245, 245, 0.3);
  border-radius: 10%;
  color: black;
`;
const Icon = styled.div`
  top: 15px;
  cursor: pointer;
`;
const ButtonAddNew = styled.button`
  width: 100%;
  margin-bottom: 20px;
  font-size: 35px;
  color: white;
  background-color: transparent;
  border: none;
`;
const Info = styled.span`
  display: flex;
  position: fixed;
  align-self: center;
  padding-top: 0px;
`;
const MedicinesWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (min-width: 1000px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
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
    const { medicines, isLoading, response } = this.props;

    return (
      <>
        {response ? (
          <Wrapper>
            <TitleWrap>
              <Icon onClick={this.handleSearchToogle}>
                {medicines.length > 0 ? <MagnifyingGlass /> : null}
              </Icon>
              <Title>Apteczka</Title>
              <Icon>
                <BurgerMenu />
              </Icon>
            </TitleWrap>
            {isLoading ? <Info>Loading...</Info> : null}
            {this.state.search ? (
              <Search
                medicines={medicines}
                today={this.state.today}
                toggle={this.handleSearchToogle}
              />
            ) : (
              <MedicinesWrap>
                {medicines.length > 0 ? (
                  medicines.map(({ name, amount, expiryDate, _id }) => (
                    <MedicineItem
                      key={_id}
                      id={_id}
                      name={name}
                      amount={amount}
                      date={expiryDate}
                      today={this.state.today}
                    />
                  ))
                ) : (
                  <Empty>Brak leków</Empty>
                )}
              </MedicinesWrap>
            )}
            <ButtonAddNew>
              <Link to="/ApteczkaProject/addMedicine">Dodaj nowy lek</Link>
            </ButtonAddNew>
          </Wrapper>
        ) : (
          <Info>Sorry, database is down</Info>
        )}
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
