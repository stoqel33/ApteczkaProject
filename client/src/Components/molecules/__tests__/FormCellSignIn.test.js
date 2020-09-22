import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Theme/mainTheme';
import '@testing-library/jest-dom/extend-expect';

import FormCellSignIn from 'Components/molecules/FormCellSignIn/FormCellSignIn';

const renderForm = (props) => {
  const utils = render(
    <ThemeProvider theme={theme}>
      <FormCellSignIn {...props} />
    </ThemeProvider>,
  );

  return { ...utils };
};

describe('FormCellSignIn molecules', () => {
  it('Component renders', () => {
    const { getByText } = renderForm();
    expect(getByText('nazwa użytkownika'));
  });

  it('Component render proper label', () => {
    const { getByText } = renderForm({ type: 'date' });
    expect(getByText('Data urodzenia'));
  });

  it('Component render error', () => {
    const { getByText } = renderForm({ errors: 'Błąd' });
    expect(getByText('Błąd'));
  });
});
