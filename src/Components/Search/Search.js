import React from 'react';
import PropTypes from 'prop-types';
import MedicineItem from 'Components/MedicineItem/MedicineItem';
import styled from 'styled-components/macro';

const WrapInput = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
`;

const MedicinesWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const Input = styled.input`
  width: 65%;
  color: white;
  padding: 10px 10px 10px 15px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 10px 0 0 10px;
  text-align: center;

  @media screen and (min-width: 1000px) {
    width: 40%;
  }
`;
const QuitIcon = styled.div`
  padding: 7px;
  min-width: 40px;
  color: white;
  border-left: solid white 1px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  border-radius: 0 10px 10px 0;
  position: relative;
  &::before,
  &::after {
    position: absolute;
    left: 18px;
    content: ' ';
    height: 22px;
    width: 2px;
    background-color: #fff;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;
class Search extends React.Component {
  state = {
    searchName: '',
  };

  handleSearch = (e) => {
    this.setState({
      searchName: e.target.value,
    });
  };

  render() {
    const { searchName } = this.state;
    const { medicines, toggle } = this.props;
    const value = searchName.toLowerCase();
    const searchMedicine = medicines.filter((medicine) => {
      return medicine.name.toLowerCase().includes(value);
    });

    return (
      <>
        <WrapInput>
          <Input type="text" value={searchName} onChange={this.handleSearch} />
          <QuitIcon onClick={toggle} />
        </WrapInput>
        <MedicinesWrap>
          {searchMedicine.map(({ _id, name, amount, expiryDate }) => (
            <MedicineItem
              key={_id}
              id={_id}
              name={name}
              amount={amount}
              date={expiryDate}
              today={this.props.today}
            />
          ))}
        </MedicinesWrap>
      </>
    );
  }
}

Search.propTypes = {
  medicines: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      amount: PropTypes.number,
      date: PropTypes.string,
      show: PropTypes.bool,
    }),
  ).isRequired,
};

export default Search;
