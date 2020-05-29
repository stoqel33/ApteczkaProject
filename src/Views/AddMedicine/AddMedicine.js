import React from 'react';
import FormAdd from 'templates/FormAdd/FormAdd';

class AddMedicine extends React.Component {
  state = {
    selfsameMed: false,
    name: '',
    amount: 0,
    date: '',
  };

  handleTheSameMedicineQuery = (name, amount, date) => {
    this.setState({
      selfsameMed: true,
      name,
      amount,
      date,
    });
  };

  render() {
    return (
      <>
        <FormAdd
          selfsameMed={this.state.selfsameMed}
          theSameMedQueryOn={this.handleTheSameMedicineQuery}
          nameMed={this.state.name}
          amountMed={this.state.amount}
          dateMed={this.state.date}
        />
      </>
    );
  }
}

export default AddMedicine;
