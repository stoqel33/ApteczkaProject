import React from 'react';
import AppContext from 'context';
import FormEdit from 'Components/Form/FormEdit';

const EditMedicine = ({ match }) => (
  <AppContext.Consumer>
    {(context) => (
      <FormEdit
        medicines={context.medicines}
        changeMedicine={context.changeMedicine}
        target={context.target}
        today={context.today}
        url={match}
      />
    )}
  </AppContext.Consumer>
);

export default EditMedicine;
