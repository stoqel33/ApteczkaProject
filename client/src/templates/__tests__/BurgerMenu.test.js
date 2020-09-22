import React from 'react';
import { fireEvent, waitForDomChange, waitForElement } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'data/Store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Theme/mainTheme';
import { renderWithRouter } from 'testUtils';
import AppContext from 'context';

import BurgerMenu from 'templates/BurgerMenu/BurgerMenu';

const renderBurger = (props) => {
  const mockedContext = {
    licencesState: false,
    handleLicences: jest.fn(),
  };
  const utils = renderWithRouter(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={mockedContext}>
          <BurgerMenu {...props} />
        </AppContext.Provider>
      </ThemeProvider>
    </Provider>,
  );
  return { ...utils, mockedContext };
};

describe('Burger Menu template', () => {
  it('Componnet renders', () => {
    const { getByText } = renderBurger();
    expect(getByText('Wyloguj'));
  });

  it('Component control button calls proper function', () => {
    const { getByText, mockedContext } = renderBurger();
    const button = getByText('Źródła');
    fireEvent.click(button);
    expect(mockedContext.handleLicences).toBeCalledTimes(1);
  });
});
