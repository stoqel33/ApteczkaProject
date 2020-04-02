import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppContext from 'context';
import GlobalStyle from 'Theme/GlobalStyle';
import Medicine from 'Views/Medicine/Medicine';
import AddMedicine from 'Views/AddMedicine/AddMedicine';

class Root extends React.Component {
  id = 0;
  state = {
    medicines: [],
  };

  addMedicine = (name, amount, date, remind) => {
    const medicine = {
      id: this.id,
      name,
      amount,
      date,
      remind,
    };
    this.id++;

    this.setState((prevState) => ({
      medicines: [...prevState.medicines, medicine],
    }));
    return true;
  };

  render() {
    const contextElements = {
      medicines: this.state.medicines,
      addMedicine: this.addMedicine,
    };

    return (
      <Router>
        <GlobalStyle />
        <AppContext.Provider value={contextElements}>
          <Switch>
            <Route exact path="/ApteczkaProject" component={Medicine} />
            <Route path="/ApteczkaProject/addMedicine" component={AddMedicine} />
          </Switch>
        </AppContext.Provider>
      </Router>
    );
  }
}

export default Root;
