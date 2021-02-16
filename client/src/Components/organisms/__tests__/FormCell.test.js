import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Theme/mainTheme';

import FormCell from 'Components/molecules/FormCell/FormCell';

const renderForm = (props) => {
  const utils = render(
    <ThemeProvider theme={theme}>
      <FormCell {...props} />
    </ThemeProvider>,
  );
  return { ...utils };
};

describe('FormCell molecule', () => {
  it('renders current component (name medicine)', () => {
    const { getByText } = renderForm({ type: 'text', name: 'name', value: 'apap' });
    getByText('Nazwa Leku');
  });

  it('renders current component (amount medicine)', () => {
    const { getByText } = renderForm({ type: 'number', name: 'amount', value: 8 });
    getByText('Ilość');
  });

  it('renders current component (date medicine)', () => {
    const { getByText } = renderForm({ type: 'date', name: 'date', value: '2020-01-01' });
    getByText('Data Ważności');
  });
});
