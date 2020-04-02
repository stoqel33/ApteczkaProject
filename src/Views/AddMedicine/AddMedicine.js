import React from 'react';
import AppContext from 'context';
import Form from 'Components/Form/Form';

const AddMedicine = () => (
  <AppContext.Consumer>
    {(context) => <Form addMedicine={context.addMedicine} />}
  </AppContext.Consumer>
);

export default AddMedicine;
