import React from 'react';
import { fireEvent, waitForDomChange } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'data/Store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Theme/mainTheme';
import { renderWithRouter } from 'testUtils';
import '@testing-library/jest-dom/extend-expect';

import FormCreateProfile from 'templates/FormCreateProfile/FormCreateProfile';

const Form = (props) => {
  const utils = renderWithRouter(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <FormCreateProfile {...props} />
      </ThemeProvider>
    </Provider>,
  );

  return { ...utils };
};

describe('Form Create Profile template', () => {
  it('Component renders', () => {
    const { getByText } = Form();
    expect(getByText('Stwórz profil')).toBeInTheDocument();
  });

  it('Show error if nickname is empty during submitting', async () => {
    const { getByText } = Form();
    const buttonSubmit = getByText('Stwórz konto');
    fireEvent.click(buttonSubmit);
    await waitForDomChange(() => {
      expect(getByText('Podaj nazwę swojego profilu')).toBeInTheDocument();
    });
  });
});
