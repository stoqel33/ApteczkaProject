import React from 'react';

import FormCellSignIn from './FormCellSignIn';

export default {
  component: FormCellSignIn,
  title: 'molecules/FormCellSignIn',
};

export const Email = () => <FormCellSignIn />;
export const Password = () => <FormCellSignIn type="password" />;
