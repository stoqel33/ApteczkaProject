import React from 'react';
import { Provider } from 'react-redux';
import store from 'data/Store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Theme/mainTheme';
import { renderWithRouter } from 'testUtils';
import '@testing-library/jest-dom/extend-expect';

import FormSignIn from 'templates/FormSignIn/FormSignIn';

const Form = (props) => {
  const utils = renderWithRouter(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <FormSignIn {...props} />
      </ThemeProvider>
    </Provider>,
  );

  return { ...utils };
};

describe('Form Sign in component', () => {
  it('Component renders', () => {
    const { getByText } = Form();
    expect(getByText('Rejestracja')).toBeInTheDocument();
  });

  it('Show login form if props is true', () => {
    const { getByText } = Form({ registered: true });
    expect(getByText('Logowanie')).toBeInTheDocument();
  });
});
