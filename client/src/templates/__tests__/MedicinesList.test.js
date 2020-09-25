import React from 'react';
import { Provider } from 'react-redux';
import store from 'data/Store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Theme/mainTheme';
import { renderWithRouter } from 'testUtils';
import '@testing-library/jest-dom/extend-expect';
import AppContext from 'context';

import MedicinesList from 'templates/MedicinesList/MedicinesList';

const Medicines = (props) => {
  const mocked = {
    licencesState: false,
    handleLicences: jest.fn(),
  };
  const utils = renderWithRouter(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={mocked}>
          <MedicinesList {...props} />
        </AppContext.Provider>
      </ThemeProvider>
    </Provider>,
  );

  return { ...utils };
};

describe('Medicines list component', () => {
  it('Component renders', () => {
    const { getByText } = Medicines();
    expect(getByText('Twoja apteczka jest pusta')).toBeInTheDocument();
  });

  it('Show medicine if it is in the props', () => {
    const { getByText } = Medicines({
      medicines: [
        {
          _id: '0',
          name: 'Apap',
          amount: 5,
          expiryDate: '2020-01-01',
        },
      ],
    });

    expect(getByText('Apap')).toBeInTheDocument();
  });
});
