import React from 'react';
import styles from './Item.module.scss';

const Item = ({ name, amount, date, remind }) => (
  <div className={styles.wrapper}>
    <span
      className={styles.name}
    >
      Lek <span className={styles.value}>{name}</span>
    </span>
    <span
      className={styles.amount}
    >
      Ilość <span className={styles.value}>{amount}</span>
    </span>
    <span
      className={styles.date}
    >
      Data ważności <span className={styles.value}>{date}</span>
    </span>
    {remind ?
      <span className={styles.remind}>Przypomnienie
        <span className={styles.value}>TAK</span>
      </span> :
      <span className={styles.remind}>Przypomnienie
      <span className={styles.value}>NIE</span>
      </span>}
  </div>
);

export default Item;