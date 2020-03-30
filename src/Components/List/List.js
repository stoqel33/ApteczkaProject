import React from 'react';
import Item from './Item/Item';

const List = ({ medicines }) => {
  return (
    <>
      {
        medicines.map((medicine) =>
          <Item
            key={medicine.id}
            name={medicine.name}
            amount={medicine.amount}
            date={medicine.date}
            remind={medicine.remind}
          />
        )
      }
    </>
  );
}

export default List;
