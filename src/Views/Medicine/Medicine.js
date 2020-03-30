import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Medicine.module.scss';
import List from '../../Components/List/List';
import AppContext from '../../context';

class Medicine extends React.Component {

  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <h1 className={styles.title}>Apteczka</h1>
            {context.medicines.length > 0 ?
              <List medicines={context.medicines} /> :
              <h1 className={styles.nothing}>Brak leków</h1>
            }
            <Link
              to="/ApteczkaProject/addMedicine"
              className={styles.btnAdd}
            >Dodaj nowy lek</Link>
          </div>
        )}
      </AppContext.Consumer>

    );
  }
}

export default Medicine;