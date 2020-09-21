import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Theme/mainTheme';

import FormCell from 'Components/molecules/FormCell/FormCell';

describe('FormCell molecule', () => {
  it('renders current component (name medicine)', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <FormCell type="text" name="name" value="apap" />
      </ThemeProvider>,
    );

    getByText('Nazwa Leku');
  });

  it('renders current component (amount medicine)', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <FormCell type="number" name="amount" value="8" />
      </ThemeProvider>,
    );

    getByText('Ilość');
  });

  it('renders current component (date medicine)', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <FormCell type="date" name="date" value="2020-01-01" />
      </ThemeProvider>,
    );

    getByText('Data Ważności');
  });
});
