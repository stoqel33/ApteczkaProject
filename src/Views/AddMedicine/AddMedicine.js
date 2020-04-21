import React from 'react';
// import AppContext from 'context';
import axios from 'axios';
import Form from 'Components/Form/Form';

class AddMedicine extends React.Component {
  addMedicine = (name, amount, date) => {
    const newMedicine = {
      name: name,
      amount: Number(amount),
      expiryDate: date,
    };

    // this.setState((prevState) => ({
    //   medicines: [...prevState.medicines, newMedicine],
    // }));

    axios
      .post('http://localhost:3000/ApteczkaProject/addMedicine', newMedicine)
      .then((res) => console.log(res.data));
  };

  render() {
    return (
      <>
        <Form addMedicine={this.addMedicine} />
        {console.log(this.props)};
      </>
    );
  }
}

export default AddMedicine;
