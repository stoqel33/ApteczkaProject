import React from 'react';
import Form from 'Components/Form/Form';
import AppContext from 'context';

const AddMedicine = () => (
  <AppContext.Consumer>
    {(context) => <Form addMedicine={context.addMedicine} />}
  </AppContext.Consumer>
);

export default AddMedicine;
