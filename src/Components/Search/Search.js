import React from 'react';
import PropTypes from 'prop-types';
import MedicineItem from 'Components/MedicineItem/MedicineItem';
import styled from 'styled-components/macro';

const Input = styled.input`
  margin: 0 20px 30px;
  color: white;
  padding: 10px 0 10px 15px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 10%;
  text-align: center;
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
    const { medicines } = this.props;
    const value = searchName.toLowerCase();
    const searchMedicine = medicines.filter((medicine) => {
      return medicine.name.toLowerCase().includes(value);
    });

    return (
      <>
        <Input type="text" value={searchName} onChange={this.handleSearch} />
        {searchMedicine.map(({ _id, name, amount, expiryDate }) => (
          <MedicineItem
            key={_id}
            id={_id}
            name={name}
            amount={amount}
            date={expiryDate}
          />
        ))}
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
