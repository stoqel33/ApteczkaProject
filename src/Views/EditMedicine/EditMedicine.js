import React from 'react';
// import AppContext from 'context';
import axios from 'axios';
import FormEdit from 'Components/Form/FormEdit';

class EditMedicine extends React.Component {
  state = {
    id: '',
    today: new Date().toISOString().slice(0, 10),
    medicines: [],
  };

  changeMedicine = (id, name, amount, date) => {
    const allMedicines = this.state.medicines;
    allMedicines[id] = {
      id,
      name,
      amount,
      date,
    };

    this.setState({
      medicines: allMedicines,
      id,
    });

    const newMed = {
      name,
      amount,
      expiryDate: date,
    };

    axios
      .post('http://localhost:3000/ApteczkaProject/editMedicine/update/' + id, newMed)
      .then((res) => console.log(res.data));
    window.location = '/ApteczkaProject';
  };

  componentDidMount() {}

  render() {
    return (
      <>
        <FormEdit
          medicines={this.state.medicines}
          changeMedicine={this.changeMedicine}
          today={this.state.today}
          url={this.props.match.params.id}
        />
      </>
    );
  }
}

export default EditMedicine;
