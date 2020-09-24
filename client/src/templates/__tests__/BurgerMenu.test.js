import React from 'react';
import { fireEvent, waitForDomChange, waitForElement } from '@testing-library/react';
import { renderWithRouter } from 'testUtils';
import { Provider } from 'react-redux';
import store from 'data/Store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Theme/mainTheme';
import AppContext from 'context';

import BurgerMenu from 'templates/BurgerMenu/BurgerMenu';

const renderBurger = (mocked, ...props) => {
  const utils = renderWithRouter(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={{ ...mocked }}>
          <BurgerMenu {...props} />
        </AppContext.Provider>
      </ThemeProvider>
    </Provider>,
  );
  return { ...utils };
};

describe('Burger Menu template', () => {
  it('Componnet renders', () => {
    const { getByText } = renderBurger();
    expect(getByText('Wyloguj'));
  });

  it('Component control button calls function', async () => {
    const mockedContext = {
      licencesState: false,
      handleLicences: jest.fn(),
    };
    const { getByText } = renderBurger(mockedContext);
    const button = getByText('Źródła');
    fireEvent.click(button);
    expect(mockedContext.handleLicences).toBeCalledTimes(1);
  });

  it('Show proper content if licencesState is true', () => {
    const mockedContext = {
      licencesState: true,
      handleLicences: jest.fn(),
    };
    const { getByText } = renderBurger(mockedContext);
    expect(getByText('Ikony'));
  });
});
