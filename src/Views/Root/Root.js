import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppContext from 'context';
import GlobalStyle from 'Theme/GlobalStyle';
import Medicine from 'Views/Medicine/Medicine';
import AddMedicine from 'Views/AddMedicine/AddMedicine';
import EditMedicine from 'Views/EditMedicine/EditMedicine';

class Root extends React.Component {
  id = 0;
  state = {
    today: new Date().toISOString().slice(0, 10),
    target: null,
    medicines: [],
  };

  addMedicine = (name, amount, date, remind) => {
    const medicine = {
      id: this.id,
      name,
      amount,
      date,
      remind,
      show: true,
    };
    this.id++;

    this.setState((prevState) => ({
      medicines: [...prevState.medicines, medicine],
    }));
  };

  changeMedicine = (name, amount, date, remind) => {
    const oldMedicines = this.state.medicines;
    oldMedicines[this.state.target] = {
      id: this.state.target,
      name: name,
      amount: amount,
      date: date,
      remind: remind,
    };

    this.setState({
      medicines: oldMedicines,
    });
  };

  handleClickGetId = (id) => {
    this.setState({
      target: id,
    });
    return true;
  };

  render() {
    const contextElements = {
      today: this.state.today,
      target: this.state.target,
      medicines: this.state.medicines,
      addMedicine: this.addMedicine,
      changeMedicine: this.changeMedicine,
      handle: this.handleClickGetId,
    };

    return (
      <Router>
        <GlobalStyle />
        <AppContext.Provider value={contextElements}>
          <Switch>
            <Route exact path="/ApteczkaProject" component={Medicine} />
            <Route path="/ApteczkaProject/addMedicine" component={AddMedicine} />
            <Route path="/ApteczkaProject/editMedicine" component={EditMedicine} />
          </Switch>
        </AppContext.Provider>
      </Router>
    );
  }
}

export default Root;
