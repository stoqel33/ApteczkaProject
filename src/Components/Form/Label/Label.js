import React from 'react';
import styles from './Label.module.scss';

const Label = ({ name, type, placeholder, value, onChange, children, ...props }) => {
  return (
    <label htmlFor={name} className={styles.medicineLabel}>
      <h2 className={styles.nameTitle}>{children}</h2>
      {type === "checkbox" ?
        <input
          type={type}
          id={name}
          className={styles.inputRemind}
          checked={props.checked}
          onChange={onChange}
        />
        :
        type === 'number' ?
          <input
            type={type}
            id={name}
            className={styles.inputAmount}
            placeholder={placeholder}
            autoComplete={props.autoComplete}
            value={value}
            onChange={onChange}
            min='0'
          /> :
          <input
            type={type}
            id={name}
            className={styles.input}
            placeholder={placeholder}
            autoComplete={props.autoComplete}
            value={value}
            onChange={onChange}
          />

      }
    </label>
  );
}

export default Label;