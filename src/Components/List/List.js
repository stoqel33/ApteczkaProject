import React from 'react';
import Item from 'Components/List/Item/Item';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const List = ({ medicines }) => {
  return (
    <Wrapper>
      {medicines.map((medicine) => (
        <Item
          key={medicine.id}
          name={medicine.name}
          amount={medicine.amount}
          date={medicine.date}
          remind={medicine.remind}
        />
      ))}
    </Wrapper>
  );
};

export default List;
