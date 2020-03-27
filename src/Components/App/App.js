import React from 'react';
import List from '../List/List';
import Form from '../Form/Form';

class App extends React.Component {

  id = 0;
  state = {
    medicines: [],
  }

  addMedicine = (name, amount, date, remind) => {
    if (name.length > 2) {
      const medicine = {
        id: this.id,
        amount,
        date,
        remind,
      }
      this.id++;

      this.setState((prevState) => ({
        medicines: [...prevState.medicines, medicine]
      }))
      return true
    }
  }

  render() {
    return (
      <>
        <Form
          addMedicine={this.addMedicine}
        />
        <List />
      </>
    );
  }
}

export default App;