import React from 'react';
import { fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'data/Store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Theme/mainTheme';
import { renderWithRouter } from 'testUtils';
import '@testing-library/jest-dom/extend-expect';

import SearchMedicine from 'templates/SearchMedicine/SearchMedicine';

const Search = (props) => {
  const utils = renderWithRouter(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SearchMedicine {...props} />
      </ThemeProvider>
    </Provider>,
  );

  return { ...utils };
};

describe('Search medicine component', () => {
  it('Component renders', () => {
    const { getByTestId } = Search();
    expect(getByTestId('input'));
  });

  it('Show searching medicine', () => {
    const { getByTestId, getByText } = Search({
      medicines: [
        {
          _id: '0',
          name: 'Apap',
          amount: 5,
          expiryDate: '2020-01-01',
        },
      ],
    });
    const input = getByTestId('input');
    fireEvent.change(input, { target: { value: 'Ap' } });
    expect(getByText('Apap'));
  });
});
