import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'data/Store';
import { ThemeProvider } from 'styled-components';

import { theme } from 'Theme/mainTheme';
import GlobalStyle from 'Theme/GlobalStyle';
import Medicine from 'Views/Medicine/Medicine';
import AddMedicine from 'Views/AddMedicine/AddMedicine';
import EditMedicine from 'Views/EditMedicine/EditMedicine';

const Root = () => (
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Switch>
            <Route exact path="/ApteczkaProject" component={Medicine} />
            <Route path="/ApteczkaProject/addMedicine" component={AddMedicine} />
            <Route path="/ApteczkaProject/editMedicine/:id" component={EditMedicine} />
          </Switch>
        </>
      </ThemeProvider>
    </Router>
  </Provider>
);

export default Root;
