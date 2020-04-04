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

const List = ({ medicines, handle }) => {
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
          remind={medicine.remind}
          handle={handle}
        />
      ))}
    </Wrapper>
  );
};

List.propTypes = {
  medicines: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      amount: PropTypes.string,
      date: PropTypes.string,
      remind: PropTypes.bool,
    }),
  ).isRequired,
  handle: PropTypes.func.isRequired,
};

export default List;
