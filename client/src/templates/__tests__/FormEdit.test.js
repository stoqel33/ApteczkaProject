import React from 'react';
import { Provider } from 'react-redux';
import store from 'data/Store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Theme/mainTheme';
import { renderWithRouter } from 'testUtils';
import '@testing-library/jest-dom/extend-expect';

import FormEdit from 'templates/FormEdit/FormEdit';

const Form = (props) => {
  const utils = renderWithRouter(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <FormEdit {...props} />
      </ThemeProvider>
    </Provider>,
  );

  return { ...utils };
};

describe('Form Edit component', () => {
  it('Component render', () => {
    const { getByText } = Form({
      medicine: [
        { _id: '0', name: 'apap', amount: 5, expiryDate: '2020-01-01', copy: true },
      ],
    });
    expect(getByText('Edytuj Lek')).toBeInTheDocument();
  });

  it('Input is readonly if medicine is copy', () => {
    const { getByTestId } = Form({
      medicine: [
        { _id: '0', name: 'apap', amount: 5, expiryDate: '2020-01-01', copy: true },
      ],
    });
    const input = getByTestId('input');
    expect(input).toHaveAttribute('disabled');
  });
});
