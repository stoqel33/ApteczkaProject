import React from 'react';
import Item from 'Components/List/Item/Item';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const List = ({ medicines }) => {
  const currentMedicines = medicines.filter(
    (currentMedicine) => currentMedicine.show === true,
  );
  return (
    <Wrapper>
      {currentMedicines.map((medicine) => (
        <Item
          key={medicine.id}
          id={medicine.id}
          name={medicine.name}
          amount={medicine.amount}
          date={medicine.date}
        />
      ))}
    </Wrapper>
  );
};

List.propTypes = {
  medicines: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      amount: PropTypes.number,
      date: PropTypes.string,
      show: PropTypes.bool,
    }),
  ).isRequired,
};

export default List;
