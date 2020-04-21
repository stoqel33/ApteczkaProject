import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from 'Theme/GlobalStyle';
import Medicine from 'Views/Medicine/Medicine';
import AddMedicine from 'Views/AddMedicine/AddMedicine';
import EditMedicine from 'Views/EditMedicine/EditMedicine';

const Root = () => (
  <Router>
    <GlobalStyle />
    <Switch>
      <Route exact path="/ApteczkaProject" component={Medicine} />
      <Route path="/ApteczkaProject/addMedicine" component={AddMedicine} />
      <Route path="/ApteczkaProject/editMedicine/:id" component={EditMedicine} />
    </Switch>
  </Router>
);

export default Root;
