import React from 'react';
import styles from './List.module.scss';
import Item from './Item/Item';

const List = ({ medicines }) => {
  return (
    <div className={styles.wrapper}>
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
    </div>
  );
}

export default List;
