import React from 'react'
import { Link } from 'react-router-dom';
import List from '../../Components/List/List';
import AppContext from '../../context';

class Medicine extends React.Component {

  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <>
            {context.medicines.length > 0 ?
              <List medicines={context.medicines} /> :
              <h1>PUSTO</h1>
            }
            <Link to="/ApteczkaProject/addMedicine">Dodaj nowy lek</Link>
          </>
        )}
      </AppContext.Consumer>

    );
  }
}

export default Medicine;