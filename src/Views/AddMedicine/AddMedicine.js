import React from 'react';
import AppContext from 'context';
import Form from 'Components/Form/Form';

const AddMedicine = () => (
  <AppContext.Consumer>
    {(context) => (
      <Form
        addMedicine={context.addMedicine}
        handle={context.handle}
        today={context.today}
      />
    )}
  </AppContext.Consumer>
);

export default AddMedicine;
