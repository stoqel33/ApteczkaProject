import React from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import AppContext from 'context';
import axios from 'axios';
import GlobalStyle from 'Theme/GlobalStyle';
import Medicine from 'Views/Medicine/Medicine';
import AddMedicine from 'Views/AddMedicine/AddMedicine';
import EditMedicine from 'Views/EditMedicine/EditMedicine';
import Error from 'Views/Error/Error';

class Root extends React.Component {
  state = {
    response: true,
    id: '1',
    today: new Date().toISOString().slice(0, 10),
    medicines: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:3000/ApteczkaProject')
      .then((resp) => {
        if (resp.data.length > 0) {
          this.setState({
            medicines: resp.data.map((medicine) => ({
              id: medicine._id,
              name: medicine.name,
              amount: medicine.amount,
              date: medicine.expiryDate.slice(0, 10),
              show: true,
            })),
          });
        }
      })
      .catch((err) => {
        console.log('Cannot get response database ' + err);
        this.setState({
          response: false,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.medicines.length !== this.state.medicines.length) {
      axios.get('http://localhost:3000/ApteczkaProject').then((resp) => {
        this.setState({
          medicines: resp.data.map((medicine) => ({
            id: medicine._id,
            name: medicine.name,
            amount: medicine.amount,
            date: medicine.expiryDate.slice(0, 10),
            show: true,
          })),
        });
      });
    }
  }

  addMedicine = (name, amount, date) => {
    const newMedicine = {
      name: name,
      amount: Number(amount),
      expiryDate: date,
    };

    this.setState((prevState) => ({
      medicines: [...prevState.medicines, newMedicine],
    }));

    axios
      .post('http://localhost:3000/ApteczkaProject/addMedicine', newMedicine)
      .then((res) => console.log(res.data));
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

    // window.location = '/ApteczkaProject';
  };

  // showSearchMedicine = (medicine) => {
  //   console.log(medicine);

  //   this.setState({
  //     medicines: medicine,
  //   });
  // };

  render() {
    const contextElements = {
      today: this.state.today,
      medicines: this.state.medicines,
      addMedicine: this.addMedicine,
      changeMedicine: this.changeMedicine,
      // showSearchMedicine: this.showSearchMedicine,
    };

    return (
      <Router>
        <GlobalStyle />
        {this.state.response ? (
          <AppContext.Provider value={contextElements}>
            <Switch>
              <Route exact path="/ApteczkaProject" component={Medicine} />
              <Route path="/ApteczkaProject/addMedicine" component={AddMedicine} />
              <Route path="/ApteczkaProject/editMedicine/:id" component={EditMedicine} />
            </Switch>
          </AppContext.Provider>
        ) : (
          <Error />
        )}
      </Router>
    );
  }
}

export default Root;
